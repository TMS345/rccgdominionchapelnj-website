function copyText() 
{
  var copyText = document.getElementById ("address");
  navigator.clipboard.writeText (copyText.textContent).then (function () 
  {
    alert ("Text has been copied to clipboard: " + copyText.textContent);
  }).catch (function (error) 
  {
    console.error ("Unable to copy text to clipboard", error);
  });
}