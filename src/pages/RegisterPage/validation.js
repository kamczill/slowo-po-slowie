import * as yup from "yup";

// register
export const registerValidationSchema = yup.object({
  login: yup.string("Wprowadź login").required("Login jest wymagany"),
  firstName: yup
    .string("Wprowadź imie")
    .required("Imię jest wymagane")
    .min(3, "Co najmniej 3 litery"),
  lastName: yup
    .string("Wprowadź nazwisko")
    .required("Nazwisko jest wymagane")
    .min(3, "Co najmniej 3 litery"),
  password: yup
    .string("Wprowadź hasło")
    .min(8, "Hasło musi mieć co najmniej 8 znaków")
    .required("Hasło jest wymagane"),
  passwordConfirm: yup
    .string("Potwierdź hasło")
    .oneOf([yup.ref("password"), null], "Hasła muszą być takie same"),
  rulesCheckbox: yup.bool().oneOf([true], "To pole musi być zaznaczone"),
});

export const registerInitialValues = {
  login: "",
  password: "",
  passwordConfirm: "",
  firstName: "",
  lastName: "",
  rulesCheckbox: false,
};
