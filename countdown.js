function getNextSunday() {
  const now = new Date();
  let nextSunday = new Date();

  if (now.getDay() === 0 && now.getHours() < 15) {
    // If it's already Sunday, get today!
    nextSunday = now;
  } else {
    // Otherwise, find the next Sunday
    nextSunday.setDate(now.getDate() + (7 - now.getDay()));
  }

  nextSunday.setHours(12, 0, 0, 0); // Set time to 12 PM

  return nextSunday;
}

function updateCountdown() {
  const now = new Date();
  const nextSunday = getNextSunday();
  const diff = nextSunday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Check if it's Sunday between 12 PM and 3 PM
  if (now.getDay() === 0 && now.getHours() >= 12 && now.getHours() < 15) {
    document.getElementById("countdown-timer").innerHTML = "Join now!";
  } else {
    document.getElementById("countdown-timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
}

setInterval(updateCountdown, 1000); // Update countdown every second
