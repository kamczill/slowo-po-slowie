import React from "react";
import Form from "./Form";

const NewVisitPage = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="my-8 flex w-full max-w-[1400px] flex-col gap-8 bg-white px-6 py-8 md:flex-row md:items-start md:px-8 lg:px-14">
        <div className="flex w-full flex-col items-center p-4 ">
          <h2 className="mb-4 text-2xl font-bold">Umów wizytę</h2>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default NewVisitPage;
