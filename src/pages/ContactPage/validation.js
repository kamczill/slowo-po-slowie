import * as yup from "yup";

// register
export const registerValidationSchema = yup.object({
  firstName: yup
    .string("Wprowadź imie")
    .required("Imię jest wymagane")
    .min(3, "Co najmniej 3 litery"),
  lastName: yup
    .string("Wprowadź nazwisko")
    .required("Nazwisko jest wymagane")
    .min(3, "Co najmniej 3 litery"),
  email: yup
    .string("Wprowadź email")
    .email("Wprowadź poprawnie email")
    .required("Email jest wymagany"),
  telephone: yup
    .string("Wprowadź numer telefonu")
    .min(8, "Numer telefonu musi mieć co najmniej 8 znaków")
    .max(15, "Numer telefonu może mieć maksymalnie 15 znaków")
    .required("Numer telefonu jest wymagany"),
  message: yup
    .string("Wprowadź wiadomość")
    .min(5, "Wiadomość musi mieć co najmniej 5 znaków")
    .max(500, "Wiadomość może mieć maksymalnie 500 znaków")
    .required("Wiadomość jest wymagana"),
});

export const registerInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  telephone: "",
  message: "",
};
