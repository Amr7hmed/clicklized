import React from 'react'
import Create from '../../../components/buyer/createrequest';
import Navbar from '../../../layout/navbar';

function CreateRequest() {
  return (
    <section className='createrequest'>
        <Navbar/>
        <Create/>
    </section>
  )
}

export default CreateRequest;