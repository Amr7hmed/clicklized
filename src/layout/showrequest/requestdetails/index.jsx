import React, { useContext } from 'react';
import Form from './form.jsx';
import IconProfile from "../../../images/icon/img-profile.jpg";
import { Authcontext } from '../../../store/context.js';
import { useLocation, useNavigate } from 'react-router-dom';

function RequestDatatBottom(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  let navigate = useNavigate();

  let location = useLocation(),
    textlocation = location.pathname,
    resultseller = textlocation.includes("seller");

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
    company_name: Data.company_name,
  };

  const Showpageoffer = (id) => {
    navigate(`/offerrequest/${id}`);
  }
  return (
    <div className='showrequestbottom'>
      <div className='screenone'>
        {resultseller === true ?

          <div className="showrequestbottom__top">
            <h5>
              {language === "Ar" ? " تفاصيل الطلب" : "Request details"}
            </h5>
            <button className='btn btn__sendoffer' type='button'
              onClick={() => Showpageoffer(Data.id)}>
              {language === "Ar" ? "إرسال العرض" : "Send offer"}
            </button>
          </div>

          :
          <>
            <div className="screenone__img">
              <img src={Data.logo} alt="Image compony" />
            </div>
            <div className="title">
              <h6>
                {language === "Ar" ? "" : "RFP"}
              </h6>
            </div>
          </>
        }
        <Form state={state} />
      </div>
    </div>
  )
}

export default RequestDatatBottom;