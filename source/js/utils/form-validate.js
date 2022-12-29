let formMain = document.querySelector('[data-order-form]');
let emailInput = formMain.querySelector('[data-email-input] input');
let telephoneInput = formMain.querySelector('[data-telephone-input] input');
let nameInput = formMain.querySelector('[data-name-input] input');

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

//pattern=/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
//pattern=/^\d+$/;

function validateEmail(input) {
  if (input) {

    input.addEventListener('input', () => {
      let mailValue = input.value;

      if (mailValue.match(emailPattern)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setCustomValidity('');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');

        input.setCustomValidity('Введите e-mail по форме xxxx@xxxx.xx');
      }

      if (mailValue === '') {
        input.classList.remove('valid');
        input.classList.remove('invalid');
      }
    });
  }
}

function validateTelephone(input) {
  if (input) {
    input.addEventListener('input', () => {
      let telephoneValue = input.value;

      if (telephoneValue.match(/^8\d{10}/)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setCustomValidity('');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');

        input.setCustomValidity('Введите 11-значный номер телефона, начинающийся с цифры 8');
      }

      if (telephoneValue === '') {
        input.classList.remove('valid');
        input.classList.remove('invalid');
      }
    });
  }
}

function validateName(input) {
  if (input) {
    input.addEventListener('input', () => {
      let nameValue = input.value;

      if (nameValue.match(/^[А-Я]{1,}|[A-Z]{1,}/)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setCustomValidity('');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');

        input.setCustomValidity('Введите имя на латинице или кириллице');
      }

      if (nameValue === '') {
        input.classList.remove('valid');
        input.classList.remove('invalid');
      }

    });
  }
}

function turnMailValidationOn() {
  validateEmail(emailInput);
  validateTelephone(telephoneInput);
  validateName(nameInput);
}

export {turnMailValidationOn};
