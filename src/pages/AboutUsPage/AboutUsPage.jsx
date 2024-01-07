import React from "react";
import teamImg from "./../../assets/team.png";
const AboutUsPage = () => {
  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center bg-[#F6F6F6] ">
      <div className="my-8 flex w-full max-w-[1400px] flex-col items-center gap-8 bg-white px-6 py-8 md:px-8 lg:px-14">
        <h2 className="text-center text-3xl font-semibold">Poznajmy się</h2>
        <div className="w-full max-w-[700px]">
          <img src={teamImg} className="w-full" />
        </div>
        <main className="flex flex-col gap-4 px-12">
        <p>
          Witajcie w świecie "Słowo po Słowie" – miejscu stworzonym z pasją i miłością do logopedii!
        </p>
        <p>
          Jesteśmy grupą przyjaciół, którzy poznali się na studiach logopedycznych. Nasza wspólna pasja do pracy z dziećmi i dorosłymi, wspieranie rozwoju mowy i komunikacji, połączyła nas w wyjątkowy sposób. Wspólne marzenia o tworzeniu innowacyjnych narzędzi wspomagających terapię logopedyczną doprowadziły nas do stworzenia "Słowo po Słowie".
        </p>
        <p>
          Naszą misją jest dostarczanie innowacyjnych narzędzi logopedycznych, które nie tylko wspierają rozwój mowy, ale także sprawiają, że nauka staje się przyjemnością. Wierzymy, że każdy zasługuje na skuteczną i dostosowaną do swoich potrzeb terapię.
        </p>
        <strong>
        Co Oferujemy?
        </strong>
        <p>Karty do Gry: Nasze karty do gry są nie tylko zabawą, ale także skutecznym narzędziem logopedycznym. Zostały starannie opracowane z myślą o wspieraniu różnych obszarów mowy i komunikacji. Dzięki nim nauka staje się kreatywną przygodą.</p>
        <p>Ebooki Edukacyjne: Nasza oferta obejmuje ebooki edukacyjne, które są cennym źródłem wiedzy dla rodziców i wszystkich zainteresowanych tematyką rozwoju mowy. Dostępne są praktyczne poradniki, ciekawe artykuły i inspirujące gry edukacyjne.</p>
        <p>Szkolenia Logopedyczne: Organizujemy szkolenia online dla logopedów i innych specjalistów z branży. Nasze szkolenia są oparte na najnowszych badaniach i praktykach, pomagając rozwijać umiejętności zawodowe w dynamicznie zmieniającym się środowisku.</p>
        <strong>Dlaczego my?</strong>
        <p>Ponieważ jesteśmy zespołem z pasją do logopedii i chęcią wspierania rozwoju naszych pacjentów!</p>
        <p>Ponieważ nasze produkty i szkolenia są oparte na najnowszych osiągnięciach w dziedzinie logopedii!</p>
        <p>Ponieważ wierzymy w indywidualne podejście i dostosowywanie terapii do konkretnych potrzeb każdego pacjenta!</p>
        <p>"Słowo po Słowie" to więcej niż tylko sklep logopedyczny – to społeczność z pasją do słowa. Dołącz do naszej przygody i razem wspierajmy rozwój mowy i komunikacji!</p>
        <p>Dziękujemy, że jesteś z nami, krok po kroku, "Słowo po Słowie"!</p>
        </main>
      </div>
    </div>
  );
};

export default AboutUsPage;
