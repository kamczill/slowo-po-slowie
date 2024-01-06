import React from "react";
import ReviewCard from "../../components/ReviewCard";

const Reviews = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1200px] flex-col rounded-xl bg-white py-6">
        <h2 className="text-center text-3xl font-semibold">Opinie</h2>
        <div className="mb-8 mt-4 flex flex-col items-center gap-8 md:flex-row md:justify-between md:px-12">
          <ReviewCard 
            starsNumber={5} 
            review="Pomoc logopedyczna okazała się zbawienna dla mojego syna. Dzięki cierpliwości i profesjonalizmowi logopedy, nasza codzienna komunikacja stała się bardziej płynna, a syn zaczął zyskiwać pewność siebie w wyrażaniu swoich myśli."
            name="Anna"
          />
          <ReviewCard 
          starsNumber={5} 
          review="Logopeda stał się dla naszej córki nie tylko terapeutą, ale także ciepłym wsparciem. Dzięki dedykowanym ćwiczeniom i kreatywnym zajęciom, nasza malutka rozwija zdolność do komunikacji, co jest dla nas nieocenione."
          name="Marta"    
          />
          <ReviewCard 
            starsNumber={5}
            review="Terapia logopedyczna nie tylko pomogła naszemu synowi w nauce czytania, ale także rozbudziła jego zainteresowanie słowem pisanym. Terapeuta stał się dla niego mentorem, sprawiając, że nauka stała się fascynującą przygodą."
            name="Paweł"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
