import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import IconCleander from "../../../../images/icon/calendar-icon.png";

function DatePickerdatacrexpire(props) {
  const { Data, DataAccount, messagecrexpiredate } = props;
  const dayold = DataAccount.supplier.cr_expire_date;
  return (<div className='cr_expire_date'>
    <DatePicker
      dateFormat="yyyy/MM/dd"
      className={dayold !== null ? "form-control placeholderdata" :
        messagecrexpiredate === "" ? "form-control" :
          "form-control is-invalid"}
      placeholderText={dayold === null ? 'Choose Required Delivery Date/Deadline' : dayold}
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