const loadingScreen = document.querySelector ('.loading-screen');

function showLoadingScreen () 
{
  loadingScreen.classList.remove ('hidden');
}

function hideLoadingScreen () 
{
  loadingScreen.classList.add ('hidden');
}

window.addEventListener ('hidden', showLoadingScreen);