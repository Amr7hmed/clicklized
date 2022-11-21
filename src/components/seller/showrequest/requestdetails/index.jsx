import React from 'react';
import Form from './form.jsx';
import Imagecompony from "../../../../images/profile/image-two.jpg";

function RequestDatatBottom(props) {
  const {state}=props;
  
  return (
    <div className='showrequestbottom'>
    <div className='screenone'>
      <div className="screenone__img">
        <img src={Imagecompony} alt="Image compony" />
      </div>
        <div className="title">
            <h6>RFP</h6>
        </div>
        <Form state={state}/>
    </div>
    </div>
  )
}

export default RequestDatatBottom;