import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";//import calendar icon from reat-icon 

function DatePickerdataStarting() {
  const Data ="";
  return (<div className='day'>
    <DatePicker 
            className={ "data-input"}
        placeholderText='Choose Starting date'
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

export default DatePickerdataStarting;