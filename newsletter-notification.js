function notifyNewsletterSuccess() 
{
  const notificationContainer = document.getElementById("newsletter-notification");

  // Create the notification content with an image
  const notificationContent = document.createElement("div");
  notificationContent.innerHTML = `
    <img src="path/to/your/success-image.jpg" alt="Success icon">
    <h2>You're in!</h2>
    <p>Thanks for subscribing to our newsletter! Stay tuned for exciting updates.</p>
  `;

  // Display the notification
  notificationContainer.appendChild(notificationContent);

  // Optional: Add animation or visual effects
  notificationContent.classList.add("show"); // Assuming a CSS class for animation

  // Optional: Auto-hide after a delay
  setTimeout(() => {
    notificationContent.classList.remove("show");
  }, 5000); // Hide after 5 seconds
}

// Trigger the notification function after successful form submission
// (assuming you have a newsletter signup form with an ID of "newsletter-form")
document.getElementById("newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  // ... (Process newsletter signup logic here)
  notifyNewsletterSuccess();
});
