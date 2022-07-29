import {validateForms} from "../functions/validate-forms";

const defaultErrorMessage = '*это поле обязательно к заполнению'

validateForms("#request-form", [
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
])