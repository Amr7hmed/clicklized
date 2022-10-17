import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import IconCleander from "../../../../../images/icon/calendar-icon.png";

function DatePickerdata(props) {
  const {Data}=props;

  return (<div className='day'>
    <DatePicker 
            className={Data.errors.day ? "data-input is-invalid" : "data-input"}
        placeholderText='Choose Required Delivery Date/Deadline'
        selected={Data.values.day}
        minDate={new Date()} 
        placeholder={"date"}
        value={Data.values.day}
        onChange={value => Data.setFieldValue("day", value)}
        />
        </div>
  )
}

export default DatePickerdata;