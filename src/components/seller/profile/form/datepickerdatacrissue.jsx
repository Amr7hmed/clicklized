import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import IconCleander from "../../../../images/icon/calendar-icon.png";

function DatePickerdatacrissue(props) {
  const {Data}=props;
  return (<div className='cr_issue_date'>
    <DatePicker 
      dateFormat="yyyy/MM/dd"
      className={Data.errors.cr_issue_date ? "form-control is-invalid" : "form-control"}
        placeholderText='Choose Required Delivery Date/Deadline'
        selected={Data.values.cr_issue_date}
        minDate={new Date()} 
        placeholder={"date"}
        value={Data.values.cr_issue_date}
        onChange={value => Data.setFieldValue("cr_issue_date", value)}
        />
        {/*
      <img src={IconCleander} alt="Icon Cleander" />
         */}
        </div>
  )
}

export default DatePickerdatacrissue;