import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { loginInitialValues, loginValidationSchema } from "./validation";
import axios from "axios";
import { useMutation } from 'react-query';
import AuthContext from "../../contexts/authContext";
import { toast } from "react-toastify";

const loginUser = async (credentials) => {
    const response = await axios.post('http://127.0.0.1:8000/reset-password/', {
      ...credentials
    }, {
      headers:{
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }})
    return response.data;

}

const Form = () => {
  const navigate = useNavigate()
  const mutation = useMutation(loginUser, {
    onSuccess: (data, variables, context) => {
      toast.success('Email z kodem resetowania hasła został wysłany!', {
        position: "bottom-center",
        });
      navigate('/reset-hasla')
    }
  });

  const { login } = useContext(AuthContext)


  const handleSubmit = async (values) => {
    const credentials = {
      email: values.login    
    }

    mutation.mutate(credentials);
  };

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
                <label htmlFor="login">Mail</label>
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
    
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#303030] p-2  text-center text-white"
                >
                  Wyślij przypomnienie
                </button>
              </div>
            </form>
          )}
        </Formik>
        {mutation.isError && <p className="text-red-500 pt-6">{mutation.error.response?.data?.detail}</p>}
      </div>
    </>
  );
};

export default Form;
