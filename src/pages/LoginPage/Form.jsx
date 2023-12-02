import React from 'react'
import { Formik } from 'formik'
import { loginInitialValues, loginValidationSchema } from './validation'

const Form = () => {
    const handleSubmit = async (values) => {
    };

  return (
    <>
    <div className='w-full flex flex-col justify-center items-center'>
        <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                <form 
                    onSubmit={handleSubmit} 
                    className='flex flex-col gap-3 w-full max-w-[350px]'
                >
                    <div className='flex flex-col'>
                    <label htmlFor="login">
                        Login
                    </label>
                    <input
                        name="login"
                        type="text"
                        autoComplete='username'
                        onBlur={handleBlur}
                        value={values.login}
                        onChange={handleChange}
                        error={touched.login && Boolean(errors.login)}
                        helpertext={touched.login && errors.login}
                        className='py-2 px-3 rounded-lg border border-slate-300'
                    />
                    {touched.login && Boolean(errors.login) && (
                        <p className='text-red-500'>{errors.login}</p>
                    )}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Hasło </label>
                        <input
                            id="password" 
                            name="password" 
                            type="password" 
                            autoComplete='current-password' 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={touched.password && Boolean(errors.password)}
                            helpertext={touched.password && errors.password}
                            className='py-2 px-3 rounded-lg border border-slate-300'
                        />
                        {touched.password && Boolean(errors.password) && (
                        <p className='text-red-500'>{errors.password}</p>
                    )}
                    </div>
                    <div>
                        <button type="submit" className='w-full rounded-md text-center text-white  bg-[#303030] p-2'>
                        Zaloguj się
                        </button>
                    </div>
                </form>
            )}
        </Formik>        
    </div>
    </>
  )
}


export default Form