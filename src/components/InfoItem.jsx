import React from 'react'

const InfoItem = ({ icon, text }) => {
    return (
      <div className='flex gap-4 items-center'>
        {icon}
        <span>{text}</span>
      </div>
    );
  };
  

export default InfoItem