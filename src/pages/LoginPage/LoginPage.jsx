import React from "react";
import Form from "./Form";
import CustomLink from "../../components/CustomLink";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const LoginPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  if (user) navigate('/profil')
  
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] md:min-h-[80vh]">
      <div className="my-8 flex w-full max-w-[1400px] flex-col items-center gap-6 bg-white px-6 py-8 md:px-8 lg:px-14">
        <h2 className="text-center text-3xl font-semibold">Logowanie</h2>
        <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-6 border-b-2 border-black pb-6">
          <Form />
          <CustomLink
            to="/przypomnienie-hasla"
            className="underline underline-offset-2"
          >
            Przypomnij hasło
          </CustomLink>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <h4>Nie masz konta?</h4>
          <CustomLink to="/rejestracja" className="w-full max-w-[350px]">
            <button className="w-full rounded-md bg-[#303030] p-2  text-center text-white">
              Zarejestruj się
            </button>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
