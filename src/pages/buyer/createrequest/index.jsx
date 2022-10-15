import React from 'react'
import Create from '../../../components/buyer/createrequest';
import Navbar from '../../../layout/navbar';

function CreateRequest() {
  return (
    <section className='createrequest'>
        <Navbar/>
    <div className="container">
        <Create/>
        </div>
    </section>
  )
}

export default CreateRequest;