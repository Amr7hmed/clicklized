import React from 'react';

function RequestDatatBottom(props) {
  const { request } = props;

  return (
    <div className='requestdetailsbottom'>
      <div className='screenone'>
        <div className="requestdetailsbottom__top">
          <h5>Request details</h5>
          <button className='btn btn__sendoffer'>
            Send offer
          </button>
        </div>

        <div className="requestdetailsbottom__data">
          <h6>Basic info</h6>

          <ul className="list">
            <li>
              <span className="left">Request type</span>
              <span className="right">Last time to recieve offers</span>
            </li>
            <li>
              <span className="left">{request.type}</span>
              <span className="right">{request.day}</span>
            </li>
          </ul>
          <div className="about">
            <h6>More info about request</h6>
            <p>{request.about}</p>
            <button type='button' className='btn btn-files'>
              <img src={request.files[0].image} alt="" />
              <span>{request.files[0].name}</span>
            </button>
          </div>

          <div className="address">
            <h5>Address</h5>
            <div>
              <h6>Address details</h6>
              <p>{request.address}</p>
            </div>
            <ul className="conditions">
              <span>Request conditions</span>
              {request.conditions.map((item,index)=>
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