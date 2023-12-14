import React from "react";
import VisitNavigation from "../../components/VisitNavigation";
import HistoryVisitCard from "../../components/HistoryVisitCard";

const HistoryVisitsPage = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="flex w-full max-w-[1400px] flex-col gap-8 px-6 py-8 md:flex-row md:items-start md:px-8 lg:px-14 ">
        <VisitNavigation />
        <div className="w-full bg-white p-6">
          <h2 className="mb-8 text-2xl font-bold">Historia</h2>
          <div className="flex flex-col gap-10">
            <HistoryVisitCard
              date="12 stycznia 2024 godz.16:00"
              specialist="lek. Laura Molińska"
              place="Miejscowość, ul. Ulica 12/3a"
            />
            <HistoryVisitCard
              date="12 stycznia 2024 godz.16:00"
              specialist="lek. Laura Molińska"
              place="Miejscowość, ul. Ulica 12/3a"
            />
            <HistoryVisitCard
              date="12 stycznia 2024 godz.16:00"
              specialist="lek. Laura Molińska"
              place="Miejscowość, ul. Ulica 12/3a"
              lastItem
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryVisitsPage;
