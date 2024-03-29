import React from "react";
import { Formik } from "formik";
import { contactInitialValues, contactValidationSchema } from "./validation";
import { useMutation } from 'react-query';
import customAxios from './../../axios/axios'

const Form = () => {
  const sendForm = async (values) => {
    const res = customAxios.post('/send-form', values)
    return res; 
  }

  const mutation = useMutation(sendForm)

  const handleSubmit = async (values) => {
    const credentails = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      body: values.message,
      phone_number: values.telephone
    }
    mutation.mutate(credentails)
  };

  const displayErrors = () => {
    if(mutation.isError) {
      const errorArr = mutation.error.response?.data?.detail
      const mappedErrors = errorArr?.map(err => <p>{err.msg}</p>)
      console.log(errorArr)
      return <div className="text-red-500 pt-6">{mappedErrors}</div>
    }
  }

  const displaySuccess = () => {
    if(mutation.isSuccess){
      return <div className="text-green-500 pt-6">Formularz wysłany poprawnie!</div>
    }
  }

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Formik
          initialValues={contactInitialValues}
          validationSchema={contactValidationSchema}
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
                <label htmlFor="emailInput">Email</label>
                <input
                  id="emailInput"
                  name="email"
                  type="text"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helpertext={touched.email && errors.email}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.email && Boolean(errors.email) && (
                  <p className="text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="telephoneInput">Numer telefonu</label>
                <input
                  id="telephoneInput"
                  name="telephone"
                  type="tel"
                  onBlur={handleBlur}
                  value={values.telephone}
                  onChange={handleChange}
                  error={touched.telephone && Boolean(errors.telephone)}
                  helpertext={touched.telephone && errors.telephone}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.telephone && Boolean(errors.telephone) && (
                  <p className="text-red-500">{errors.telephone}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="messageInput">Wiadomość</label>
                <textarea
                  id="messageInput"
                  name="message"
                  type="textfield"
                  onBlur={handleBlur}
                  value={values.message}
                  onChange={handleChange}
                  error={touched.message && Boolean(errors.message)}
                  helpertext={touched.message && errors.message}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                  placeholder="Twoja wiadomość"
                />
                {touched.message && Boolean(errors.message) && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full max-w-[350px] rounded-md bg-[#303030]  p-2 text-center text-white"
                >
                  Wyślij
                </button>
                {displayErrors()}
                {displaySuccess()}
                {}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Form;
