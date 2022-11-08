import React from 'react';
import Form from './form/form';

function CreateRequestBottom(props) {
  const {Statedata,clickedLatLng, setClickedLatLng}=props;
  return (
    <div className='createbottom'>
    <div className='screenone'>
        <div className="title">
            <h6>RFP</h6>
        </div>
        <Form Statedata={Statedata} clickedLatLng={clickedLatLng}
         setClickedLatLng={setClickedLatLng}/>
    </div>
    </div>
  )
}

export default CreateRequestBottom;