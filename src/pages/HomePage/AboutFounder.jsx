import React from 'react'
import avatar from '../../assets/anna-stachowiak-profile.png'
const AboutFounder = () => {
  return (
    <div className='flex items-center justify-center '>
        <article className='flex flex-col md:flex-row md:gap-6 md:items-center md:justify-center w-full max-w-[1200px] px-6 lg:justify-center lg:gap-[200px]'>
            <div className='flex flex-col items-center gap-6'>
                <h2 className='hidden font-semibold text-xl text-left w-full md:flex flex-col'>Założycielka <span>Słowo po słowie</span></h2>
                <img src={avatar} className='w-[80vw] max-w-[300px] lg:max-w-[450px]'/>
                <h3 className='text-center font-semibold text-xl hidden lg:block'>Anna Stachowiak</h3>
            </div>
            <div className='flex flex-col items-center justify-center md:items-start lg:items-end h-full lg:self-end'>
                <h3 className='text-center font-semibold text-xl md:text-left lg:hidden'>Anna Stachowiak</h3>
                <p className='px-6 pt-2 text-justify max-w-[500px] md:text-left md:px-0 lg:max-w-[350px] lg:text-justify'>
                    Dr Anna Stachowiak to doświadczona logopedka i innowatorka w dziedzinie terapii mowy. 
                    Z pasją poświęca swoje życie pracy nad doskonaleniem procesu nauki 
                    i rozwijania umiejętności komunikacyjnych u dzieci i dorosłych. 
                    Dr Stachowiak jest uznaną autorką i twórczynią Kart Logopedycznych “Słowo po słowie”, 
                    innowacyjnego narzędzia terapeutycznego, 
                    które zdobyło uznanie wśród specjalistów i rodziców.
                </p>
            </div>
        </article>
    </div>
  )
}

export default AboutFounder