import * as yup from "yup";

export const loginValidationSchema = yup.object({
  login: yup.string("Wprowadź login").required("Login jest wymagany"),
});

export const loginInitialValues = {
  login: ""
};
