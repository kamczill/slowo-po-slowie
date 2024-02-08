import React from "react";
import { Formik } from "formik";
import { registerInitialValues, registerValidationSchema } from "./validation";
import CustomLink from "../../components/CustomLink";
import { useMutation } from 'react-query';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import customAxios from "../../axios/axios";


const registerUser = async (credentials) => {
  const response = await customAxios.post('register', {
    ...credentials
  }, {
    headers:{
      "Accept": "application/json",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true
  })
  return response.data;
}

const Form = () => {
  const navigate = useNavigate()
  const mutation = useMutation(registerUser, {
    onSuccess: (data, variables, context) => {
   
      toast.success('Konto założono pomyślnie! Możesz się zalogować', {
        position: "bottom-center",
        });
      navigate('/login')
    }
  });


  const handleSubmit = async (values) => {
    const credentials = {
      email: values.login,
      firstName: values.firstName,
      lastName: values.lastName,
      role: 'user',
      password: values.password
    }

    mutation.mutate(credentials);
  };

  const displayErrors = () => {
    if(mutation.isError) {
      const errors = mutation.error?.response?.data?.detail
      const mappedErrors = errors.map(det => <p>{det.msg}</p>)
      return mappedErrors
    } 
  }

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Formik
          initialValues={registerInitialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            values,
            touched,
            errors,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="font-ms flex w-full max-w-[350px] flex-col gap-4"
            >
              <div className="flex flex-col">
                <label htmlFor="loginInput">Login</label>
                <input
                  id="loginInput"
                  name="login"
                  type="text"
                  onBlur={handleBlur}
                  value={values.login}
                  onChange={handleChange}
                  error={(touched.login && Boolean(errors.login))?.toString()}
                  helpertext={(touched.login && errors.login) || undefined}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.login && Boolean(errors.login) && (
                  <p className="text-red-500">{errors.login}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="firstNameInput">Imie</label>
                <input
                  id="firstNameInput"
                  name="firstName"
                  type="text"
                  onBlur={handleBlur}
                  value={values.firstName}
                  onChange={handleChange}
                  error={(
                    touched.firstName && Boolean(errors.firstName)
                  )?.toString()}
                  helpertext={
                    (touched.firstName && errors.firstName) || undefined
                  }
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.firstName && Boolean(errors.firstName) && (
                  <p className="text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastNameInput">Nazwisko</label>
                <input
                  id="lastNameInput"
                  name="lastName"
                  type="text"
                  onBlur={handleBlur}
                  value={values.lastName}
                  onChange={handleChange}
                  error={(
                    touched.lastName && Boolean(errors.lastName)
                  )?.toString()}
                  helpertext={
                    (touched.lastName && errors.lastName) || undefined
                  }
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.lastName && Boolean(errors.lastName) && (
                  <p className="text-red-500">{errors.lastName}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Hasło </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={(
                    touched.password && Boolean(errors.password)
                  )?.toString()}
                  helpertext={
                    (touched.password && errors.password) || undefined
                  }
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.password && Boolean(errors.password) && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
              <div className="font-ms flex flex-col">
                <div className="flex justify-between">
                  <label htmlFor="rulesCheckbox" className="max-w-[300px]">
                    *Akceptuję{" "}
                    <CustomLink to="/regulamin" className="underline">
                      {" "}
                      Regulamin
                    </CustomLink>{" "}
                    oraz{" "}
                    <CustomLink
                      to="/polityka-prywatnosci"
                      className="underline"
                    >
                      Politykę Prywatności
                    </CustomLink>{" "}
                  </label>
                  <input
                    id="rulesCheckbox"
                    name="rulesCheckbox"
                    type="checkbox"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.rulesCheckbox}
                    error={(
                      touched.rulesCheckbox && Boolean(errors.rulesCheckbox)
                    )?.toString()}
                    helpertext={
                      (touched.rulesCheckbox && errors.rulesCheckbox) ||
                      undefined
                    }
                    className="w-[20px] border border-[#404040]"
                  />
                </div>
                {touched.rulesCheckbox && Boolean(errors.rulesCheckbox) && (
                  <p className="text-red-500">{errors.rulesCheckbox}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full max-w-[350px] rounded-md bg-[#303030]  p-2 text-center text-white"
                >
                  Zarejestruj się
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div className="pt-6 text-red-500">
          {displayErrors()}
        </div>
      </div>
    </>
  );
};

export default Form;
