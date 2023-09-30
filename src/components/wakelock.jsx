import React from "react";


function Wakelock() {





    const handleWakeLock = async (e) => {
        e.preventDefault();
        try {
            const wakeLock = await navigator.wakeLock.request('screen');
            console.log(wakeLock);
        } catch (err) {
            console.log(`${err.name}, ${err.message}`);
        }
    }
    return (
        <div>
            <button onClick={handleWakeLock}>WakeLock</button>
        </div>
    )



}

export default Wakelock;