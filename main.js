const inputText = document.getElementById('text-input');
const p = document.getElementById('meme-text');
const inputFile = document.getElementById('meme-insert');
const img = document.querySelector('img');

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
};
