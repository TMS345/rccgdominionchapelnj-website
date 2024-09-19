function getNextSunday() {
    const now = new Date();
    let nextSunday = new Date();
    nextSunday.setDate(now.getDate() + (7 - now.getDay())); // Set to next Sunday
    nextSunday.setHours(12, 0, 0, 0); // Set time to 12 PM
  
    if (nextSunday < now) {
      nextSunday.setDate(nextSunday.getDate() + 7); // Ensure it's a future Sunday
    }
  
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
  
    document.getElementById("countdown-timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (diff < 0) {
      document.getElementById("countdown-timer").innerHTML = "Join now!";
    }
  }
  
  setInterval(updateCountdown, 1000); // Update countdown every second
  