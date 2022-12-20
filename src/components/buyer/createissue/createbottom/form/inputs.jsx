import { ErrorMessage, Field, FieldArray } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import IconAdd from '../../../../../images/icon/add-gray.png';
import IconClose from "../../../../../images/icon/ic-close.svg";
import IconProfile from "../../../../../images/icon/img-profile.jpg";
import { Authcontext } from '../../../../../store/context';


export function InputSupplierslist(props) {
  const { supplierslistrequest ,setSupplierslistrequest ,SuppliersItems, setSuppliersItems} = props;

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const RemoveItem = (id) => {
    let remainingArr = supplierslistrequest.filter(data => data.id != id);
    setSupplierslistrequest([...remainingArr])
  }

  return (
    <div className='inputsupplierslist'>
      <div className="supplierslist">
        <span className='supplierslist_text'>
            {language === "Ar" ? "قائمة الموردين" : "Suppliers list"}
          </span>

        <button type="button" className="btn btn-add"
          data-bs-toggle="modal" data-bs-target="#modallsupplierslist">
          <img src={IconAdd} alt="IconAdd" />
            {language === "Ar" ? "إضافة مورد جديد" : "Add new supplier"}
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
    </div>
  )
};

export function Inputcompany() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <h6>
            {language === "Ar" ? "إرسال دعوة إلى مورد خارج النظام" : 
            "Send invitation to supplier outside system"}
          </h6>
      <div className="row">
        <div className="col-12 col-lg-4">
          <label className="form-label">
            {language === "Ar" ? "اسم الشركة" : "Company name"}
            </label>
          <Field type="text" component="input"
            className={"form-control"}
            placeholder=
            {language === "Ar" ? "اسم الشركة" : "Company name"}
             name="companyname" />
          <br />
        </div>
        <div className="col-12 col-lg-4">

          <label className="form-label">
            {language === "Ar" ? "إيميل الشركة" : "Company Email"}
            </label>
          <Field type="email" component="input"
            className={"form-control"}
            placeholder=
            {language === "Ar" ? "إيميل الشركة" : "Company Email"}
             name="companyemail" />
          <br />

        </div>
        <div className="col-12 col-lg-4">

          <label className="form-label">
            {language === "Ar" ? "رقم التواصل" : "Contact numebr"}
            </label>
          <Field type="number" component="input"
            className={"form-control"}
            placeholder=
            {language === "Ar" ? "رقم التواصل" : "Contact numebr"}
             name="contactnumebr" />
          <br />
      <ErrorMessage name="contactnumebr" component="span" className='errorfiled' />
        </div>
      </div>

    </div>
  )
};

export function Inputcheckbox(props) {
  const { errors } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <Field type="checkbox" name="checkboxtoggle" id="checkboxtoggle"/>
      <label className="form-label formlabel-checkbox" htmlFor='checkboxtoggle'>
            {language === "Ar" ? "إرسال دعوات لجميع الموردين" : "Send invitations to all suppliers"}
        </label>
      <ErrorMessage name="checkboxtoggle" component="span" className='errorfiled' />
    </div>
  )
};
