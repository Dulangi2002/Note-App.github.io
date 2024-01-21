
function showNotification(title, options) {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
    return;
  }

  // Check if permission to show notifications has been granted
  if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(title, options);
  } else if (Notification.permission !== "denied") {
    // Otherwise, we need to ask the user for permission
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(title, options);
      }
    });
  }
}

// // Example usage:
// showNotification("Task Due", {
//   body: "You have a task due in 1 hour",
//   icon: "/path/to/icon.png",
// });
