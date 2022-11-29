import { ErrorMessage, Field, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import IconAdd from '../../../../../images/icon/add-gray.png';
import IconClose from "../../../../../images/icon/ic-close.svg";
import IconProfile from "../../../../../images/icon/img-profile.jpg";


export function InputSupplierslist(props) {
  const { supplierslistrequest ,setSupplierslistrequest ,SuppliersItems, setSuppliersItems} = props;


  const RemoveItem = (id) => {
    console.log(id);
    let remainingArr = supplierslistrequest.filter(data => data.id != id);
    console.log(remainingArr);
    setSupplierslistrequest([...remainingArr])
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
      {supplierslistrequest.length === 0 ? "" :
        <>

          <div className="listitems">
            {supplierslistrequest.map(item =>
              <span key={item.id} className="listitem">
                <span>
                  <img src={item.image === undefined ? IconProfile: item.image } alt={item} className="iconprofile" />
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
      {supplierslistrequest.length === 0 ? <span className='errorfiled'>Add Supplier is Required</span>:""}
    </div>
  )
};

export function Inputcompany() {
  return (
    <div className='inputform'>
      <h6>Send invitation to supplier outside system</h6>
      <div className="row">
        <div className="col-12 col-lg-4">
          <label className="form-label">Company name</label>
          <Field type="text" component="input"
            className={"form-control"}
            placeholder="Enter Company Name" name="companyname" />
          <br />
        </div>
        <div className="col-12 col-lg-4">

          <label className="form-label">Company Email</label>
          <Field type="email" component="input"
            className={"form-control"}
            placeholder="Enter Email" name="companyemail" />
          <br />

        </div>
        <div className="col-12 col-lg-4">

          <label className="form-label">Contact numebr</label>
          <Field type="number" component="input"
            className={"form-control"}
            placeholder="Enter Contact numebr" name="contactnumebr" />
          <br />
        </div>
      </div>

    </div>
  )
};

export function Inputcheckbox(props) {
  const { errors } = props;
  return (
    <div className='inputform'>
      <Field type="checkbox" name="checkboxtoggle" id="checkboxtoggle"/>
      <label className="form-label formlabel-checkbox" htmlFor='checkboxtoggle'>
        Send invitations to all suppliers</label>
      <ErrorMessage name="checkboxtoggle" component="span" className='errorfiled' />
    </div>
  )
};
