import { ErrorMessage, Field, FieldArray } from 'formik';
import React from 'react';
import IconAdd from '../../../../../images/icon/add-gray.png';


export function InputSupplierslist() {
  return (
    <div className='inputsupplierslist'>
      <div className="supplierslist">
        <span>Suppliers list</span>

        <button type="button" className="btn btn-add"
       data-bs-toggle="modal" data-bs-target="#modallsupplierslist">
          <img src={IconAdd} alt="IconAdd" />
          Add new supplier
        </button>
        
      </div>

    </div>
  )
};

export function Inputcompany(props) {
  const { errors } = props;
  return (
    <div className='inputform'>
      <h6>Send invitation to supplier outside system</h6>
      <div className="row">
        <div className="col-12 col-lg-4">
          <label className="form-label">Company name</label>
          <Field type="text" component="input"
            className={errors.companyname ? "form-control is-invabuttond" : "form-control"}
            placeholder="Enter Company Name" name="companyname" />
          <br />
          <ErrorMessage name="companyname" component="span" className='errorfiled' />
        </div>
        <div className="col-12 col-lg-4">

          <label className="form-label">Company Email</label>
          <Field type="email" component="input"
            className={errors.companyemail ? "form-control is-invabuttond" : "form-control"}
            placeholder="Enter Email" name="companyemail" />
          <br />
          <ErrorMessage name="companyemail" component="span" className='errorfiled' />

        </div>
        <div className="col-12 col-lg-4">

          <label className="form-label">Contact numebr</label>
          <Field type="text" component="input"
            className={errors.contactnumebr ? "form-control is-invabuttond" : "form-control"}
            placeholder="Enter Contact numebr" name="contactnumebr" />
          <br />
          <ErrorMessage name="contactnumebr" component="span" className='errorfiled' />

        </div>
      </div>

    </div>
  )
};

export function Inputcheckbox(props) {
  const { errors } = props;
  return (
    <div className='inputform'>
          <Field type="checkbox" name="checkboxtoggle" />
            <label className="form-label formlabel-checkbox">
              Send invitations to all suppliers</label>
    </div>
  )
};
