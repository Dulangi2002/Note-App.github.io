import React, { useEffect, useState } from "react";

function ProfilePhoto() {
    const [isCameraVisible, setIsCameraVisible] = useState(false);
    const [videoStream, setVideoStream] = useState(null);

    const openWebCam = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "environment", // Use the user-facing camera if available
                    width: { ideal: 1280 }, // Ideal width of the video stream
                    height: { ideal: 720 }, // Ideal height of the video stream
                },
                audio: false, // Disable audio
            });

            // Set the video stream to the state
            setVideoStream(stream);
            setIsCameraVisible(true);

            // Stop the video stream after 5 seconds
            setTimeout(() => {
                stopVideoStream(stream);
            }, 5000);
        } catch (error) {
            console.error("Error opening camera:", error);
        }
    };

    const stopVideoStream = (stream) => {
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
            setIsCameraVisible(false);
        }
    };

    useEffect(() => {
        // Clean up video stream when the component unmounts
        return () => {
            stopVideoStream(videoStream);
        };
    }, [videoStream]);

    return (
        <div>
            <button onClick={openWebCam}>Open Camera</button>
            {isCameraVisible && <video srcObject={videoStream} autoPlay width={640} height={480} />}
        </div>


       
    );
}

export default ProfilePhoto;
