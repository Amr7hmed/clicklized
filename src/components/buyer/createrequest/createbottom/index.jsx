import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../store/context';
import Form from './form/form';

function CreateRequestBottom(props) {
  const {Statedata,clickedLatLng, setClickedLatLng ,screnonedataone ,AddImagesfiles 
    ,imagesfiles,AddImageslogo,imageslogo ,RemoveImagesfiles ,RemoveImageslogo
  ,address,setAddress ,showaddress}=props;

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className='createbottom'>
    <div className='screenone'>
        <div className="title">
            <h6>
              {language === "Ar" ? " " : "RFP"}
            </h6>
        </div>
        <Form Statedata={Statedata} clickedLatLng={clickedLatLng} address={address} setAddress={setAddress}
         setClickedLatLng={setClickedLatLng} screnonedataone={screnonedataone} AddImagesfiles={AddImagesfiles}
         AddImageslogo={AddImageslogo} imageslogo={imageslogo} RemoveImagesfiles={RemoveImagesfiles} 
         imagesfiles={imagesfiles} RemoveImageslogo={RemoveImageslogo} showaddress={showaddress}/>
    </div>
    </div>
  )
}

export default CreateRequestBottom;