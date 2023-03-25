const inputElement = document.querySelector('#validation-input');
const correctLength = Number(inputElement.dataset.length);
console.log(correctLength);

inputElement.addEventListener('blur', correctWorld)

function correctWorld(event) {
    const inputText = event.currentTarget.value;

    if(inputText.length !== correctLength) {
        inputElement.classList.remove('valid')
        inputElement.classList.add('invalid')
    } 
    
    if (inputText.length === correctLength) {
        inputElement.classList.remove('invalid')
        inputElement.classList.add('valid')
}
}
