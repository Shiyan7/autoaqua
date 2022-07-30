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
]

const onSuccess = () => {
  modal.open()
}

const onFail = () => {
  modal.close()
}

validateForms("#questions-form", rules, onSuccess, onFail)