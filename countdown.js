function getNextSunday() {
  const now = new Date();
  // Calculate the difference in days to the next Sunday
  const daysUntilSunday = 7 - now.getDay(); // Sunday is represented by 0
  // Create a new date object for next Sunday
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + daysUntilSunday);
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
