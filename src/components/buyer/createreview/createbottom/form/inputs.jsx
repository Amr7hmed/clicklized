import { ErrorMessage, Field, FieldArray } from 'formik';
import React from 'react';
import IconPdf from "../../../../../images/icon/icon-pdf.png";
import IconProfile from "../../../../../images/icon/img-profile.jpg";
import ModelGallaryImagerequest from './modelimages';

export function Inputquotations(props) {
  const { Data } = props;
  return (
    <div className='inputform'>
      <label className="form-label">Number of required quotations</label>
      <Field type="text" component="input"
        id="inputquotations"
        readOnly value={Data.numberrequired} className={"form-control"} name="numberrequired" />
    </div>
  )
};

export function InputItems(props) {
  const { Itemsresults } = props;
  return (
    <div>
      {Itemsresults.map((item, index) => (
        <div className='row' key={index}>
          <div className="col-12 col-sm-6">

            <div className='inputform_item  mb-3'>
              <label className="form-label">Item</label>
              <Field type="text" component="input"
                readOnly value={item.item_id} className={"form-control"} />
            </div>
          </div>
          <div className="col-12 col-sm-6">

            <div className='inputform_item  mb-3'>
              <label className="form-label">Quantity</label>
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
  return (
    <div className='inputform'>
      <h6>Address</h6>
      <label className="form-label">Required Delivery Location</label>
      <Field type="textarea" component="textarea" readOnly
        value={Data} className={"form-control"} />
    </div>
  )
};

export function Inputday(props) {
  const { Data } = props;
  return (
    <div className='inputform inputformday'>
      <label className="form-label">Required Delivery Date/Deadline</label>
      <Field readOnly value={Data} type="text" className={"form-control"} />
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
            <Field type="radio" name="inputinsurance" value={Data.inputinsurance} />
            {Data.inputinsurance === "yes" ?
              "Yes" : Data.inputinsurance === "not_appcable" ? "Not applicable" :
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
            <Field type="radio" name="inputinsurance" value={Data.transportation} />
            {Data.transportation === "included" ?
              "Included" :
              Data.transportation === "not-included" ?
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
      {Imagesfiles.map((item,index) =>
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

  return (
    <div className='supplierslist'>
      <h6>Suppliers list</h6>
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
          Send invitations to all suppliers</label>
      </div>
    </div>
  )
};
