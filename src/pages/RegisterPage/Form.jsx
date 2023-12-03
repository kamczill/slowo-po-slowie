import React from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { registerInitialValues, registerValidationSchema } from './validation'

const Form = () => {

    const handleSubmit = async (values) => {
    }

  return (
    <>
    <div className='w-full flex flex-col justify-center items-center'>
        <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, handleBlur, handleChange, values, touched, errors }) => (
                <form 
                    onSubmit={handleSubmit} 
                    className='flex flex-col gap-4 w-full max-w-[350px] font-ms'
                >
                    <div className='flex flex-col'>
                        <label htmlFor="loginInput">
                            Login
                        </label>
                        <input
                            id="loginInput"
                            name="login"
                            type="text"
                            onBlur={handleBlur}
                            value={values.login}
                            onChange={handleChange}
                            error={(touched.login && Boolean(errors.login))?.toString()}
                            helpertext={touched.login && errors.login || undefined}
                            className='py-2 px-3 rounded-lg border border-[#404040]'
                        />
                        {touched.login && Boolean(errors.login) && (
                            <p className='text-red-500'>{errors.login}</p>
                        )}
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor="firstNameInput">
                        Imie
                    </label>
                    <input
                        id="firstNameInput"
                        name="firstName"
                        type="text"
                        onBlur={handleBlur}
                        value={values.firstName}
                        onChange={handleChange}
                        error={(touched.firstName && Boolean(errors.firstName))?.toString()}
                        helpertext={touched.firstName && errors.firstName || undefined}
                        className='py-2 px-3 rounded-lg border border-[#404040]'
                    />
                     {touched.firstName && Boolean(errors.firstName) && (
                        <p className='text-red-500'>{errors.firstName}</p>
                    )}
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor="lastNameInput">
                        Nazwisko
                    </label>
                    <input
                        id="lastNameInput"
                        name="lastName"
                        type="text"
                        onBlur={handleBlur}
                        value={values.lastName}
                        onChange={handleChange}
                        error={(touched.lastName && Boolean(errors.lastName))?.toString()}
                        helpertext={touched.lastName && errors.lastName  || undefined}
                        className='py-2 px-3 rounded-lg border border-[#404040]'
                    />
                     {touched.lastName && Boolean(errors.lastName) && (
                        <p className='text-red-500'>{errors.lastName}</p>
                    )}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Hasło </label>
                        <input
                            id="password" 
                            name="password" 
                            type="password" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={(touched.password && Boolean(errors.password))?.toString()}
                            helpertext={touched.password && errors.password || undefined}
                            className='py-2 px-3 rounded-lg border border-[#404040]'
                        />
                         {touched.password && Boolean(errors.password) && (
                        <p className='text-red-500'>{errors.password}</p>
                    )}
                    </div>
                    <div className='flex flex-col font-ms'>
                        <div className='flex justify-between'>
                        <label htmlFor="rulesCheckbox" className='max-w-[300px]'>*Akceptuję <a href='/regulamin' className='underline'> Regulamin</a> oraz <a href='/polityka-prywatnosci' className='underline'>Politykę Prywatności</a> </label>
                        <input
                            id="rulesCheckbox" 
                            name="rulesCheckbox" 
                            type="checkbox" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.rulesCheckbox}
                            error={(touched.rulesCheckbox && Boolean(errors.rulesCheckbox))?.toString()}
                            helpertext={touched.rulesCheckbox && errors.rulesCheckbox || undefined}
                            className='w-[20px] border border-[#404040]'
                        />
                        </div>
                         {touched.rulesCheckbox && Boolean(errors.rulesCheckbox) && (
                        <p className='text-red-500'>{errors.rulesCheckbox}</p>
                    )}
                    </div>
                    <div>
                    <button type="submit" className='w-full rounded-md text-center text-white  bg-[#303030] p-2 max-w-[350px]'>
                        <Link to='/rejestracja'>Zarejestruj się</Link>
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