import {validateForms} from "../functions/validate-forms";
import {Modal} from '../vendor/modal';

const defaultErrorMessage = '*это поле обязательно к заполнению'

const modal = new Modal()

const rules = [
  {
    ruleSelector: ".validate-name",
    rules: [
      {
        rule: 'required',
        errorMessage: defaultErrorMessage
      }
    ]
  },
  {
    tel: true,
    ruleSelector: ".validate-tel",
    rules: [
      {
        rule: 'required',
        errorMessage: defaultErrorMessage
      },
    ]
  },
  {
    ruleSelector: ".validate-message",
    rules: [
      {
        rule: 'required',
        errorMessage: defaultErrorMessage
      }
    ]
  }
]

const onFail = () => {}

const onSuccess = () => {
  modal.close()
  modal.open("thank")
}

validateForms("#request-form", rules, onFail, onSuccess)