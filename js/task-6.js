function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(result) {
  const boxesContainer = document.querySelector('#boxes');
  const boxSize = 30;
  let boxesHtml = '';

  for (let i = 0; i < result; i++) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    boxesHtml += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }

  boxesContainer.innerHTML = boxesHtml;
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  const result = Number(input.value);
  if (result >= 1 && result <= 100) {
    createBoxes(result);
  }
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);
