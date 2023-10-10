// check if the browser supports push notifications
if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Push notifications are supported');

    // register the service worker
    navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
            console.log('Service worker registered');

            // subscribe the user to push notifications
            registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array('YOUR_PUBLIC_KEY')
            })
            .then(function(subscription) {
                console.log('User is subscribed:', subscription);
            })
            .catch(function(error) {
                console.error('Failed to subscribe the user:', error);
            });
        })
        .catch(function(error) {
            console.error('Failed to register the service worker:', error);
        });
} else {
    console.warn('Push notifications are not supported');
}

// utility function to convert a base64 string to a Uint8Array
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}


function sendTaskReminder(task) {
    // check if the browser supports notifications
    if ('Notification' in window) {
        // check if the user has granted permission to show notifications
        if (Notification.permission === 'granted') {
            // create a new notification
            const notification = new Notification(`Task Reminder: ${task.title}`, {
                body: `Your task "${task.title}" is due on ${task.dueDate}.`,
                icon: 'path/to/notification-icon.png'
            });
        } else if (Notification.permission !== 'denied') {
            // request permission to show notifications
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    // create a new notification
                    const notification = new Notification(`Task Reminder: ${task.title}`, {
                        body: `Your task "${task.title}" is due on ${task.dueDate}.`,
                        icon: 'path/to/notification-icon.png'
                    });
                }
            });
        }
    }
}


