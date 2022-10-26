import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";//import calendar icon from reat-icon 

function DatePickerdataEnd() {
  const Data ="";
  return (<div className='day'>
    <DatePicker 
            className={ "data-input"}
        placeholderText='Choose Ending date'
        selected={Data}
        minDate={new Date()} 
        placeholder={"date"}
        value={Data}
        onChange={value => Data.setFieldValue("day", value)}
        />
        {/*
      <img src={IconCleander} alt="Icon Cleander" />
         */}
        </div>
  )
}

export default DatePickerdataEnd;