// Ref Css https://stackoverflow.com/questions/8935575/align-div-in-the-bottom-of-another-div-using-css/8935607
// Ref Input File https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
// Ref fit image style https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container

// insert text
const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

inputText.addEventListener('input', () => {
  memeText.innerHTML = inputText.value;
});

// insert image
const inputFile = document.querySelector('#meme-insert');
const theImage = document.querySelector('#meme-image');

inputFile.addEventListener('change', () => {
  theImage.src = URL.createObjectURL(inputFile.files[0]);
});
