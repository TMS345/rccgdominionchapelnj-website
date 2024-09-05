const unavailableMessage = document.createElement ("div");
unavailableMessage.classList.add ("unavailable-message");

const text = document.createElement ("p");
text.textContent = "Sorry, this page is not yet available on mobile devices. Please visit this page on a computer.";
unavailableMessage.appendChild (text);

const image = document.createElement ("img");
image.src = "work-in-progress.png";
image.alt = "Not Currently Available";
unavailableMessage.appendChild (image);

document.body.appendChild (unavailableMessage);