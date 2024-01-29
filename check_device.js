function checkDevice() 
{
  const userAgent = navigator.userAgent.toLowerCase();
  const isAndroid = userAgent.includes("android");
  const isIos = userAgent.includes("iphone") || userAgent.includes("ipad");

  if (isAndroid || isIos) 
  {
    const unavailableMessage = document.createElement("div");
    unavailableMessage.classList.add("unavailable-message");

    // Add text and image for visual clarity
    const text = document.createElement("p");
    text.textContent = "Sorry, this page is not yet available on mobile devices. Please visit this page on a computer.";
    unavailableMessage.appendChild(text);

    const image = document.createElement("img");
    image.src = "unavailable.png";
    image.alt = "Not Currently Available";
    unavailableMessage.appendChild(image);

    document.body.appendChild(unavailableMessage);
  }
}

// Call the function to check the device when the page loads
window.onload = checkDevice ();
