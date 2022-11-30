import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-bootstrap-date-picker';

export default function DateTimePicker() {
const [value,setValue]=useState("22/11/2022");
const handleChange=()=>{
}
  return (<div>

<DatePicker id="example-datepicker" value={value} onChange={handleChange} />
  </div>
  );
}
