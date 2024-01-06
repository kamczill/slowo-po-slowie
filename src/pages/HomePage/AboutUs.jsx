import React from 'react'
import CustomLink from '../../components/CustomLink';
import { IoChevronForward } from "react-icons/io5";
import teamImg from './../../assets/team.png'

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[1200px] flex-col rounded-xl bg-white p-6 pb-10">
        <h2 className="text-center text-3xl font-semibold">O nas</h2>
           <div className='flex flex-col pt-4 md:flex-row md:items-start md:gap-6'>
                <div className='w-full border border-black md:max-w-[232px] md:h-[290px]'>
                    <img src={teamImg} className='object-cover w-full h-full'/>
                </div>
                <div className='text-md flex flex-col gap-4 pt-4'>
                    <p>
                        Witajcie w świecie "Słowo po Słowie" – miejscu stworzonym z pasją i miłością do logopedii!
                    </p>
                    <p>
                        Jesteśmy grupą przyjaciół, którzy poznali się na studiach logopedycznych. Nasza wspólna pasja do pracy z dziećmi i dorosłymi, wspieranie rozwoju mowy i komunikacji, połączyła nas w wyjątkowy sposób. Wspólne marzenia o tworzeniu innowacyjnych narzędzi wspomagających terapię logopedyczną doprowadziły nas do stworzenia "Słowo po Słowie".
                    </p>
                    <p>
                        Naszą misją jest dostarczanie innowacyjnych narzędzi logopedycznych, które nie tylko wspierają rozwój mowy, ale także sprawiają, że nauka staje się przyjemnością. Wierzymy, że...
                    </p>
                    <CustomLink
                        className="inline-flex items-center justify-center gap-2 text-lg uppercase md:justify-start"
                        to=''
                    >
                        czytaj dalej <IoChevronForward className="text-2xl" />{" "}
                    </CustomLink>
                </div>
           </div>
        </div>
    </div>  
  )
}

export default AboutUs