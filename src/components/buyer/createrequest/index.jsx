import React from 'react'
import CreateRequestBottom from './createbottom/index.jsx';
import CreateTop from './createtop/index.jsx'

function CreateOne(props) {
  const {Statedata,clickedLatLng, setClickedLatLng}=props;
  return (
        <section className='create'>
        <CreateTop StyleScreen="createrequest_top"/>
        <CreateRequestBottom Statedata={Statedata} clickedLatLng={clickedLatLng}
         setClickedLatLng={setClickedLatLng}/>
    </section>
  )
}

export default CreateOne;