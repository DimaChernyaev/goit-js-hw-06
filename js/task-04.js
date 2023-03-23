
const valueElement = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')

let counterValue = 0;

function incrementOne() {
    counterValue += 1;
    valueElement.textContent = counterValue;
}

function decrementOne() {
    counterValue -= 1;
    valueElement.textContent = counterValue;
}

btnDecrement.addEventListener('click', decrementOne)

btnIncrement.addEventListener('click', incrementOne)