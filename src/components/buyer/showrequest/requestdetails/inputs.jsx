import { ErrorMessage, Field, FieldArray } from 'formik';
import React from 'react';
import IconPdf from "../../../../images/icon/icon-pdf.png";
import IconClose from "../../../../images/icon/ic-close.svg";
import IconProfile from "../../../../images/icon/img-profile.jpg";
import IconCleander from "../../../../images/icon/calendar-icon.png";
import IconPdfDownload from "../../../../images/icon/icon-short-pdf.png";
import { Authcontext } from '../../../../store/context';
import { useContext } from 'react';
import ModelGallaryImage from '../../../../layout/modal/modelimages';

export function Inputquotations(props) {
  const { errors, Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <label className="form-label">
        {language === "Ar" ? "العدد المطلوب" : "Number of required quotations"}
      </label>
      <Field type="text" component="input" readOnly
        id="inputquotations"
        value={Data.values.numberrequired}
        className={errors.numberrequired ? "form-control is-invabuttond" : "form-control"}
        placeholder=
        {language === "Ar" ? "العدد المطلوب" : "Number of required quotations"}
        name="numberrequired" />
    </div>
  )
};

export function InputItems(props) {
  const { values } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <div className='inputform_items_row'>
        <div>
          {
            values.items.map((item, index) => (
              <div key={index} className='inputform_items' id={index}>
                {/*
                    <div className="inputform_item">
                      <label htmlFor={`items.${index}.item`}>
                        {language === "Ar" ? "العنصر" : "Item"}
                      </label>
                      <Field readOnly
                        name={`items.${index}.item`}
                        placeholder=
                        {language === "Ar" ? "العنصر" : "Item"}
                        value={item}
                        component="select"
                        className={"form-select"} >
                        <option value={item}>{item.item}</option>
                      </Field>
                    </div>
                     */}
                <div className="inputform_item">
                      <label>
                        {language === "Ar" ? "العنصر" : "Item"}
                      </label>
                  <Field readOnly
                    value={item.item.name}
                    type="text"
                    className={"form-control"} />
                </div>
                <div className="inputform_item">
                  <label>
                    {language === "Ar" ? "الكمية" : "Quantity"}
                  </label>
                  <Field readOnly
                    value={item.quantity}
                    type="text"
                    className={"form-control"} />
                </div>
              </div>
            ))}

        </div>
      </div>
    </div>
  )
};
export function Inputaddress(props) {
  const { errors, Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <h6>
        {language === "Ar" ? "العنوان" : "Address"}
      </h6>
      <label className="form-label">
        {language === "Ar" ? "مكان التسليم المطلوب" : " Required Delivery Location"}
      </label>
      <Field type="textarea" component="textarea" readOnly
        value={Data.values.address}
        className={errors.address ? "form-control is-invabuttond" : "form-control"}
        placeholder=
        {language === "Ar" ? "مكان التسليم المطلوب" : " Required Delivery Location"}
        name="address" />
    </div>
  )
};

export function Inputday(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const oldday = Data.values.day,
    ghingeday = new Date(oldday),
    newday = `${ghingeday.getFullYear()}/${ghingeday.getMonth() + 1}/${ghingeday.getDate()}`;

  return (
    <div className='inputform inputformday'>
      <label className="form-label">
        {language === "Ar" ? "تاريخ التسليم المطلوب / الموعد النهائي" : "Required Delivery Date/Deadline"}
      </label>
      <div className='day'>
        <Field type="text" component="input" readOnly
          value={newday}
          className={"data-input"} />

        <img src={IconCleander} alt="Icon Cleander" />

      </div>
    </div>
  )
};

export function Inputinsurance(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <label className="form-label">
        {language === "Ar" ? "التأمين" : "Insurance"}
      </label>
      <ul>

        <li className={'active'}>
          <label>
            <Field type="radio" name="inputinsurance" value={Data.values.inputinsurance} />
            {Data.values.inputinsurance === "yes" ? <>
              {language === "Ar" ? "موافق" : "Yes"}
            </>
              : <>
                {language === "Ar" ? "غير موافق" : "No"}
              </>}
          </label>
        </li>

      </ul>
    </div>
  )
};

export function Inputtransportation(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <label className="form-label">
        {language === "Ar" ? "النقل" : "Transportation"}
      </label>
      <ul>

        <li className={'active'}>
          <label>
            <Field type="radio" name="inputinsurance" value={Data.values.transportation} />
            {Data.values.transportation === "included" ? <>
              {language === "Ar" ? "يشمل النقل" : "Included"}
            </> :
              Data.values.transportation === "not_included" ? <>
                {language === "Ar" ? "لا يشمل النقل" : "Not Included"}
              </> : <>
                {language === "Ar" ? "نقل من خلالى" : "Self collection"}
              </>
            }
          </label>
        </li>
      </ul>
    </div>
  )
};

export function Inputnotes(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <label className="form-label">
        {language === "Ar" ? "الملاحظات" : "Notes"}
      </label>
      <Field type="textarea" component="textarea" readOnly
        className={"form-control"}
        value={Data.values.notes}
        placeholder=
        {language === "Ar" ? "أدخل الملاحظات هنا" : "Enter notes if you have"} name="notes" />
    </div>
  )
};

export function Fileslist(props) {
  const { Data } = props;
  return (
    <div className='fileslist'>
      {Data.values.fileslist.map((item, index) =>
      <div key={index}>
        <span  className="files" data-bs-toggle="modal" data-bs-target={`#modelgallaryimage${index}`}>
          <img src={IconPdf} alt={item} />
              <span className="text">{`file ${index + 1}`}</span>
        </span>
      <ModelGallaryImage Data={item} Id={index} />
        
      </div>
      )}
    </div>
  )
};


export function Supplierslist(props) {
  const { Data } = props;
  const objArr = [...Data.values.supplierslist];
  const RemoveItem = (id) => {
    let remainingArr = objArr.filter(data => data.id != id);
    objArr.push(remainingArr);
  }
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='supplierslist'>
      <h6>
        {language === "Ar" ? "قائمة الموردين" : "Suppliers list"}
      </h6>
      <div className="listitems">
        {objArr.map(item =>
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


      <div className='end'>
        <div>
          <button className='btn btn-download'>
            <img src={IconPdfDownload} alt="" className='pdf' />
            {language === "Ar" ? "تحميل الملفات" : "Download as pdf"}
          </button>
        </div>
      </div>

      <div className='inputform'>
        <Field type="checkbox" name="checkboxtoggle" disabled="disabled"
          checked={Data.values.checkboxtoggle === 1 ? true : false} />
        <label className="form-label formlabel-checkbox">
          {language === "Ar" ? "إرسال دعوات لجميع الموردين" : "Send invitations to all suppliers"}
        </label>
      </div>
    </div>
  )
};
