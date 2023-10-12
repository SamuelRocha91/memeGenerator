const input = document.getElementById('text-input');
const p = document.getElementById('meme-text');

function evento() {
  return input.addEventListener('input', (event) => {
    p.innerText = event.target.value;
  });
}

window.onload = () => {
  evento();
};
