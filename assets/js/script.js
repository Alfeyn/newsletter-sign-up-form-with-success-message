const form = document.getElementById("form")
const error = document.getElementById("error")
const email = document.getElementById("email")
const formContainer = document.querySelector(".form-container")
const successMessage = document.querySelector(".success-message")
const btn = document.getElementById("dismissBtn");

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}

const handleSubmit = (e) => {
    e.preventDefault(e);

    const emailData = email.value;

    if (!emailData) {
        error.innerHTML = "Email is required";
        email.classList.add('error')
    } else if (!isValidEmail(emailData)) {
        error.innerHTML = "Valid email required";
        email.classList.add('error')
        console.log("hello")
    } else {
        error.innerHTML = ""; 
        email.classList.remove('error');
        formContainer.classList.add('hide');
        successMessage.classList.add('show');
    }
}


email.addEventListener('focus', () => {error.innerHTML = ""; email.classList.remove('error'); })


form.addEventListener('submit', handleSubmit)

btn.addEventListener('click', () => {
    formContainer.classList.remove('hide');
    successMessage.classList.remove('show');
})