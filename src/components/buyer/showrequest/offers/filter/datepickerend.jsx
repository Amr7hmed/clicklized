import React, { useState } from 'react';
import DatePicker from "react-datepicker";

function DatePickerdataEnd(props) {
  return (<div className='day'>
  <DatePicker 
          className={ "data-input"}
      placeholderText={props.data}
      selected={""}
      minDate={new Date()} 
      placeholder={"date"}
      value={""}
     // onChange={value => Data.setFieldValue("day", value)}
      />
      {/*
    <img src={IconCleander} alt="Icon Cleander" />
       */}
      </div>
  )
}

export default DatePickerdataEnd;