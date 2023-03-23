const inputElement = document.querySelector('#font-size-control');
const spanTextElement = document.querySelector('#text');

inputElement.addEventListener('input', currentFontSize);

function currentFontSize(event) {
    const fontSize = event.currentTarget.value;

    spanTextElement.style.fontSize = `${fontSize}px`;
}