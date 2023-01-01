import { ErrorMessage, Field, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import IconLoction from '../../../../../images/icon/location-icon.svg';
import UploadImage from "../../../../../images/icon/upload.png";
import DatePickerdata from './datepicker';
import AddItemIcon from '../../../../../images/icon/icon-add.png';

import ModelGallaryImagerequest from '../../../createreview/createbottom/form/modelimages';
import Deletimage from "../../../../../images/icon/delet-image.svg";
import { Authcontext } from '../../../../../store/context';
import { useContext } from 'react';
import IconPdf from "../../../../../images/icon/icon-pdf.png";
import { GetDataIndustries } from '../../../../../api/profile';

export function Inputquotations(props) {

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const { errors } = props;
  return (
    <div className='inputform'>
      <label className="form-label">
        {language === "Ar" ? "العدد المطلوب" : "Number of required quotations"}
      </label>
      <Field type="text" component="input"
        id="inputquotations"
        className={errors.numberrequired ? "form-control is-invabuttond" : "form-control"}
        placeholder=
        {language === "Ar" ? "العدد المطلوب" : "Number of required quotations"}
        name="numberrequired" />


      <ErrorMessage name="numberrequired" component="span" className='errorfiled' />
    </div>
  )
};

export function InputItems(props) {
  const { values, errors } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <FieldArray name="items">
        {({ insert, remove, unshift }) => (
          <div className='inputform_items_row'>
            <div>
              {
                values.items.map((item, index) => (
                  <div key={index} className='inputform_items' id={index}>
                    <div className="inputform_item">
                      <label htmlFor={`items.${index}.item_id`}>
                        {language === "Ar" ? "العنصر" : "Item"}
                      </label>
                      <Field
                        name={`items.${index}.item_id`}
                        placeholder="Jane Doe"
                        component="select"
                        className={"form-select"} >
                        <option>
                          {language === "Ar" ? "أختيار عنصر" : "Choose Item"}
                        </option>
                        <option value="1">Item One</option>
                        <option value="2">Item Two</option>
                      </Field>
                    </div>
                    <div className="inputform_item">
                      <label htmlFor={`items.${index}.quantity`}>
                        {language === "Ar" ? "الكمية" : "Quantity"}
                      </label>
                      <Field
                        name={`items.${index}.quantity`}
                        maxLength={4}
                        placeholder=
                        {language === "Ar" ? "أدخال الكمية" : "Enter Quantity"}
                        type={"text"}
                        //type={values.items[index].quantity === "" ?"number":"text"}
                        className={"form-control"}
                        disabled={values.items[index].item_id === "" ? "disabled" : ""}
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        onKeyUp={(e) => {
                          if (e.key === "Enter") {
                            if (values.items[index].quantity === "") {
                              return false;
                            } else {
                              unshift({ item_id: '', quantity: '' })
                            }
                          }
                        }
                        }
                      />

                    </div>
                    <div
                      className={"inputform_close"}>
                      <button
                        type="button"
                        className={index === 0 ? "btn btn-remove hide" : "btn btn-remove"}
                        onClick={() => remove(index)}
                      >
                        {language === "Ar" ? "مسح" : "Remove Item"}
                      </button>
                    </div>

                    <button
                      id={values.items[index].item_id === "" ||
                        values.items[index].quantity === "" ? "button-disabled" : "button-active"}
                      className={index === 0 ? "btn btn-add" : "btn btn-add hide"}
                      type="button"
                      onClick={() => unshift({ item_id: '', quantity: '' })}
                    >
                      <img src={AddItemIcon} alt="Add Item Icon" />

                      {language === "Ar" ? "أضافه عنصر جديد" : "Add new item"}
                    </button>

                  </div>
                ))}

            </div>
          </div>
        )}

      </FieldArray>
      <ErrorMessage
        component="div"
        className="errorfiled" errors={errors} name="items" />
    </div>
  )
};

export function Inputaddress(props) {
  const { errors, address, setAddress } = props;
  const authcontext = useContext(Authcontext);
  const setAddressrequest = authcontext.setAddressrequest;
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <h6>
        {language === "Ar" ? "العنوان" : "Address"}
      </h6>
      <label className="form-label">
        {language === "Ar" ? "مكان التسليم المطلوب" : " Required Delivery Location"}
      </label>
      <Field type="textarea" component="textarea"
        className={errors.address ? "form-control is-invabuttond" : "form-control"}
        placeholder=
        {language === "Ar" ? "تسجيل مكان التسليم المطلوب" : "Enter Required Delivery Location"}
        name="address" value={address}
        onChange={(e) => {
          setAddress(e.target.value)
          setAddressrequest(e.target.value)
        }
        } />
      <button type='button' className='btn addloction'
        data-bs-toggle="modal" data-bs-target="#modalmap">
        <img src={IconLoction} alt="" />
        {language === "Ar" ? "اختر الموقع على الخريطة" : "Choose location on map"}
      </button>

    </div>
  )
};

export function InputIndustry(props) {
  const [dataindustries, setDataIndustries] = useState([]);
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  useEffect(() => {
    GetDataIndustries(setLoading, setDataIndustries);
  }, [loading]);

  const { errors } = props;
  return (
    <div className='inputform'>
      <label className="form-label">
        {language === "Ar" ? "قطاع الشركة" : "Company Industry"}
      </label>

      <Field name="industry" component="select"
        className={errors.industry ? "form-select is-invalid" : "form-select"}  >
        <option></option>
        {dataindustries.map(item =>
          <option value={item.id} key={item.id}>{item.name}</option>
        )}
      </Field>

      <ErrorMessage name="industry" component="span" className='errorfiled' />

    </div>
  )
};
export function Inputday(props) {
  const { data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform inputformday'>
      <label className="form-label">
        {language === "Ar" ? "تاريخ التسليم المطلوب / الموعد النهائي" : "Required Delivery Date/Deadline"}
      </label>
      <DatePickerdata Data={data} />
      <ErrorMessage name="day" component="span" className='errorfiled' />
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
        <li
          className={Data.values.inputinsurance === "yes" ? 'active' : ""}>
          <label>
            <Field type="radio" name="inputinsurance" value="yes" />
            {language === "Ar" ? "موافق" : "Yes"}
          </label>
        </li>
        <li
          className={Data.values.inputinsurance === "no" ? 'active' : ""}>
          <label>
            <Field type="radio" name="inputinsurance" value="no" />
            {language === "Ar" ? "غير موافق" : "No"}

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
        <li
          className={Data.values.transportation === "included" ? 'active' : ""}>
          <label>
            <Field type="radio" name="transportation" value="included" />
            {language === "Ar" ? "يشمل النقل" : "Included"}
          </label>
        </li>
        <li
          className={Data.values.transportation === "not_included" ? 'active' : ""}>
          <label>
            <Field type="radio" name="transportation" value="not_included" />
            {language === "Ar" ? "لا يشمل النقل" : "Not Included"}
          </label>
        </li>
        <li
          className={Data.values.transportation === "self_collection" ? 'active' : ""}>
          <label>
            <Field type="radio" name="transportation" value="self_collection" />
            {language === "Ar" ? "نقل من خلالى" : "Self collection"}
          </label>
        </li>
      </ul>
    </div>
  )
};

export function Inputnotes() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='inputform'>
      <label className="form-label">
        {language === "Ar" ? "الملاحظات" : "Notes"}
      </label>
      <Field type="textarea" component="textarea"
        className={"form-control"}
        placeholder=
        {language === "Ar" ? "أدخل الملاحظات هنا" : "Enter notes if you have"}
        name="notes" />
    </div>
  )
};

export function InputFiles(props) {
  const { AddImagesfiles, imagesfiles, AddImageslogo, imageslogo, RemoveImagesfiles, RemoveImageslogo } = props;
  const authcontext = useContext(Authcontext);
  const imagesfilesrequest = authcontext.imagesfilesrequest;
  const language = authcontext.language;
  return (
    <div className='inputform inputfiles'>
      <div>
        <span className='item'>

          <span className='btn-upload'>
            <Field type="file" className="input-file" name="files" multiple accept="application/pdf"
              onChange={e => { AddImagesfiles(e) }} />
            {language === "Ar" ?
              <>
                <img src={UploadImage} alt="" />
                تحميل الملفات
              </> :
              <>
                <img src={UploadImage} alt="" />
                Upload files
              </>
            }
          </span>
        </span>

        <span className='item'>

          <span className='btn-upload'>
            <Field type="file" className="input-file" accept="image/*" name="logo"
              onChange={e => { AddImageslogo(e) }} />
            {language === "Ar" ?
              <>
                <img src={UploadImage} alt="" />
                تحميل الشعار
              </> :
              <>
                <img src={UploadImage} alt="" />
                Upload logo
              </>
            }
          </span>
        </span>
      </div>

      <div>
        {imagesfiles.length === 0 ?
          <span className="errorfiled">
          {language === "Ar" ? "الملفات مطلوبة" : "Files Is Required"}
          </span>
          :
          <span className="imgagegallarypdf">

            {imagesfilesrequest.map((item, index) =>
            <div key={index}>
              <div className="img">
                <button className='btn btn-deletimage' type='button'
                  onClick={() => RemoveImagesfiles(item)}><img src={Deletimage} />
                </button>
                <div>
                  <img src={IconPdf} alt={item.id} className={"img_gallary"} />
                   <span className="text">{`file ${index + 1}`}</span>
                </div>
              </div>
            </div>
            )}

          </span>
        }



        {imageslogo === null ?
          <span className="errorfiled">
          {language === "Ar" ? "الشعار مطلوب" : "Logo Is Required"}
          </span>
          :
          <span className="imgagegallary">

            <div className="img">
              <button className='btn btn-deletimage' type='button'
                onClick={() => RemoveImageslogo()}><img src={Deletimage} /></button>

              <img src={URL.createObjectURL(imageslogo)} className={"img_gallary"}
                data-bs-toggle="modal" data-bs-target={`#modelgallaryimage${imageslogo.size}`} />
              <ModelGallaryImagerequest Data={imageslogo} Id={imageslogo.size} />
            </div>
          </span>
        }
      </div>
    </div>
  )
};