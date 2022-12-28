import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import IconCleander from "../../../../images/icon/calendar-icon.png";

function DatePickerdatacrissue(props) {
  const { Data, DataAccount ,messagecrissuedate} = props;
  const dayold = DataAccount.supplier.cr_issue_date;
  /*
    const daystring = new Date(dayold);
    let dayvalue = daystring.toString();
    console.log(dayvalue);
  */
  return (<div className='cr_issue_date'>
    <DatePicker
      dateFormat="yyyy/MM/dd"
      className={dayold !== null ? "form-control placeholderdata":
      messagecrissuedate === "" ? "form-control" : 
      "form-control is-invalid"}
      placeholderText={dayold === null ? 'Choose Required Delivery Date/Deadline' : dayold}
      selected={Data.values.cr_issue_date}
      minDate={new Date()}
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