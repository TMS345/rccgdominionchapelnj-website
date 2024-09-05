function hideLoadingScreen ()
{
  var loadingScreen = document.getElementById ("loading-screen");
  loadingScreen.style.display = "none";
}

document.addEventListener("loading-screen", function() 
{
  hideLoadingScreen ();
});

window.addEventListener ("load", function () 
{
  hideLoadingScreen ();
});