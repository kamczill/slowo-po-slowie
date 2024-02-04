import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { loginInitialValues, loginValidationSchema } from "./validation";
import {  useMutation } from 'react-query';
import { toast } from "react-toastify";
import customAxios from "../../axios/axios";

const changePassword = async (credentials) => {
    const response = await customAxios.post('change-password', {
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
  const mutation = useMutation(changePassword, {
    onSuccess: () => {
      toast.success('Twoje hasło zostało zmienione! Możesz się zalogować', {
        position: "bottom-center",
        });
      navigate('/login')
    }
  });


  const handleSubmit = async (values) => {
    const credentials = {
      email: values.login,
      reset_code: values.resetCode,
      new_password: values.password
    }

    mutation.mutate(credentials);
  };

  const displayErrors = () => {
    if(mutation.isError) {
      const errorArr = mutation.error.response.data.detail
      const mappedArr = Array.isArray(errorArr) ? errorArr.map(err => <p>{err.msg}</p>) : <p>{mutation.error.response.data.detail}</p>

      return <div className="text-red-500 pt-6">{mappedArr}</div>
    }
  }

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-[350px] flex-col gap-3"
            >
              <div className="flex flex-col">
                <label htmlFor="login">Login</label>
                <input
                  name="login"
                  type="text"
                  autoComplete="username"
                  onBlur={handleBlur}
                  value={values.login}
                  onChange={handleChange}
                  error={touched.login && Boolean(errors.login)}
                  helpertext={touched.login && errors.login}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.login && Boolean(errors.login) && (
                  <p className="text-red-500">{errors.login}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="resetCode">Kod resetujący</label>
                <input
                  name="resetCode"
                  type="text"
                  onBlur={handleBlur}
                  value={values.resetCode}
                  onChange={handleChange}
                  error={touched.resetCode && Boolean(errors.resetCode)}
                  helpertext={touched.resetCode && errors.resetCode}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.resetCode && Boolean(errors.resetCode) && (
                  <p className="text-red-500">{errors.resetCode}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Hasło </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helpertext={touched.password && errors.password}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.password && Boolean(errors.password) && (
                  <p className="text-red-500">{errors.password}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#303030] p-2  text-center text-white"
                >
                  Zmień hasło
                </button>
                {displayErrors()}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Form;
