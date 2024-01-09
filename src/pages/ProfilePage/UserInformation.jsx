import React from 'react'
import { Formik } from "formik";
import { initialValues } from './validation';
import CustomLink from '../../components/CustomLink';

const UserInformation = () => {
  return (
    <div className="w-full bg-white p-6 md:px-14">
      <h2 className="text-left text-3xl font-semibold">
        Informacje o koncie
      </h2>
      <div className="flex w-full flex-col items-center justify-center mt-8">
        <Formik
          initialValues={initialValues}
          // validationSchema={registerValidationSchema}
          // onSubmit={handleSubmit}
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
              className="font-ms flex w-full max-w-[350px] flex-col gap-4 md:max-w-[450px]"
            >
              <div className="flex flex-col">
                <label htmlFor="firstNameInput">Login</label>
                <input
                  id="loginInput"
                  name="login"
                  type="text"
                  onBlur={handleBlur}
                  value={values.login}
                  onChange={handleChange}
                  error={(
                    touched.login && Boolean(errors.login)
                  )?.toString()}
                  helpertext={
                    (touched.login && errors.login) || undefined
                  }
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

              <div className='w-full border border-b-black my-4 md:w-[120%] md:ml-[-10%]'></div>
              <div className="flex flex-col">
                <label htmlFor="newEmailInput">Nowy Email</label>
                <input
                  id="newEmailInput"
                  name="newEmail"
                  type="text"
                  onBlur={handleBlur}
                  value={values.newEmail}
                  onChange={handleChange}
                  error={touched.newEmail && Boolean(errors.newEmail)}
                  helpertext={touched.newEmail && errors.newEmail}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.newEmail && Boolean(errors.newEmail) && (
                  <p className="text-red-500">{errors.newEmail}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmEmailInput">Powtórz Email</label>
                <input
                  id="confirmEmailInput"
                  name="confirmEmail"
                  type="text"
                  onBlur={handleBlur}
                  value={values.confirmEmail}
                  onChange={handleChange}
                  error={touched.confirmEmail && Boolean(errors.confirmEmail)}
                  helpertext={touched.confirmEmail && errors.confirmEmail}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.confirmEmail && Boolean(errors.confirmEmail) && (
                  <p className="text-red-500">{errors.confirmEmail}</p>
                )}
              </div>
              <p className='text-[#A6A6A6]'>Pozostaw pole puste, aby pozostawić dotychczasowy e-mail</p>
              <div className='w-full border border-b-black my-4 md:w-[120%] md:ml-[-10%]'></div>

              <div className="flex flex-col">
                <label htmlFor="newPasswordInput">Nowe hasło</label>
                <input
                  id="newPasswordInput"
                  name="newPassword"
                  type="password"
                  onBlur={handleBlur}
                  value={values.newPassword}
                  onChange={handleChange}
                  error={touched.newPassword && Boolean(errors.newPassword)}
                  helpertext={touched.newPassword && errors.newPassword}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.newPassword && Boolean(errors.newPassword) && (
                  <p className="text-red-500">{errors.newPassword}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmPasswordInput">Powtórz hasło</label>
                <input
                  id="confirmPasswordInput"
                  name="confirmPassword"
                  type="password"
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helpertext={touched.confirmPassword && errors.confirmPassword}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.confirmPassword && Boolean(errors.confirmPassword) && (
                  <p className="text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
              <p className='text-[#A6A6A6]'>Pozostaw pole puste, aby pozostawić dotychczasowe hasło.</p>

              <div className='w-full border border-b-black my-4 md:w-[120%] md:ml-[-10%]'></div>

              <div className="flex flex-col">
                <label htmlFor="currentPasswordInput">Aktualne hasło</label>
                <input
                  id="currentPasswordInput"
                  name="currentPassword"
                  type="password"
                  onBlur={handleBlur}
                  value={values.currentPassword}
                  onChange={handleChange}
                  error={touched.currentPassword && Boolean(errors.currentPassword)}
                  helpertext={touched.currentPassword && errors.currentPassword}
                  className="rounded-lg border border-[#404040] px-3 py-2"
                />
                {touched.currentPassword && Boolean(errors.currentPassword) && (
                  <p className="text-red-500">{errors.currentPassword}</p>
                )}
              </div>
              <p className='text-[#A6A6A6]'>Wpisz aktualne hasło, aby autoryzować zmiany.</p>

              <div className='mt-4'>
                <button
                  type="submit"
                  className="w-full max-w-[450px] rounded-md bg-[#303030]  p-2 text-center text-white"
                >
                  <CustomLink to="">Zapisz</CustomLink>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default UserInformation