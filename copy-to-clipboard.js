document.getElementById('copyLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Text to copy
    const textToCopy = this.textContent;

    // Create a temporary textarea element to copy the text
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Text copied to clipboard!');
});