import React from 'react';
import Form from './form/form.jsx';

function CreateReviewBottom(props) {
  const {Arraydataone,Arraydatatwo}=props;
  return (
    <div className='createreview'>
    <div className='screenone'>
        <div className="title">
            <h6>RFP</h6>
        </div>
        <Form Arraydataone={Arraydataone} Arraydatatwo={Arraydatatwo}/>
    </div>
    </div>
  )
}

export default CreateReviewBottom;