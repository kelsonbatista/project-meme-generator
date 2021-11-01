// insert text
const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

inputText.addEventListener('input', () => {
  memeText.innerHTML = inputText.value;
});
