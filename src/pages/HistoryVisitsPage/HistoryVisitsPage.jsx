import React from "react";
import VisitNavigation from "../../components/VisitNavigation";
import customAxios  from './../../axios/axios'
import {useQuery} from 'react-query'
import { useAuth } from './../../contexts/authContext'
import Spinner from '../../components/Spinner'
import VisitCard from "../../components/VisitCard";
import { formatDate } from "../../utils/formatDate";

const HistoryVisitsPage = () => {
  const { user } = useAuth()

  const getVisits = async () => {
    const res = await customAxios(`users/${user?.id}/past-appointments`)
    return res.data
  }
  const query = useQuery('visits', getVisits, { enabled: !!user?.id})

  const visits = () => {
    if(query.isSuccess){
      const mappedVisits = query.data.map(visit => (
        <VisitCard
              key={visit.id}
              visitId={visit.id}
              date={formatDate(visit.date)}
              specialist={visit.specialist.name}
              place="Gdańsk, ul. Ulica 12/3a"
        />
      ))

      return mappedVisits;
    }
  }

  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="flex w-full max-w-[1400px] flex-col gap-8 px-6 py-8 md:flex-row md:items-start md:px-8 lg:px-14 ">
        <VisitNavigation />
        <div className="w-full bg-white p-6">
          <h2 className="mb-8 text-2xl font-bold">Historia</h2>
          <div className="flex flex-col gap-10">
            {query.isError && <p className="text-red-500">Coś poszło nietak!</p> }
            {query.isLoading && <div className="flex justify-center"><Spinner /></div>}
           {visits()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryVisitsPage;
