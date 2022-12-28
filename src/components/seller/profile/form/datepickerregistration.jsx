import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import IconCleander from "../../../../images/icon/calendar-icon.png";

function DatePickerregistration(props) {
  const {Data ,DataAccount ,messagevatregistrationdate}=props;
  const dayold = DataAccount.supplier.vat_registration_date;
  return (<div className='vat_registration_date'>
    <DatePicker 
      dateFormat="yyyy/MM/dd"
      className={dayold !== null ? "form-control placeholderdata":
      messagevatregistrationdate === "" ? "form-control" : 
      "form-control is-invalid"}
      placeholderText={dayold === null ? 'Choose Required Delivery Date/Deadline' : dayold}
        selected={Data.values.vat_registration_date}
        minDate={new Date()} 
        placeholder={"date"}
        value={Data.values.vat_registration_date}
        onChange={value => {
          Data.setFieldValue("vat_registration_date", value)
        console.log(value);
        }}
        />
        {/*
      <img src={IconCleander} alt="Icon Cleander" />
         */}
        </div>
  )
}

export default DatePickerregistration;