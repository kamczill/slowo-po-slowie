import React, {useState} from 'react'
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoCalendarClearOutline, IoHeartOutline } from "react-icons/io5";
import InfoItem from '../../components/InfoItem';
import mapImg from './../../assets/map.png'

import { useParams } from 'react-router-dom';

const VisitDetailsPage = () => {
  const { id } = useParams()
  const [isDetailsOpen, setIsDetailsOpen] = useState(true)

  const handleToggleDetails = () => setIsDetailsOpen(!isDetailsOpen)

  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center '>
        <div className='py-8 max-w-[1400px] px-6 w-full md:px-8 flex flex-col gap-8 md:flex-row md:items-start lg:px-14 '>
            <div className='bg-white p-6 w-full'>
                <h2 className='text-2xl font-bold mb-8'>Szczegóły wizyty</h2>
                <article className={`flex flex-col gap-4 items-center w-full md:flex-row md:items-start lg:gap-8 pb-10 `}>
                    <div className='bg-[#6D4646] w-[200px] h-[200px] shrink-0'></div>
                    <div className='flex flex-col gap-2 text-lg'>
                        <div className='flex flex-col gap-2 mb-4'>
                          <h3 className='font-bold text-xl'>lek. Laura Molińska</h3>
                          <h3 className='font-bold text-xl'>Logopeda</h3>
                        </div>
                        <InfoItem icon={<IoLocationOutline className='text-2xl' />} text="Miejscowość, ul. Ulica 12/3a" />
                        <InfoItem icon={<IoCallOutline className='text-2xl' />} text="999 222 111" />
                        <InfoItem icon={<IoMailOutline className='text-2xl' />} text="mail@doktor.com" />
                        <InfoItem icon={<IoCalendarClearOutline className='text-2xl' />} text="12 stycznia 2024 godz. 16:00" />
                        <InfoItem icon={<IoHeartOutline className='text-2xl' />} text="konsultacja logopedyczna" />
                        <div className='flex flex-col gap-4 mt-4 w-full lg:flex-row'>
                            <button onClick={handleToggleDetails} className={`${isDetailsOpen ? 'bg-[#5a5959]' : 'bg-[#303030]'} text-white py-2 px-4 rounded-lg lg:px-0 lg:w-[148px]`}>Szczegóły</button>
                            <button className='bg-[#303030] text-white py-2 px-4 rounded-lg lg:px-0 lg:w-[148px]'>Przełóż wizytę</button>
                            <button className='bg-[#303030] text-white py-2 px-4 rounded-lg lg:px-0 lg:w-[148px]'>Odwołaj wizytę</button>
                        </div>
                        {
                            isDetailsOpen && (
                                <div>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit suscipit obcaecati eaque alias ducimus, nostrum, labore iste possimus, explicabo quidem expedita quos odio. Quo deleniti animi autem, similique minima incidunt?</p>
                                </div>
                            )
                        }
                    </div>
                </article>
            </div>

            <div className='bg-white p-6 lg:max-w-[350px]'>
              <img src={mapImg} />
            </div>
        </div>
    </div>
    )
}

export default VisitDetailsPage