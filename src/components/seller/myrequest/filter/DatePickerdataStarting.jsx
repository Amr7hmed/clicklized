import React, { useState } from 'react';
import { useContext } from 'react';
import DatePicker from "react-datepicker";
import { FiCalendar } from "react-icons/fi";//import calendar icon from reat-icon 
import { Authcontext } from '../../../../store/context';

function DatePickerdataStarting() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const Data ="";
  return (<div className='day'>
    <DatePicker 
            className={ "data-input"}
        placeholderText={language === "Ar" ? "اختر تاريخ البدء" : 'Choose Starting date'}
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