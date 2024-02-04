import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

export const DatePicker = ({ value, onChange }) => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 3);
  const maxDate = currentDate

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} className='w-full h-[46px] border-gray-400 rounded' minDate={new Date()} maxDate={maxDate} maxDetail="minute"	locale="pl-PL" />
    </div>
  );
}