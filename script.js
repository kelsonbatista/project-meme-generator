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

// change style
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const memeContainer = document.querySelector('#meme-image-container');

btnFire.addEventListener('click', () => {
  if (theImage) memeContainer.style.border = '3px dashed red';
});

btnWater.addEventListener('click', () => {
  if (theImage) memeContainer.style.border = '5px double blue';
});

btnEarth.addEventListener('click', () => {
  if (theImage) memeContainer.style.border = '6px groove green';
});

for (let i = 1; i <= 4; i += 1) {
  const imgClick = document.querySelector(`#meme-${i}`);
  console.log(`meme-${i}`);
  imgClick.addEventListener('click', () => {
    theImage.src = imgClick.src;
  });
}
