import React, { useState } from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoCalendarClearOutline,
  IoHeartOutline,
} from "react-icons/io5";
import InfoItem from "../../components/InfoItem";
import mapImg from "./../../assets/map.png";

import { useParams } from "react-router-dom";

const VisitDetailsPage = () => {
  const { id } = useParams();
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  const handleToggleDetails = () => setIsDetailsOpen(!isDetailsOpen);

  return (
    <div className="flex min-h-[60vh]  w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="flex w-full max-w-[1400px] flex-col gap-8 px-6 py-8 md:flex-row md:items-start md:px-8 lg:px-14 ">
        <div className="w-full bg-white p-6">
          <h2 className="mb-8 text-2xl font-bold">Szczegóły wizyty</h2>
          <article
            className={`flex w-full flex-col items-center gap-4 pb-10 md:flex-row md:items-start lg:gap-8 `}
          >
            <div className="h-[200px] w-[200px] shrink-0 bg-[#6D4646]"></div>
            <div className="flex flex-col gap-2 text-lg">
              <div className="mb-4 flex flex-col gap-2">
                <h3 className="text-xl font-bold">lek. Laura Molińska</h3>
                <h3 className="text-xl font-bold">Logopeda</h3>
              </div>
              <InfoItem
                icon={<IoLocationOutline className="text-2xl" />}
                text="Miejscowość, ul. Ulica 12/3a"
              />
              <InfoItem
                icon={<IoCallOutline className="text-2xl" />}
                text="999 222 111"
              />
              <InfoItem
                icon={<IoMailOutline className="text-2xl" />}
                text="mail@doktor.com"
              />
              <InfoItem
                icon={<IoCalendarClearOutline className="text-2xl" />}
                text="12 stycznia 2024 godz. 16:00"
              />
              <InfoItem
                icon={<IoHeartOutline className="text-2xl" />}
                text="konsultacja logopedyczna"
              />
              <div className="mt-4 flex w-full flex-col gap-4 lg:flex-row">
                <button
                  onClick={handleToggleDetails}
                  className={`${
                    isDetailsOpen ? "bg-[#5a5959]" : "bg-[#303030]"
                  } rounded-lg px-4 py-2 text-white lg:w-[148px] lg:px-0`}
                >
                  Szczegóły
                </button>
                <button className="rounded-lg bg-[#303030] px-4 py-2 text-white lg:w-[148px] lg:px-0">
                  Przełóż wizytę
                </button>
                <button className="rounded-lg bg-[#303030] px-4 py-2 text-white lg:w-[148px] lg:px-0">
                  Odwołaj wizytę
                </button>
              </div>
              {isDetailsOpen && (
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit suscipit obcaecati eaque alias ducimus, nostrum,
                    labore iste possimus, explicabo quidem expedita quos odio.
                    Quo deleniti animi autem, similique minima incidunt?
                  </p>
                </div>
              )}
            </div>
          </article>
        </div>

        <div className="bg-white p-6 lg:max-w-[350px]">
          <img src={mapImg} />
        </div>
      </div>
    </div>
  );
};

export default VisitDetailsPage;
