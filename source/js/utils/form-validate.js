let formMain = document.querySelector('[data-order-form]');

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

function validateEmail(formBlock) {
  let input = formBlock.querySelector('[data-email-input] input');
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

function validateTelephone(formBlock) {
  let input = formBlock.querySelector('[data-telephone-input] input');
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

function validateName(formBlock) {
  let input = formBlock.querySelector('[data-name-input] input');
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

        input.setCustomValidity('Введите имя контактного лица с заглавной буквы на латинице или кириллице');
      }

      if (nameValue === '') {
        input.classList.remove('valid');
        input.classList.remove('invalid');
      }

    });
  }
}

function turnMailValidationOn() {
  if (formMain) {
    validateEmail(formMain);
    validateTelephone(formMain);
    validateName(formMain);
  }
}

export {turnMailValidationOn};
