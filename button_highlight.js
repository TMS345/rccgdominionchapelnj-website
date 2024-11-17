// Get both button elements
const triggerButton1 = document.getElementById('triggerButton1');
const highlightedButton1 = document.getElementById('highlightedButton1');
const triggerButton2 = document.getElementById('triggerButton2');
const highlightedButton2 = document.getElementById('highlightedButton2');

// Add event listener to the trigger button
triggerButton1.addEventListener('click', () => {
  // Add the highlight class to the other button
  highlightedButton1.classList.add('buttonHighlight');
  
  // Optionally, remove the highlight after a delay (e.g., 1 second)
  setTimeout(() => {
    highlightedButton1.classList.remove('buttonHighlight');
  }, 3000);
});

// Add event listener to the trigger button
triggerButton2.addEventListener('click', () => {
  // Add the highlight class to the other button
  highlightedButton2.classList.add('buttonHighlight');
  
  // Optionally, remove the highlight after a delay (e.g., 1 second)
  setTimeout(() => {
    highlightedButton2.classList.remove('buttonHighlight');
  }, 3000);
});
