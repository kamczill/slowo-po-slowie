import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { useQuery, useMutation } from 'react-query'
import { useAuth } from './../../contexts/authContext'
import Spinner from '../../components/Spinner'
import customAxios from "../../axios/axios";
import { useState } from "react";
import { Formik } from "formik";

import { DatePicker } from "../../components/DatePicker";

export const initialValues = {
  specialistId: 1,
  date: "",
};

const Form = () => {
  const [date, setDate] = useState(new Date());
  const { user } = useAuth();
 
  const getSpecialists = async () => {
    const res = await customAxios(`/get-specialists`);
    return res.data;
  }

  const createAppointment = async (values) => {
    const res = await customAxios.post('/appointments', {...values})
    return res.data
  }

  const {data, isLoading: isLoadingSpecialists } = useQuery(`specialists`, getSpecialists)

  const mutation = useMutation(createAppointment);
  if(isLoadingSpecialists) return <Spinner />


  const displayErrors = () => {
     if(mutation.isError) {
      const errorArr = mutation.error?.response?.data?.detail
      const mappedArr = Array.isArray(errorArr) ? errorArr.map(det => <p key={det.msg}>{det.msg}</p>) : mutation.error?.response?.data?.detail
      return <div className='text-red-500 pt-6 text-lg'>{mappedArr}</div>       
     }
  }

  const displaySuccess = () => {
    if(mutation.isSuccess){
      return <div className='text-green-500 pt-6'><p className='text-center text-lg'>Wizyta złożona pomyślnie!</p></div>
    }
  }

  const handleSubmit = (values) => {
    const credentials = {
      date: values.date,
      user_id: user.id,
      specialist_id: values.specialistId
    }
    mutation.mutate(credentials);
  }

  return (
<Formik
  initialValues={initialValues}
  onSubmit={handleSubmit}
>
  {({
    handleSubmit,
    setFieldValue,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
  }) => (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[350px] flex-col gap-3"
    >
      <div className="relative mb-6">
        <label htmlFor="specialistId" className="text-md mb-2 block font-bold">
          Specjalista
        </label>
        <select
          id="specialistId"
          name="specialistId" // Ensure the name attribute is set for Formik to handle changes
          onBlur={handleBlur}
          value={values.specialistId}
          onChange={handleChange}
          className="focus:shadow-outline relative block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-3 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
        >
          <option disabled hidden>
            Wybierz specjalistę
          </option>
          {
            data?.map(specialist => <option key={specialist.id} value={specialist.id}>{specialist.name}</option>)
          }
        </select>
        <div className="absolute right-2 top-10 text-xl">
          <IoChevronDown />
        </div>
      </div>
      <div className="relative mb-6">
        <label htmlFor="date" className="text-md mb-2 block font-bold">
          Data
        </label>
        <DatePicker
          value={values.date}
          onChange={date => setFieldValue('date', date)}
          className="focus:shadow-outline"
        />
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-[#303030] p-2 text-center text-white"
        >
          Umów wizytę
        </button>
      </div>
     {displayErrors()}
     {displaySuccess()}
    </form>
    
  )}
 
</Formik>
  );
};

export default Form;
