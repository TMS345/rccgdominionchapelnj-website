const button = document.getElementById("newsletterNotification");

function notifyNewsletterSuccess (firstName)
{
  alert ("You're in, " + firstName + "! Thanks for subscribing to our newsletter! Stay tuned for exciting updates.");
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  // Extract user's name from form data (replace with your actual implementation)
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();

  if (firstName === "" || lastName === "" || email === "")
  {
    alert ("Please fill in all required fields!");
    return;
  }

  notifyNewsletterSuccess(firstName);

  document.getElementById("newsletter-form").reset();
});