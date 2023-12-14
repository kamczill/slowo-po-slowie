import React from "react";
import Form from "./Form";

const RegisterPage = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] md:min-h-[80vh]">
      <div className="my-8 flex w-full max-w-[1400px] flex-col items-center gap-6 bg-white px-6 py-8 md:px-8 lg:px-14">
        <h2 className="text-center text-3xl font-semibold">Rejestracja</h2>
        <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-6 pb-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
