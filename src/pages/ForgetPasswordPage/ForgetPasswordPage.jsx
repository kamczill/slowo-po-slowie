import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] md:min-h-[80vh]">
    <div className="my-8 flex w-full max-w-[1400px] flex-col items-center gap-6 bg-white px-6 py-8 md:px-8 lg:px-14">
      <h2 className="text-center text-3xl font-semibold">Przypomnij hasło</h2>
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-6 border-b-2 border-black pb-6">
        <Form />
      </div>
      <div>
        <Link to='/reset-hasla' className="underline">Mam już kod resetujący hasło</Link>
      </div>
    </div>
  </div>
  );
};

export default ForgetPasswordPage;
