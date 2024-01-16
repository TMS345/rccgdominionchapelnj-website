function notifyNewsletterSuccess (firstName, lastName, email)
{
  alert ("You're in, " + firstName + "! Thanks for subscribing to our newsletter! Stay tuned for exciting updates.");
}

// Trigger the notification function after successful form submission
// (Assuming you have a newsletter signup form with an ID of "newsletter-form")
document.getElementById("newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // Extract user's name from form data (replace with your actual implementation)
  const firstName = document.getElementById("firstName").value.trim ();
  const lastName = document.getElementById("lastName").value.trim ();
  const email = document.getElementById("email").value.trim ();

  if (firstName === "" || lastName === "" || email === "")
  {
    alert ("Please fill in all required fields!");
    return;
  }

  notifyNewsletterSuccess(firstName, lastName, email);

  document.getElementById("newsletter-form").reset();
});