const inputElement = document.querySelector('#validation-input');
const maxLength = inputElement.dataset.length;

inputElement.addEventListener('blur', correctWorld)

function correctWorld(event) {
    const inputText = event.currentTarget.value;
    
    if(inputText.length > maxLength) {
        inputElement.classList.add('invalid')
    } 
    
    if (inputText.length <= maxLength) {
        if(inputElement.classList.contains('invalid')){
            inputElement.classList.remove('invalid')
        }
        inputElement.classList.add('valid')
    }
}
