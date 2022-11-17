import { ErrorMessage, Field, FieldArray } from 'formik';
import React, { useEffect, useState } from 'react';
import IconLoction from '../../../../../images/icon/location-icon.svg';
import UploadImage from "../../../../../images/icon/upload.png";
import DatePickerdata from './datepicker';
import AddItemIcon from '../../../../../images/icon/icon-add.png';
import { GetDataIndustries } from '../../../../../api/buyer/actionsprofile';

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
                      <label htmlFor={`items.${index}.item_id`}>Item</label>
                      <Field
                        name={`items.${index}.item_id`}
                        placeholder="Jane Doe"
                        component="select"
                        className={"form-select"} >
                        <option>Choose Item</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
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
                        className={values.items.length === 1 ? "btn btn-remove hide" : "btn btn-remove"}
                        onClick={() => remove(index)}
                      >
                        Remove Item
                      </button>
                    </div>
                    <button
                      id={values.items[index].item_id === "" ||
                        values.items[index].quantity === "" ? "button-disabled" : "button-active"}
                      className={values.items.length === index + 1 ? "btn btn-add" : "btn btn-add hide"}
                      type="button"
                      onClick={() => push({ item_id: '', quantity: '' })}
                    >
                      <img src={AddItemIcon} alt="Add Item Icon" />
                      Add new item
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
      <label className="form-label">Required Delivery Location</label>
      <Field type="textarea" component="textarea"
        className={errors.address ? "form-control is-invabuttond" : "form-control"}
        placeholder="Enter Required Delivery Location" name="address" />
      <button type='button' className='btn addloction'
        data-bs-toggle="modal" data-bs-target="#modalmap">
        <img src={IconLoction} alt="" />
        Choose location on map
      </button>

      <ErrorMessage name="address" component="span" className='errorfiled' />
    </div>
  )
};

export function InputIndustry(props) {
  const [dataindustries, setDataIndustries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetDataIndustries(setLoading, setDataIndustries);
  }, [loading]);

  const { errors } = props;
  return (
    <div className='inputform'>
      <label className="form-label">Company Industry</label>

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
  return (
    <div className='inputform inputformday'>
      <label className="form-label">Required Delivery Date/Deadline</label>
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
          className={Data.values.inputinsurance === "not_applicable" ? 'active' : ""}>
          <label>
            <Field type="radio" name="inputinsurance" value="not_applicable" />
            Not applicable
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
          className={Data.values.transportation === "not_included" ? 'active' : ""}>
          <label>
            <Field type="radio" name="transportation" value="not_included" />
            Not Included
          </label>
        </li>
        <li
          className={Data.values.transportation === "self_collection" ? 'active' : ""}>
          <label>
            <Field type="radio" name="transportation" value="self_collection" />
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

export function InputFiles(props) {
  const { AddImagesfiles, imagesfiles, AddImageslogo, imageslogo } = props;
  return (
    <div className='inputform inputfiles'>
      <div>
        <span className='item'>

          <span className='btn-upload'>
            <Field type="file" className="input-file"
              name="files" multiple
              onChange={e => {
                AddImagesfiles(e)
              }}
            />
            <img src={UploadImage} alt="" />
            Upload files
          </span>
          <br />
          {imagesfiles.length === 0 ?
            <span className="errorfiled">Files Is Required</span>
            : ""}
        </span>

        <span className='item'>

          <span className='btn-upload'>
            <Field type="file" className="input-file" accept="image/*" name="logo"
              onChange={e => {
                AddImageslogo(e)
              }} />
            <img src={UploadImage} alt="" />
            Upload logo
          </span>
          <br />
          {imageslogo === null ?
            <span className="errorfiled">Logo Is Required</span>
            : ""}
        </span>

      </div>
    </div>
  )
};