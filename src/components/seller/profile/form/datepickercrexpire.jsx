import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import IconCleander from "../../../../images/icon/calendar-icon.png";

function DatePickerdatacrexpire(props) {
  const {Data}=props;
  return (<div className='cr_expire_date'>
    <DatePicker 
      dateFormat="yyyy/MM/dd"
      className={Data.errors.cr_expire_date ? "form-control is-invalid" : "form-control"}
        placeholderText='Choose Required Delivery Date/Deadline'
        selected={Data.values.cr_expire_date}
        minDate={new Date()} 
        placeholder={"date"}
        value={Data.values.cr_expire_date}
        onChange={value => Data.setFieldValue("cr_expire_date", value)}
        />
        {/*
      <img src={IconCleander} alt="Icon Cleander" />
         */}
        </div>
  )
}

export default DatePickerdatacrexpire;