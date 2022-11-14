import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import IconCleander from "../../../../images/icon/calendar-icon.png";

function DatePickerregistration(props) {
  const {Data}=props;
  return (<div className='vat_registration_date'>
    <DatePicker 
      dateFormat="yyyy/MM/dd"
      className={Data.errors.vat_registration_date ? "form-control is-invalid" : "form-control"}
        placeholderText='Choose Required Delivery Date/Deadline'
        selected={Data.values.vat_registration_date}
        minDate={new Date()} 
        placeholder={"date"}
        value={Data.values.vat_registration_date}
        onChange={value => Data.setFieldValue("vat_registration_date", value)}
        />
        {/*
      <img src={IconCleander} alt="Icon Cleander" />
         */}
        </div>
  )
}

export default DatePickerregistration;