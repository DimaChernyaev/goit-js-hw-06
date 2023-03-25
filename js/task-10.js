function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector('input')
const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const boxesElement = document.querySelector('#boxes')
console.log(boxesElement);



createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', deleteBoxes)

function createBoxes(amount) {
amount = inputElement.value;
let boxSize = 30;

for(let i = 0;  i < amount; i += 1) {
  const box = document.createElement("div");
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxSize += 10;
  boxesElement.append(box);
}


}

function deleteBoxes() {
  boxesElement.innerHTML = '';
}