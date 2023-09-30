
import React, { useEffect, useRef, useState } from "react";
import { getStorage, ref, getDownloadURL, uploadBytesResumable, uploadString } from "firebase/storage";
import { collection, addDoc , setDoc, updateDoc } from "firebase/firestore";
import { getFirestore, doc } from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const constraints = {
    video: {
        width: {
            min: 1280,
            ideal: 1920,
            max: 2560,
        },
        height: {
            min: 720,
            ideal: 1080,
            max: 1440,
        },
    },
};

function ProfilePhoto() {
    const storage = getStorage();

    const videoRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const timestamp = Date.now();
    const randomNumber = Math.random().toString(36).substring(2, 5);
    const uniqueFilename = `${timestamp}-${randomNumber}.jpg`;

    const metadata = { 
        contentType: 'image/jpeg',
        };
    


    const auth = getAuth();
    const db = getFirestore();
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCapturedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const saveToFirebaseStorage = async () => {

         const currentUser = auth.currentUser;
     
         const userEmail = currentUser.email;
      
        try {
        const user = auth.currentUser
        const userEmail = currentUser.email;

        if( user) {
         const userEmail = user.email;
          const uniqueFilename = `${userEmail}_${new Date().getTime()}`;
          const storageRef = ref(storage, `users/${userEmail}/profilePhoto/${uniqueFilename}`);
          const metadata = {
            contentType: 'image/png', // Set the appropriate content type for your image
          };
      
          const uploadTaskSnapshot = await uploadString(storageRef, capturedImage, 'data_url', metadata);
      
          // Get download URL
          const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
      
          // Update user profile data in Firestore
          const userDocRef = doc(db, "users", userEmail);
          const userProfileData = {
            profilePhoto: downloadURL,
          };
      
          await setDoc(userDocRef, userProfileData, { merge: true });
          console.log("Profile photo updated successfully!");
      
          // Navigate to the view profile page
          navigate("/Note-App/ViewProfile");
        } else{
            console.error("User not logged in.");

        }
      
        } catch (error) {
          console.error("Error uploading image to Firebase Storage:", error);
        }

      };
      

    const initCamera = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoCams = devices.filter((device) => device.kind === "videoinput");

            if (videoCams.length > 0) {
                const currentDeviceIndex = videoCams.findIndex((device) => device.deviceId === videoRef.current.srcObject?.getTracks()[0].getSettings().deviceId);
                const nextDeviceIndex = (currentDeviceIndex + 1) % videoCams.length;
                const selectedDevice = videoCams[nextDeviceIndex];

                const updatedConstraints = {
                    ...constraints,
                    deviceId: {
                        exact: selectedDevice.deviceId,
                    },
                };

                const videoStream = await navigator.mediaDevices.getUserMedia(updatedConstraints);
                const videoElement = videoRef.current;

                if (videoElement) {
                    videoElement.srcObject = videoStream;
                    videoElement.play();
                }
            } else {
                console.error("No video input devices found.");
            }
        } catch (error) {
            console.error("Error accessing camera:", error);
        }
    };
    const takePhoto = () => {
        const canvas = document.createElement("canvas");
        const videoElement = videoRef.current;

        if (videoElement) {
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            const context = canvas.getContext("2d");
            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL("image/png");

            // Stop the video stream
            const stream = videoElement.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());

            // Set the captured image to the state
            setCapturedImage(dataUrl);
        }
    };

    useEffect(() => {
        initCamera();
    }, []); // Initialize camera when component mounts

    return (
        <div>
            {capturedImage ? (
                <div>
                    <img src={capturedImage} alt="Captured" style={{ width: "100%", height: "auto" }} />
                    <button onClick={() => setCapturedImage(null)}>Discard</button>

                    <button onClick={
                        () => {
                            navigate("/Note-App/ViewProfile");
                        }
                    }>cancel</button>
                    <button onClick={saveToFirebaseStorage}>Save to Firebase Storage</button>
                </div>
            ) : (
                <div>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                    <video ref={videoRef} style={{ width: "100%", height: "auto" }} autoPlay />
                    <button onClick={takePhoto}>Take Photo</button>
                </div>
            )}
        </div>
    );
}

export default ProfilePhoto;