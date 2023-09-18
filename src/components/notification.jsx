import React, { useState, useEffect } from 'react';



function Notification() {
    const [notificationText, setNotificationText] = useState('');
    const [registration, setRegistration] = useState(null);
    const [sendButtonDisabled, setSendButtonDisabled] = useState(true);
    

    useEffect(() => {
        navigator.serviceWorker.getRegistration().then((reg) => {
            setRegistration(reg);
        });

        if (Notification.permission === 'granted') {
            setSendButtonDisabled(false);
        }
    }, 
    []);

    const sendNotification = async () => {
        if (Notification.permission === 'granted') {
            showNotification(notificationText);
        } else {
            if(Notification.permission !== 'denied') {
                const permission = await Notification.requestPermission();
                if(permission === 'granted') {
                  showNotification(notificationText);
                }
              }
            
    }

    
 
    const showNotification = (body) => {
        const title = 'What PWA Can Do Today';

        const payload = {
            body,
        };

        if (registration && 'showNotification' in registration) {
            registration.showNotification(title, payload);
        } else {
            new Notification(title, payload);
        }
    };
}

    return (
        <div className="notification">
            <input
                type="text"
                value={notificationText}
                onChange={(e) => setNotificationText(e.target.value)}
                placeholder="Enter your notification"
            />
            <button className="send-button" onClick={sendNotification}>
                Send
            </button>
        </div>
    );

}

export default Notification;
