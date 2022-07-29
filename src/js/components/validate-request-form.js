import {validateForms} from "../functions/validate-forms";

const defaultErrorMessage = '*это поле обязательно к заполнению'

validateForms("#request-form", [
  {
    ruleSelector: "#name",
    rules: [
      {
        rule: 'required',
        errorMessage: defaultErrorMessage
      }
    ]
  },
  {
    tel: true,
    ruleSelector: "#tel",
    rules: [
      {
        rule: 'required',
        errorMessage: defaultErrorMessage
      },
    ]
  },
  {
    ruleSelector: "#message",
    rules: [
      {
        rule: 'required',
        errorMessage: defaultErrorMessage
      }
    ]
  }
])