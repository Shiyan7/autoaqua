import {validateForms} from "../functions/validate-forms";
import {Modal} from '../vendor/modal';
import vars from '../_vars';

const {errorMessage} = vars

const modal = new Modal()

const rules = [
  {
    ruleSelector: ".validate-name",
    rules: [
      {
        rule: 'required',
        errorMessage: errorMessage
      }
    ]
  },
  {
    tel: true,
    ruleSelector: ".validate-tel",
    rules: [
      {
        rule: 'required',
        errorMessage: errorMessage
      },
    ]
  },
]

const onSuccess = () => {
  modal.open('thank', 'fade')
}

document.addEventListener("DOMContentLoaded", () => validateForms('#questions-form', rules, onSuccess))