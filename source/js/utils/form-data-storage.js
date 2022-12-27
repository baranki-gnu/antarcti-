let formMain = document.querySelector('[data-order-form]');

function storeFieldData(field, key) {
  if (field && key) {
    localStorage.setItem(key, field.value);
  }
}

function storeFormData(formBlock) {
  if (formBlock) {
    let userName = formBlock.querySelector('[data-name-input] input');
    let userNameKey = 'user-name';
    let userTel = formBlock.querySelector('[data-telephone-input] input');
    let userTelKey = 'user-telephone';
    let userMail = formBlock.querySelector('[data-email-input] input');
    let userMailKey = 'user-email';

    storeFieldData(userName, userNameKey);
    storeFieldData(userTel, userTelKey);
    storeFieldData(userMail, userMailKey);
  }
}

function startStoringData() {
  storeFormData(formMain);
}

export {startStoringData};
