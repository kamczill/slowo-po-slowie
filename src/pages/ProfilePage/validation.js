import * as yup from "yup";

// register
export const validationSchema = yup.object({
});

export const initialValues = {
  login: "",
  firstName: "",
  lastName: "",
  newEmail: "",
  confirmEmail: "",
  newPassword: "",
  confirmPassword: "",
  currentPassword: ""
};
