import { ErrorMessage, Field, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import IconAdd from '../../../../../images/icon/add-gray.png';
import IconClose from "../../../../../images/icon/ic-close.svg";


export function InputSupplierslist(props) {
  const { SupplierslistItems } = props;
  console.log(SupplierslistItems);
  const [SuppliersItems, setSuppliersItems] = useState([]);

  useEffect(() => {
    setSuppliersItems(SupplierslistItems)
  }, [SupplierslistItems]);

  const RemoveItem = (id) => {
    console.log(id);
    let remainingArr = SuppliersItems.filter(data => data.id != id);
    console.log(remainingArr);
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
            {SuppliersItems.map(item =>
              <span key={item.id} className="listitem">
                <span>
                  <img src={item.img} alt={item} className="iconprofile" />
                  {item.name}
                </span>

                <button className='btn btn-close' onClick={() => RemoveItem(item.id)}>
                  <img src={IconClose} alt="Icon Close" />
                </button>
              </span>
            )}

          </div>
        </>
      }
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
          <Field type="number" component="input"
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
