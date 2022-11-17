import { ErrorMessage, Field, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import IconAdd from '../../../../../images/icon/add-gray.png';
import IconClose from "../../../../../images/icon/ic-close.svg";


export function InputSupplierslist(props) {
  const { SupplierslistItems ,setSupplierslistItems ,SuppliersItems, setSuppliersItems} = props;


  const RemoveItem = (id) => {
    console.log(id);
    let remainingArr = SupplierslistItems.filter(data => data.id != id);
    console.log(remainingArr);
    setSupplierslistItems([...remainingArr])
  }
  return (
    <div className='inputsupplierslist'>
      <div className="supplierslist">
        <span className='supplierslist_text'>Suppliers list</span>

        <button type="button" className="btn btn-add"
          data-bs-toggle="modal" data-bs-target="#modallsupplierslist">
          <img src={IconAdd} alt="IconAdd" />
          Add new supplier
        </button>

      </div>
      {SupplierslistItems.length === 0 ? "" :
        <>

          <div className="listitems">
            {SupplierslistItems.map(item =>
              <span key={item.id} className="listitem">
                <span>
                  <img src={item.image} alt={item} className="iconprofile" />
                  {item.company_name}
                </span>

                <button className='btn btn-close' onClick={() => RemoveItem(item.id)}>
                  <img src={IconClose} alt="Icon Close" />
                </button>
              </span>
            )}

          </div>
        </>
      }
      {SupplierslistItems.length === 0 ? <span className='errorfiled'>Add Supplier is Required</span>:""}
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
            className={errors.companyname === "" ? "form-control is-invabuttond" : "form-control"}
            placeholder="Enter Company Name" name="companyname" />
          <br />
          {errors.companyname === "" ? <span className='errorfiled'>Company Name is Required</span>:""}
        </div>
        <div className="col-12 col-lg-4">

          <label className="form-label">Company Email</label>
          <Field type="email" component="input"
            className={errors.companyemail === "" ? "form-control is-invabuttond" : "form-control"}
            placeholder="Enter Email" name="companyemail" />
          <br />
          {errors.companyemail === "" ? <span className='errorfiled'>Company Email is Required</span>:""}

        </div>
        <div className="col-12 col-lg-4">

          <label className="form-label">Contact numebr</label>
          <Field type="number" component="input"
            className={errors.contactnumebr === "" ? "form-control is-invabuttond" : "form-control"}
            placeholder="Enter Contact numebr" name="contactnumebr" />
          <br />
          {errors.contactnumebr === "" ? <span className='errorfiled'>Company Numebr is Required</span>:""}
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
      <ErrorMessage name="checkboxtoggle" component="span" className='errorfiled' />
    </div>
  )
};
