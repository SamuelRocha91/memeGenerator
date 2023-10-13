const inputText = document.getElementById('text-input');
const p = document.getElementById('meme-text');
const inputFile = document.getElementById('meme-insert');
const img = document.querySelector('img');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const MEME_CONTAINER = 'meme-image-container';

function insertBorderColor() {
  const container = document.getElementById(MEME_CONTAINER);
  document.getElementById('fire').addEventListener('click', () => {
    container.style.removeProperty('backgroundCollor');
    document.getElementById('meme-image-container').style.border = '3px dashed rgb(255, 0, 0)';
  });
  document.getElementById('earth').addEventListener('click', () => {
    container.style.removeProperty('backgroundCollor');
    document.getElementById(MEME_CONTAINER).style.border = '6px groove rgb(0, 128, 0)';
  });
  document.getElementById('water').addEventListener('click', () => {
    container.style.removeProperty('backgroundCollor');
    document.getElementById(MEME_CONTAINER).style.border = '5px double rgb(0, 0, 255)';
  });
}

function addColor() {
  document.getElementById('fire').style.backgroundColor = 'rgb(255 0 0)';
  document.getElementById('water').style.backgroundColor = 'rgb(0 0 255)';
  document.getElementById('earth').style.backgroundColor = 'rgb(0, 128, 0)';
}

function evento() {
  return inputText.addEventListener('input', (event) => {
    p.innerText = event.target.value;
  });
}

function insertImage() {
  return inputFile.addEventListener('change', (event) => {
    console.log(event);
    img.src = URL.createObjectURL(event.target.files[0]);
  });
}

window.onload = () => {
  evento();
  insertImage();
  addColor();
  insertBorderColor();
};
