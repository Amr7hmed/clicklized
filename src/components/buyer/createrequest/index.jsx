import React from 'react'
import CreateRequestBottom from './createbottom/index.jsx';
import CreateTop from './createtop/index.jsx'

function CreateOne(props) {
  const {Statedata,clickedLatLng, setClickedLatLng ,screnonedataone ,AddImagesfiles ,imagesfiles ,
    AddImageslogo,imageslogo ,RemoveImagesfiles,RemoveImageslogo,
   address,setAddress ,showaddress ,setParamsname}=props;

  return (
        <section className='create'>
        <CreateTop StyleScreen="createrequest_top" setParamsname={setParamsname}/>
        <CreateRequestBottom Statedata={Statedata} clickedLatLng={clickedLatLng}
         setClickedLatLng={setClickedLatLng} screnonedataone={screnonedataone} AddImagesfiles={AddImagesfiles}
         AddImageslogo={AddImageslogo} imageslogo={imageslogo} address={address} setAddress={setAddress}
         imagesfiles={imagesfiles} RemoveImagesfiles={RemoveImagesfiles} RemoveImageslogo={RemoveImageslogo}
         showaddress={showaddress}/>
    </section>
  )
}

export default CreateOne;