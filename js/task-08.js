const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault()

    const form = event.currentTarget;
    // const {email, password} = form.elements;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if(!email || !password){
        alert('Будь-ласка заповніть всі полля для вводу')
    } else {
        // createObject(`${email.value}`, `${password.value}`)
        createObject(email, password);
        form.reset();
    }
    
}

function createObject(email, password) {
    const userInfo = {
        email,
        password,
    }

    console.log(userInfo);
}
