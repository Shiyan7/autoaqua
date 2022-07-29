import {Modal} from '../vendor/modal';
import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('.mask-input');
  const modal = new Modal()

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {

      if(item.tel) {
        item.rules.push({
          rule: 'function',
          errorMessage: 'Введите корректный номер телефона',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length >= 10;
          },
        });
      }
    }
  }

  const validation = new JustValidate(selector, {
    errorFieldCssClass: 'is-invalid',
  });

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess(event => {
    modal.close()
    modal.open("thank")

    event.target.reset()
  })
};