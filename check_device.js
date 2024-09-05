function checkDevice () 
{
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent.toLowerCase ());
  /*const userAgent = navigator.userAgent.toLowerCase ();
  const isAndroid = userAgent.includes ("android");
  const isIos = userAgent.includes ("iphone") || userAgent.includes ("ipad");
  */

  if (isMobile) 
  {
    window.location.href = "redirect.html";
  }
}

// Call the function to check the device when the page loads
window.onload = checkDevice ();
