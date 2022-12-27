import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../../store/context';

function RequestDatatBottom(props) {
  const { request, id } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  let navigate = useNavigate();


  const Showpageoffer = (id) => {
    navigate(`/offerrequest/${id}`);
  }
  return (
    <div className='requestdetailsbottom'>
      <div className='screenone'>
        <div className="requestdetailsbottom__top">
          <h5>
            {language === "Ar" ? " تفاصيل الطلب" : "Request details"}
          </h5>
          <button className='btn btn__sendoffer' type='button'
            onClick={() => Showpageoffer(id)}>
            {language === "Ar" ? "إرسال العرض" : "Send offer"}
          </button>
        </div>

        <div className="requestdetailsbottom__data">
          <h6>
            {language === "Ar" ? "المعلومات أساسية" : "Basic info"}
          </h6>

          <ul className="list">
            <li>
              <span className="left">
                {language === "Ar" ? "نوع الطلب" : "Request type"}
              </span>
              <span className="right">
                {language === "Ar" ? "تاريخ أخر عرض" :
                  "Last time to recieve offers"}
              </span>
            </li>
            <li>
              <span className="left">{request.type}</span>
              <span className="right">{request.day}</span>
            </li>
          </ul>
          <div className="about">
            <h6>
              {language === "Ar" ? "مزيد من المعلومات حول الطلب" :
                "More info about request"}
            </h6>
            <p>{request.about}</p>
            <button type='button' className='btn btn-files'>
              <img src={request.files[0].image} alt="" />
              <span>{request.files[0].name}</span>
            </button>
          </div>

          <div className="address">
            <h5>
              {language === "Ar" ? "العنوان" : "Address"}
            </h5>
            <div>
              <h6>
                {language === "Ar" ? "تفاصيل العنوان" : "Address details"}
              </h6>
              <p>{request.address}</p>
            </div>
            <ul className="conditions">
              <span>
                {language === "Ar" ? "شروط الطلب" : " Request conditions"}

              </span>
              {request.conditions.map((item, index) =>
                <li key={index}>{item}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestDatatBottom;