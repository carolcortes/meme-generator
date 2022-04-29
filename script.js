console.log('Olá, mundo!');
const imgContainer = document.getElementById('meme-image-container');
const img = document.getElementById('meme-image');

function inputText() {
  const input = document.getElementById('text-input');
  const text = document.getElementById('meme-text');
  input.addEventListener('input', () => {
    text.innerText = input.value;
  });
}

function addImage(event) {
  const myEvent = event;
  img.src = URL.createObjectURL(myEvent.target.files[0]);
  img.onload = () => {
    URL.revokeObjectURL(img.src);
  };
}

function fireButton() {
  const btn = document.getElementById('fire');
  btn.addEventListener('click', () => {
    imgContainer.style.border = '3px dashed red';
  });
}

function waterButton() {
  const btn = document.getElementById('water');
  btn.addEventListener('click', () => {
    imgContainer.style.border = '5px double blue';
  });
}

function earthButton() {
  const btn = document.getElementById('earth');
  btn.addEventListener('click', () => {
    imgContainer.style.border = '6px groove green';
  });
}

function preMeme() {
  const meme = document.querySelectorAll('.meme');
  meme.forEach((index) => {
    index.addEventListener('click', (event) => {
      const myEvent = event;
      img.src = myEvent.target.src;
    });
  });
}

if (img.files) {
  addImage();
}

window.onload = () => {
  inputText();
  fireButton();
  waterButton();
  earthButton();
  preMeme();
};
