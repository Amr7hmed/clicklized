import React from 'react';
import Form from './form/form';

function CreateRequestBottom(props) {
  const {Statedata,clickedLatLng, setClickedLatLng ,screnonedataone ,AddImagesfiles 
    ,imagesfiles,AddImageslogo,imageslogo ,RemoveImagesfiles ,RemoveImageslogo}=props;
  return (
    <div className='createbottom'>
    <div className='screenone'>
        <div className="title">
            <h6>RFP</h6>
        </div>
        <Form Statedata={Statedata} clickedLatLng={clickedLatLng}
         setClickedLatLng={setClickedLatLng} screnonedataone={screnonedataone} AddImagesfiles={AddImagesfiles}
         AddImageslogo={AddImageslogo} imageslogo={imageslogo} RemoveImagesfiles={RemoveImagesfiles} 
         imagesfiles={imagesfiles} RemoveImageslogo={RemoveImageslogo}/>
    </div>
    </div>
  )
}

export default CreateRequestBottom;