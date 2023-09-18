import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { storage } from '../firebase';
import { getAuth  } from "firebase/auth";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";


//let user =  getAuth().currentUser;
//let userEmail = user.email;

const mimeType = 'audio/webm'; // audio/webm or audio/ogg or audio/wav

function AddAudioNotes() {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState('inactive');
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState(null);
    const [audioStream, setAudioStream] = useState(null);



    const getPermission = async () => {
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
            try {
                if (navigator.mediaDevices) {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    setAudioStream(stream);
                    setPermission(true);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('The browser does not support audio recording.');
        }
    };


    const startRecording = () => {
        setRecordingStatus('recording');
        const media = new MediaRecorder(audioStream, { mimeType: mimeType });
        mediaRecorder.current = media;
        mediaRecorder.current.start();
        let audioChunks = [];
        mediaRecorder.current.addEventListener("dataavailable", event => {
            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }
        });


        let visualizing = true;


        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaStreamSource(audioStream); // Assuming 'stream' is your audio input
        source.connect(analyser); // Connect the source to the analyser for visualization
        analyser.fftSize = 32;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);
        //console.log(dataArray);





        const canvas = document.getElementById("canvas");
        const canvasCtx = canvas.getContext("2d");
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;
        const draw = () => {
            if (!visualizing) return;
            requestAnimationFrame(draw);
            analyser.getByteTimeDomainData(dataArray);
            canvasCtx.fillStyle = "rgb(250, 200, 200)";
            canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
            canvasCtx.lineWidth = 2;
            canvasCtx.strokeStyle = "rgb(0, 0, 0)";
            canvasCtx.beginPath();
            const sliceWidth = (WIDTH * 1.0) / bufferLength;

            let x = 0;
            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = (v * HEIGHT) / 2;
                if (i === 0) {
                    canvasCtx.moveTo(x, y);
                } else {
                    canvasCtx.lineTo(x, y);
                }
                x += sliceWidth;
            }
            canvasCtx.lineTo(canvas.width, canvas.height / 2);
            canvasCtx.stroke();
        };


        draw();

        const startOscillator = () => {


            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            let oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(140, audioContext.currentTime); // value in hertz
            oscillator.connect(audioContext.destination);
            oscillator.start();
            return oscillator;
        };

        let oscillator = startOscillator();



        mediaRecorder.current.addEventListener("pause", () => {
            oscillator.stop();
        });

        mediaRecorder.current.addEventListener("resume", () => {
            oscillator = startOscillator();
        });



        mediaRecorder.current.addEventListener("stop", () => {
            oscillator.stop();
            oscillator.disconnect();
            analyser.disconnect();
            visualizing = false;
            const closeCanvas = document.getElementById("canvas").toggleAttribute("hidden");

        });


        setAudioChunks(audioChunks);


    };



    const pauseRecording = () => {
        setRecordingStatus('paused');
        mediaRecorder.current.pause();



    };


    const resumeRecording = () => {
        setRecordingStatus('recording');
        mediaRecorder.current.resume();

    };



    const stopRecording = () => {
        setRecordingStatus('inactive');
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);


            setAudio(audio);
            setAudioChunks([]);
            //audio.play();
        };
    };



    const saveRecording = () => {
        
        let user  =  getAuth().currentUser;
        if (!user) {
            alert("Please login to save your recording");
            return;
        } 


         let userEmail = user.email;
         const storageRef = ref(
            storage,
            `audio/${userEmail}/${Math.random().toString(36).substring(2)}.mp3`
          );
                  const uploadTask = uploadBytesResumable(storageRef, audioChunks[0]);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                if (error.code === 'storage/unauthorized') {
                    console.log("User doesn't have permission to access the object");
                } else {
                    console.log("Unknown error occurred, inspect error.serverResponse");
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });

            });
    };


    /*const downloadRecording = () => {
        // Assuming audioChunks contains audio data in Blob format
        const blob = new Blob(audioChunks, { type: 'audio/mp3' }); // Specify 'audio/mp3' as the correct MIME type
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'recording.mp3'; // Set the file extension to 'mp3'
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(blobUrl);
      };


      function playRecording () {
        let user  =  getAuth().currentUser;
        let userEmail = user.email;

        const storageRef = ref(storage, `audio/${userEmail}/${Math.random().toString(36).substring(2)}`);
        getDownloadURL(storageRef).then((url) => {
            const audio = new Audio(url);
            audio.play();
        });


        } 
*/

      















    /*
        getUserMedia({ audio: true })
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
    
            const audioChunks = [];
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });
    
            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks);
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                audio.play();
            });
    
            setTimeout(() => {
                mediaRecorder.stop();
            }, 3000);
        });
    
         
    */



    return (
        <div>
            <h2>Audio Recorder</h2>
            <main>

                <div className="audio-controls">
                    {!permission ? (
                        <button onClick={getPermission} type="button">
                            Get Microphone
                        </button>
                    ) : null}
                    {permission && recordingStatus === "inactive" ? (
                        <button onClick={startRecording} type="button">
                            Start Recording
                        </button>
                    ) : null}
                    {recordingStatus === "recording" ? (
                        <button onClick={stopRecording} type="button">
                            Stop Recording
                        </button>
                    ) : null}

                    {recordingStatus === "recording" ? (
                        <button onClick={pauseRecording} type="button">
                            Pause Recording
                        </button>
                    ) : null}

                    {recordingStatus === "paused" ? (
                        <button onClick={resumeRecording} type="button">
                            Resume Recording
                        </button>
                    ) : null}

                </div>
              {/* {audio ? (
                    <div className="audio-container">
                        <audio src={audio} controls></audio>
                        <a href="#" onClick={downloadRecording}>
                            Download Recording
                        </a>
              </div>




              ) : null}*/}

                {
                    audio ? (
                        <button onClick={saveRecording} type="button">
                            Save Recording
                        </button>
                    ) : null
                }

       { /*  <button onClick={playRecording}>Play Audio</button>*/}


                <canvas id="canvas" width="300" height="300" hidden={false}></canvas>

            </main>

        </div>


    );
}

export default AddAudioNotes;