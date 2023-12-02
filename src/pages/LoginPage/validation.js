import * as yup from 'yup'
// login
export const loginValidationSchema = yup.object({
    login: yup
        .string('Wprowadź login')
        .required('Login jest wymagany'),
    password: yup
        .string('Wprowadź hasło')
        .min(8, 'Hasło musi mieć co najmniej 8 znaków')
        .required('Hasło jest wymagane'),
})

export const loginInitialValues = {
    login: '',
    password: '',
}