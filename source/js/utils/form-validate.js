let formMain = document.querySelector('[data-order-form]');

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

const phonePattern = /^((\d|\+\d)[\- ]?)?(\(?\d{1,}\)?[\- ]?)?[\d\- ]*$/;

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

      if (telephoneValue.match(phonePattern)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setCustomValidity('');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');

        input.setCustomValidity('Введите корректный номер телефона');
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

      if (nameValue.match(/^[А-Яа-я]{1,}|[A-Za-z]{1,}/)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.setCustomValidity('');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');

        input.setCustomValidity('Введите имя контактного лица на латинице или кириллице');
      }

      if (nameValue === '') {
        input.classList.remove('valid');
        input.classList.remove('invalid');
      }

    });
  }
}

function turnFormValidationOn() {
  if (formMain) {
    validateEmail(formMain);
    validateTelephone(formMain);
    validateName(formMain);
  }
}

export {turnFormValidationOn};
