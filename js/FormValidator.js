class FormValidator {
    constructor(form) {
        this.form = form;
    }

    clearErrors() {
        const inputs = [...this.form.querySelectorAll('input')];
        const submitButton = this.form.querySelector('.popup__button');
        for (const input of inputs) {
            this.checkInputValidity(input, input.nextElementSibling);
            input.nextElementSibling.textContent = ''
        }
        const isValid = inputs.some((item) => item.validationMessage.length);
        this.setSubmitButtonState(submitButton, isValid);
        return isValid;
    }

    setEventListener() {
        const inputs = [...this.form.querySelectorAll('input')];
        const submitButton = this.form.querySelector('.popup__button');
        for (const input of inputs) {
            input.addEventListener('input', (event) => {
                this.checkInputValidity(event.target, event.target.nextElementSibling);
                const isValid = inputs.some((item) => item.validationMessage.length);
                this.setSubmitButtonState(submitButton, isValid);
            }, false);
        }
    }

    checkInputValidity(input, error) {
        const validity = input.validity;
        if (validity.valueMissing) {
            input.setCustomValidity('Это обязательное поле');
            error.innerText = input.validationMessage;
            return false;
        }

        if (validity.tooShort || validity.tooLong) {
            const min = input.getAttribute('minLength');
            const max = input.getAttribute('maxLength');
            input.setCustomValidity(`Должно быть от ${min} до ${max} символов`);
            error.innerText = input.validationMessage;
            return false;
        }

        if (validity.typeMismatch) {
            input.setCustomValidity('Здесь должна быть ссылка');
            error.innerText = input.validationMessage;
            return false;
        }

        input.setCustomValidity('');
        error.innerText = '';
        return true;
    }

    setSubmitButtonState(button, isValid) {
        if (isValid) {
            button.classList.add('popup__button_disable');
            button.setAttribute('disable', 'disable');
        } else {
            button.classList.remove('popup__button_disable');
            button.setAttribute('disable', 'disable');
        }
    }
}