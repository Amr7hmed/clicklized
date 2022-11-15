import React from 'react'
import CreateRequestBottom from './createbottom/index.jsx';
import CreateTop from './createtop/index.jsx'

function CreateOne(props) {
  const {Statedata,clickedLatLng, setClickedLatLng ,screnonedataone ,AddImagesfiles ,imagesfiles ,AddImageslogo,imageslogo}=props;
  return (
        <section className='create'>
        <CreateTop StyleScreen="createrequest_top"/>
        <CreateRequestBottom Statedata={Statedata} clickedLatLng={clickedLatLng}
         setClickedLatLng={setClickedLatLng} screnonedataone={screnonedataone} AddImagesfiles={AddImagesfiles}
         AddImageslogo={AddImageslogo} imageslogo={imageslogo}
         imagesfiles={imagesfiles}/>
    </section>
  )
}

export default CreateOne;