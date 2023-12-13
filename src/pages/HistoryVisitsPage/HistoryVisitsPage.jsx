import React from 'react'
import VisitNavigation from '../../components/VisitNavigation'
import HistoryVisitCard from '../../components/HistoryVisitCard'

const HistoryVisitsPage = () => {
  return (
    <div className='bg-[#F6F6F6] min-h-[50vh] w-full flex flex-col items-center '>
        <div className='py-8 max-w-[1400px] px-6 w-full md:px-8 flex flex-col gap-8 md:flex-row md:items-start lg:px-14 '>
            <VisitNavigation />
            <div className='bg-white p-6 w-full'>
                <h2 className='text-2xl font-bold mb-8'>Historia</h2>
                <div className='flex flex-col gap-10'>
                    <HistoryVisitCard
                        date='12 stycznia 2024 godz.16:00'
                        specialist='lek. Laura Molińska'
                        place='Miejscowość, ul. Ulica 12/3a'
                    />
                    <HistoryVisitCard 
                        date='12 stycznia 2024 godz.16:00'
                        specialist='lek. Laura Molińska'
                        place='Miejscowość, ul. Ulica 12/3a'
                    />
                    <HistoryVisitCard 
                        date='12 stycznia 2024 godz.16:00'
                        specialist='lek. Laura Molińska'
                        place='Miejscowość, ul. Ulica 12/3a'
                        lastItem
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HistoryVisitsPage