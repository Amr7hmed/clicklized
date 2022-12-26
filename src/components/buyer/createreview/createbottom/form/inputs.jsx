import { ErrorMessage, Field, FieldArray } from 'formik';
import React, { useContext } from 'react';
import IconPdf from "../../../../../images/icon/icon-pdf.png";
import IconProfile from "../../../../../images/icon/img-profile.jpg";
import { Authcontext } from '../../../../../store/context';
import ModelGallaryImagerequest from './modelimages';

export function Inputquotations(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <label className="form-label">
        {language === "Ar" ? "العدد المطلوب" : "Number of required quotations"}
      </label>
      <Field type="text" component="input"
        id="inputquotations"
        readOnly value={Data.numberrequired} className={"form-control"} name="numberrequired" />
    </div>
  )
};

export function InputItems(props) {
  const { Itemsresults } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div>
      {Itemsresults.map((item, index) => (
        <div className='row' key={index}>
          <div className="col-12 col-sm-6">

            <div className='inputform_item  mb-3'>
              <label className="form-label">
                {language === "Ar" ? "العنصر" : "Item"}
              </label>
              <Field type="text" component="input"
                readOnly value={item.item_id} className={"form-control"} />
            </div>
          </div>
          <div className="col-12 col-sm-6">

            <div className='inputform_item  mb-3'>
              <label className="form-label">
                {language === "Ar" ? "الكمية" : "Quantity"}
              </label>
              <Field type="text" component="input"
                readOnly value={item.quantity} className={"form-control"} />
            </div>
          </div>
        </div>
      ))}

    </div>
  )
};
export function Inputaddress(props) {
  const { Data } = props;
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
        value={Data} className={"form-control"} />
    </div>
  )
};
export function Inputday(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform inputformday'>
      <label className="form-label">
        {language === "Ar" ? "تاريخ التسليم المطلوب / الموعد النهائي" : "Required Delivery Date/Deadline"}
      </label>
      <Field readOnly value={Data} type="text" className={"form-control"} />
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
            <Field type="radio" name="inputinsurance" value={Data.inputinsurance} />
            {Data.inputinsurance === "yes" ? <>
              {language === "Ar" ? "موافق" : "Yes"}
            </> : <>
              {language === "Ar" ? "غير موافق" : "No"}
            </>
            }
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
            <Field type="radio" name="inputinsurance" value={Data.transportation} />
            {Data.transportation === "included" ?
              <>
                {language === "Ar" ? "يشمل النقل" : "Included"}
              </> :
              Data.transportation === "not-included" ?
                <>
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
        value={Data.notes}
        placeholder="Enter notes if you have" name="notes" />
    </div>
  )
};

export function Fileslist(props) {
  const { Imagesfiles } = props;
  return (<>
    {/*
    <div className='fileslist'>
      {Imagesfiles.map((item, index) =>
        <span key={index} className="files">
          <img src={URL.createObjectURL(item)} alt={item.name} />
          {item.name}
        </span>
      )}
    </div>
        */}

    <div className="imgagegallary">
      {Imagesfiles.map((item, index) =>
        <div className="img" key={index}>
          <img src={URL.createObjectURL(item)} alt={item.name} className={"img_gallary"}
            data-bs-toggle="modal" data-bs-target={`#modelgallaryimage${index}`} />
          <ModelGallaryImagerequest Data={item} Id={index} />
        </div>
      )}
    </div>
  </>
  )
};


export function Supplierslist(props) {
  const { SupplierslistItems, Arraydataone } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className='supplierslist'>
      <h6>
        {language === "Ar" ? "قائمة الموردين" : "Suppliers list"}
        </h6>
      <div className="listitems">
        {SupplierslistItems.length === 0 ? "" :
          <>

            <div className="listitems">
              {SupplierslistItems.map(item =>
                <span key={item.id} className="listitem">
                  <span>
                    <img src={item.image === undefined ? IconProfile : item.image}
                      alt={item} className="iconprofile" />
                    {item.company_name}
                  </span>

                </span>
              )}

            </div>
          </>
        }
      </div>

      <div className='inputform'>
        <Field type="checkbox" name="checkboxtoggle" disabled="disabled"
          checked={Arraydataone.checkboxtoggle} />
        <label className="form-label formlabel-checkbox">
        {language === "Ar" ? "إرسال دعوات لجميع الموردين" : "Send invitations to all suppliers"}
          </label>
      </div>
    </div>
  )
};
