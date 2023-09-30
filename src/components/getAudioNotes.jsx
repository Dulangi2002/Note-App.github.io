import React , { useState, useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

function GetAudioNotes(){
    const [ audioNotes , setAudioNotes ] = useState([]);


    if('mediaSession' in navigator){
        const player = document.querySelector('audio');
        navigator.mediaSession.metadata = new MediaMetadata({
            title: 'Audio Note',
            artist: 'Audio Note',
            album: 'Audio Note',
            artwork: [
                { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
                { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
                { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
                { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
                { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
                { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
            ]
        });
        navigator.mediaSession.setActionHandler('play', function() { player.play(); });
        navigator.mediaSession.setActionHandler('pause', function() { player.pause(); });
        navigator.mediaSession.setActionHandler('seekbackward', (details) => {
            const skipTime = details.seekOffset || 1;
            player.currentTime = Math.max(player.currentTime - skipTime, 0);
          })
        navigator.mediaSession.setActionHandler('seekforward', (details) => {
            const skipTime = details.seekOffset || 1;
            player.currentTime = Math.min(player.currentTime + skipTime, player.duration);
         })

         navigator.mediaSession.setActionHandler('seekto', (details) => {
            if (details.fastSeek && 'fastSeek' in player) {
              player.fastSeek(details.seekTime);
              return;
            }
            player.currentTime = details.seekTime;
          });



    }


    

    useEffect(() => {   
        const auth = getAuth();
        const user = auth.currentUser;

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const fetchAudioNotes = async () => {
                    try {
                        const audioNotesCollection = await getDocs(collection(firestore, "users", user.email, "notes"));
                        const audioNotesData = audioNotesCollection.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        console.log(audioNotesData);
                        setAudioNotes((prevAudioNotes) => [...prevAudioNotes, ...audioNotesData]);
                        setAudioNotes(audioNotesData);
                    } catch (error) {
                        console.error("Error fetching notes:", error);
                    }
                    
                }
                fetchAudioNotes();
            } else {
                console.log('user is not signed in to retrive audio notes');
            
            }
        });
    }, []);


    return(
        <div>
        <h1>Audio Notes</h1>
        <div>{
            audioNotes.map((audioNote) => (
                <div key={audioNote.id}>
                    <h2>{audioNote.title}</h2>
                    <p>{audioNote.content}</p>
                    <audio controls onError={(e) => console.error('Error occurred during audio playback:', e)}>
    <source src={audioNote.file} type="audio/mp3"  />
  
</audio>

                </div>
            ))
            
            }
          
        </div>

        </div>
    )
}
export default GetAudioNotes;