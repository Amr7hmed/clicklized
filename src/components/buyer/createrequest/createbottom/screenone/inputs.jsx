import { ErrorMessage, Field } from 'formik';
import React from 'react';
import IconLoction from '../../../../../images/icon/location-icon.svg';
import DatePickerdata from './datepicker';

export function Inputquotations(props) {
    const {errors}=props;
  return (
    <div className='inputform'>
        <label className="form-label">Number of required quotations</label>
        <Field type="text" component="input"
            className={errors.numberrequired ? "form-control is-invalid" : "form-control"}
            placeholder="Enter Number of required quotations" name="numberrequired" />


        <ErrorMessage name="numberrequired" component="span" className='errorfiled' />
    </div>
  )
};

export function Inputaddress(props) {
    const {errors}=props;
  return (
    <div className='inputform'>
        <h6>Address</h6>
        <label className="form-label">Required Delivery Location</label>
        <Field type="textarea" component="textarea"
            className={errors.address ? "form-control is-invalid" : "form-control"}
            placeholder="Enter Required Delivery Location" name="address" />
            <button type='button' className='btn addloction'>
                <img src={IconLoction} alt="" />
                Choose location on map
            </button>
        <ErrorMessage name="address" component="span" className='errorfiled' />
    </div>
  )
};


export function Inputday(props) {
    const {data}=props;
  return (
    <div className='inputform inputformday'>
        <label className="form-label">Required Delivery Date/Deadline</label>
        <DatePickerdata Data={data}/>
        <ErrorMessage name="day" component="span" className='errorfiled' />
    </div>
  )
};