import React, { useContext } from 'react';
import Form from './form.jsx';
import Imagecompony from "../../../../images/profile/image-two.jpg";
import { Authcontext } from '../../../../store/context.js';

function RequestDatatBottom(props) {
  const {state}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  
  return (
    <div className='showrequestbottom'>
    <div className='screenone'>
      <div className="screenone__img">
        <img src={Imagecompony} alt="Image compony" />
      </div>
        <div className="title">
            <h6>
                {language === "Ar" ? "" : "RFP"}
              </h6>
        </div>
        <Form state={state}/>
    </div>
    </div>
  )
}

export default RequestDatatBottom;