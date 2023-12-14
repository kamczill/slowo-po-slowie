import React from "react";
import { NavLink } from "react-router-dom";

const VisitNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive && "underline"} text-lg font-semibold underline-offset-2`
      }
    >
      {children}
    </NavLink>
  );
};

const VisitNavigation = () => {
  return (
    <div className="min-h-[300px] w-full bg-white p-6 md:min-h-[400px] md:max-w-[300px]">
      <h2 className="text-2xl font-bold">Moje wizyty</h2>
      <nav className="mt-8 flex flex-col gap-3">
        <VisitNavLink to="/wizyty/zarezerwowane">Zarezerwowane</VisitNavLink>
        <VisitNavLink to="/wizyty/historia">Historia</VisitNavLink>
      </nav>
    </div>
  );
};

export default VisitNavigation;
