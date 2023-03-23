function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonElement = document.querySelector('.change-color');
const spanElement = document.querySelector('.color');
const bodyElement = document.querySelector('body');

buttonElement.addEventListener('click', changeBodyBackgroundColor);

function changeBodyBackgroundColor() {

  const backgroudColor = getRandomHexColor();
  spanElement.textContent = backgroudColor;
  bodyElement.style.backgroundColor = backgroudColor;
  
}