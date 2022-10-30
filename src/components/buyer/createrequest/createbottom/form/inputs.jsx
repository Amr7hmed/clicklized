import { ErrorMessage, Field, FieldArray } from 'formik';
import React from 'react';
import IconLoction from '../../../../../images/icon/location-icon.svg';
import UploadImage from "../../../../../images/icon/upload.png";
import DatePickerdata from './datepicker';

export function Inputquotations(props) {
  const { errors } = props;
  return (
    <div className='inputform'>
      <label className="form-label">Number of required quotations</label>
      <Field type="text" component="input"
      id="inputquotations"
        className={errors.numberrequired ? "form-control is-invabuttond" : "form-control"}
        placeholder="Enter Number of required quotations" name="numberrequired" />


      <ErrorMessage name="numberrequired" component="span" className='errorfiled' />
    </div>
  )
};


export function InputItems(props) {
  const { values, errors } = props;
  return (
    <div className='inputform'>
      <FieldArray name="items">
        {({ insert, remove, push }) => (
          <div className='inputform_items_row'>
            <div>
              {
                values.items.map((item, index) => (
                  <div key={index} className='inputform_items' id={index}>
                    <div className="inputform_item">
                      <label htmlFor={`items.${index}.item`}>Item</label>
                      <Field
                        name={`items.${index}.item`}
                        placeholder="Jane Doe"
                        component="select"
                        className={"form-select"} >
                        <option></option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                      </Field>
                    </div>
                    <div className="inputform_item">
                      <label htmlFor={`items.${index}.quantity`}>Quantity</label>
                      <Field
                        name={`items.${index}.quantity`}
                        placeholder="Enter Quantity"
                        type="text"
                        className={"form-control"} />
                    </div>
                    <div
                      className={"inputform_close"}>
                      <button
                        type="button"
                        className={values.items.length === 1 ?"btn btn-remove hide":"btn btn-remove"}
                        onClick={() => remove(index)}
                      >
                        Remove Item
                      </button>
                    </div>
                    <button
                    id={values.items[index].item === "" || 
                    values.items[index].quantity === "" ? "button-disabled" :"button-active"}
                    className={values.items.length === index+1 ?"btn btn-add":"btn btn-add hide"}
                      type="button"
                      onClick={() => push({ item: '', quantity: '' })}
                    >
                      Add Item
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
  const { errors } = props;
  return (
    <div className='inputform'>
      <h6>Address</h6>
      <label className="form-label">Required Debuttonvery Location</label>
      <Field type="textarea" component="textarea"
        className={errors.address ? "form-control is-invabuttond" : "form-control"}
        placeholder="Enter Required Debuttonvery Location" name="address" />
      <button type='button' className='btn addloction'
       data-bs-toggle="modal" data-bs-target="#modalmap">
        <img src={IconLoction} alt="" />
        Choose location on map
      </button>

      <ErrorMessage name="address" component="span" className='errorfiled' />
    </div>
  )
};

export function Inputday(props) {
  const { data } = props;
  return (
    <div className='inputform inputformday'>
      <label className="form-label">Required Debuttonvery Date/Deadbuttonne</label>
      <DatePickerdata Data={data} />
      <ErrorMessage name="day" component="span" className='errorfiled' />
    </div>
  )
};

export function Inputinsurance(props) {
  const { Data } = props;
  return (
    <div className='inputform'>
      <label className="form-label">Insurance (optional)</label>
      <ul>
        <li
          className={Data.values.inputinsurance === "yes" ? 'active' : ""}>
          <label>
            <Field type="radio" name="inputinsurance" value="yes" />
            Yes
          </label>
        </li>
        <li
          className={Data.values.inputinsurance === "no" ? 'active' : ""}>
          <label>
            <Field type="radio" name="inputinsurance" value="no" />
            No
          </label>
        </li>
        <li
          className={Data.values.inputinsurance === "not_appbuttoncable" ? 'active' : ""}>
          <label>
            <Field type="radio" name="inputinsurance" value="not_appbuttoncable" />
            Not appbuttoncable
          </label>
        </li>
      </ul>
    </div>
  )
};

export function Inputtransportation(props) {
  const { Data } = props;
  return (
    <div className='inputform'>
      <label className="form-label">Transportation</label>
      <ul>
        <li
          className={Data.values.transportation === "included" ? 'active' : ""}>
          <label>
            <Field type="radio" name="transportation" value="included" />
            Included
          </label>
        </li>
        <li
          className={Data.values.transportation === "not-included" ? 'active' : ""}>
          <label>
            <Field type="radio" name="transportation" value="not-included" />
            Not Included
          </label>
        </li>
        <li
          className={Data.values.transportation === "self-collection" ? 'active' : ""}>
          <label>
            <Field type="radio" name="transportation" value="self-collection" />
            Self collection
          </label>
        </li>
      </ul>
    </div>
  )
};

export function Inputnotes() {
  return (
    <div className='inputform'>
      <label className="form-label">Notes</label>
      <Field type="textarea" component="textarea"
        className={"form-control"}
        placeholder="Enter notes if you have" name="notes" />
    </div>
  )
};

export function InputFiles() {
  return (
    <div className='inputform inputfiles'>
      <div>
        <span className='item'>

          <span className='btn-upload'>
            <Field type="file" className="input-file"
              name="files"  accept="application/pdf" multiple/>
            <img src={UploadImage} alt="" />
            Upload files
          </span>
          <br />
          <ErrorMessage name="files" component="span" className='errorfiled' />
        </span>

        <span className='item'>

          <span className='btn-upload'>
            <Field type="file" className="input-file" accept="image/*" name="logo" />
            <img src={UploadImage} alt="" />
            Upload logo
          </span>
          <br />
          <ErrorMessage name="logo" component="span" className='errorfiled' />
        </span>

      </div>
    </div>
  )
};