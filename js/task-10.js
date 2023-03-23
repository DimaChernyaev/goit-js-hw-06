function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input')
const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')



createButton.addEventListener('click', createBoxes);

function createBoxes(amount) {
amount = inputElement.value;

const div = `<div></div>`;

}
