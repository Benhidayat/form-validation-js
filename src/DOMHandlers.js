import { form, firstName_input, email_input, password_input, confirmPassword_input, errorMessage } from "./DOMElements";

export const showError = () => {
    form.addEventListener('submit', (e) => {
        let errors = [];

        if (firstName_input) {
            errors = getSignUpErrors(firstName_input.value, email_input.value, password_input.value, confirmPassword_input.value);
        } else {
            errors = getLoginErrors(email_input.value, password_input.value);
        }

        if (errors.length > 0) {
            e.preventDefault();
            errorMessage.innerText = errors.join('. ');
        }
    })
}

const getSignUpErrors = (firstName, email, password, confirmPassword) => {
    let errors = [];

    if(firstName === "" || firstName === null) {
        errors.push('Firstname is required');
        firstName_input.parentElement.classList.add('incorrect');
    }

    if(email === "" || email === null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if(password === "" || password === null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    if (password !== confirmPassword) {
        errors.push('Password does not match confirm password');
        password_input.parentElement.classList.add('incorrect');
        confirmPassword_input.parentElement.classList.add('incorrect');
    }

    if (password.length < 8) {
        errors.push('Password must have at least 8 Characters');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginErrors(email, password) {
    let errors = [];

    if(email === "" || email === null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if(password === "" || password === null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

export const removeErrorMessages = () => {
    const allInputs = [firstName_input, email_input, password_input, confirmPassword_input].filter(input => input !== null);
    
    allInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('incorrect')) {
                input.parentElement.classList.remove('incorrect');
                errorMessage.innerText = '';
            }
        })
    })
}