import React from 'react'
import lauraAvatar from './../../assets/specialist-avatar.png'
import Slider from '../../components/Slider';
import SpecialistCard from '../../components/SpecialistCard';


const Specialists = () => {
  return (
    <div className='flex flex-col items-center bg-[#F6F6F6] rounded-xl gap-6 py-6'>
        <h2 className='font-semibold text-3xl text-center'>Poznaj naszych specjalistów:</h2>
        <Slider>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
          <div className="keen-slider__slide w-full flex justify-center">
          <SpecialistCard 
            avatar={lauraAvatar}
            name='Laura'
            surname='Molińska'
            city='Luboń'
          />
          </div>
        
        </Slider>
    </div>
  )
}

export default Specialists