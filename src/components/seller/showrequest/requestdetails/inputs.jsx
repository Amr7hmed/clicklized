import { ErrorMessage, Field, FieldArray } from 'formik';
import React from 'react';
import IconPdf from "../../../../images/icon/icon-pdf.png";
import IconClose from "../../../../images/icon/ic-close.svg";
import IconProfile from "../../../../images/icon/img-profile.jpg";
import IconCleander from "../../../../images/icon/calendar-icon.png";
import IconPdfDownload from "../../../../images/icon/icon-short-pdf.png";

export function Inputquotations(props) {
  const { errors, Data } = props;
  return (
    <div className='inputform'>
      <label className="form-label">Number of required quotations</label>
      <Field type="text" component="input" readOnly
        id="inputquotations"
        value={Data.values.numberrequired}
        className={errors.numberrequired ? "form-control is-invabuttond" : "form-control"}
        placeholder="Enter Number of required quotations" name="numberrequired" />
    </div>
  )
};

export function InputItems(props) {
  const { values } = props;
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
                      <Field readOnly
                        name={`items.${index}.item`}
                        placeholder="Jane Doe"
                        value={item}
                        component="select"
                        className={"form-select"} >
                        <option value={item}>{item.item}</option>
                      </Field>
                    </div>
                    <div className="inputform_item">
                      <label htmlFor={`items.${index}.quantity`}>Quantity</label>
                      <Field readOnly
                        name={`items.${index}.quantity`}
                        placeholder="Enter Quantity"
                        type="text"
                        className={"form-control"} />
                    </div>
                  </div>
                ))}

            </div>
          </div>
        )}

      </FieldArray>
    </div>
  )
};
export function Inputaddress(props) {
  const { errors, Data } = props;
  return (
    <div className='inputform'>
      <h6>Address</h6>
      <label className="form-label">Required Delivery Location</label>
      <Field type="textarea" component="textarea" readOnly
        value={Data.values.address}
        className={errors.address ? "form-control is-invabuttond" : "form-control"}
        placeholder="Enter Required Delivery Location" name="address" />
    </div>
  )
};

export function Inputday(props) {
  const { Data } = props;
  return (
    <div className='inputform inputformday'>
      <label className="form-label">Required Delivery Date/Deadline</label>
      <div className='day'>
      <Field type="text" component="input" readOnly
        value={Data.values.day}
        className={"data-input"}/>
        
      <img src={IconCleander} alt="Icon Cleander" />
         
        </div>
    </div>
  )
};

export function Inputinsurance(props) {
  const { Data } = props;
  return (
    <div className='inputform'>
      <label className="form-label">Insurance (optional)</label>
      <ul>

        <li className={'active'}>
          <label>
            <Field type="radio" name="inputinsurance" value={Data.values.inputinsurance} />
            {Data.values.inputinsurance === "yes" ?
              "Yes" : Data.values.inputinsurance === "not_appbuttoncable" ? "Not appbuttoncable" :
                "No"
            }
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

        <li className={'active'}>
          <label>
            <Field type="radio" name="inputinsurance" value={Data.values.transportation} />
            {Data.values.transportation === "included" ?
              "Included" :
              Data.values.transportation === "not-included" ?
                "Not Included" :
                "Self collection"
            }
          </label>
        </li>
      </ul>
    </div>
  )
};

export function Inputnotes(props) {
  const { Data } = props;
  return (
    <div className='inputform'>
      <label className="form-label">Notes</label>
      <Field type="textarea" component="textarea" readOnly
        className={"form-control"}
        value={Data.values.notes}
        placeholder="Enter notes if you have" name="notes" />
    </div>
  )
};

export function Fileslist(props) {
  const { Data } = props;
  return (
    <div className='fileslist'>
      {Data.values.fileslist.map((item, index) =>
        <span key={index} className="files">
          <img src={IconPdf} alt={item} />
          {item}
        </span>
      )}
    </div>
  )
};


export function Supplierslist(props) {
  const { Data } = props;
  const objArr = [...Data.values.supplierslist];
  const RemoveItem = (id) => {
    console.log(id);
    let remainingArr = objArr.filter(data => data.id != id);
    console.log(remainingArr);
    objArr.push(remainingArr);
  }
  return (
    <div className='supplierslist'>
      <h6>Suppliers list</h6>
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
                  Download as pdf</button>
                </div>
            </div>

    <div className='inputform'>
          <Field type="checkbox" name="checkboxtoggle" disabled="disabled"
          checked={Data.values.checkboxtoggle} />
            <label className="form-label formlabel-checkbox">
              Send invitations to all suppliers</label>
    </div>
    </div>
  )
};
