import React from "react";
import Form from "./Form";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] md:min-h-[80vh]">
      <div className=" flex w-full max-w-[1400px]  flex-col items-center gap-4 px-6 py-8 md:px-8 lg:px-14">
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <div className="flex w-full flex-col gap-6 bg-white p-6">
            <h2 className="border-b border-black pb-4 text-left text-xl font-semibold">
              Napisz do nas!
            </h2>
            <Form />
          </div>
          <div className="flex w-full flex-col gap-6 overflow-hidden  md:max-w-[350px]">
            <iframe
              className=""
              width="900"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81987.39005695471!2d19.922473239358613!3d50.04684672014896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1701533530939!5m2!1spl!2spl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col bg-white p-4 pb-7">
              <h2 className="text-left text-xl font-semibold ">Kontakt</h2>
              <div className="mt-6 flex w-full flex-col gap-6 px-2 text-lg leading-4">
                <div className="inline-flex w-full items-start justify-start gap-4">
                  <IoLocationOutline className="text-2xl" />
                  <div className="flex flex-col gap-2">
                    <p>00-000 Miejscowość</p>
                    <p>l. Ulica 11</p>
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-start gap-4">
                  <BsTelephone className="text-2xl" />
                  <div className="flex flex-col gap-2">
                    <p>000 000 000</p>
                  </div>
                </div>
                <div className="inline-flex w-full items-center justify-start gap-4">
                  <IoMailOutline className="text-2xl" />
                  <div className="flex flex-col gap-2">
                    <p>adres.doktorka@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
