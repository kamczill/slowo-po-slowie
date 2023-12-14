import React from "react";

const InfoItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default InfoItem;
