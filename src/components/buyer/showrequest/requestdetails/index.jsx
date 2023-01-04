import React, { useContext } from 'react';
import Form from './form.jsx';
import Imagecompony from "../../../../images/profile/image-two.jpg";
import { Authcontext } from '../../../../store/context.js';
import IconProfile from "../../../../images/icon/img-profile.jpg";
import { useState } from 'react';

function RequestDatatBottom(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  console.log(Data);
  const state = {
    numberrequired: Data.order_num,
    items: Data.items,
    address: Data.address,
    day: Data.delivery_date,
    inputinsurance: Data.has_insurance,
    transportation: Data.transportation,
    notes: Data.notes,
    fileslist: Data.files,
    supplierslist: [
      {
        id: 1,
        img: IconProfile,
        name: "Supplier name"
      }, {
        id: 2,
        img: IconProfile,
        name: "Supplier name"
      }
    ],
    checkboxtoggle: Data.send_all,
  };
  return (
    <div className='showrequestbottom'>
      <div className='screenone'>
        <div className="screenone__img">
          <img src={Data.logo} alt="Image compony" />
        </div>
        <div className="title">
          <h6>
            {language === "Ar" ? "" : "RFP"}
          </h6>
        </div>
        <Form state={state} />
      </div>
    </div>
  )
}

export default RequestDatatBottom;