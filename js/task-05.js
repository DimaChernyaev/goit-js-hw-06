const inputElement = document.querySelector('#name-input');
const nameElement = document.querySelector('#name-output');

inputElement.addEventListener('input', changeUserName);

function changeUserName(event) {
    nameElement.textContent = event.currentTarget.value;
    if (!event.currentTarget.value) {
        nameElement.textContent = 'Anonymous';
    }
}