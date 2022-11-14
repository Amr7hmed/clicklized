import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import IconCleander from "../../../../../images/icon/calendar-icon.png";
import { FiCalendar } from "react-icons/fi";//import calendar icon from reat-icon 

function DatePickerdata(props) {
  const {Data}=props;
  return (<div className='day'>
    <DatePicker 
        dateFormat="yyyy/MM/dd"
        className={Data.errors.day ? "data-input is-invalid" : "data-input"}
        placeholderText='Choose Required Delivery Date/Deadline'
        selected={Data.values.day}
        minDate={new Date()} 
        placeholder={"date"}
        value={Data.values.day}
        onChange={value => Data.setFieldValue("day", value)}
        />
        {/*
      <img src={IconCleander} alt="Icon Cleander" />
         */}
        </div>
  )
}

export default DatePickerdata;