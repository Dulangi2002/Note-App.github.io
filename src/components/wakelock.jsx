import React, { useState } from "react";

function Wakelock() {
    const [wakeLockActive, setWakeLockActive] = useState(false);
    const [error, setError] = useState(null);

    

    const handleWakeLock = async (e) => {
        e.preventDefault();
        try {
            const wakeLock = await navigator.wakeLock.request('screen');
            setWakeLockActive(true);
            console.log("Wake Lock active!");
            wakeLock.onrelease = () => {
                setWakeLockActive(false);
                console.log("Wake Lock released!");
            };
        } catch (err) {
            setError(`${err.name}: ${err.message}`);
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleWakeLock}>
                {wakeLockActive ? "Release WakeLock" : "Request WakeLock"}
            </button>
            {error && <p>Error: {error}</p>}

        </div>
    );
}

export default Wakelock;
