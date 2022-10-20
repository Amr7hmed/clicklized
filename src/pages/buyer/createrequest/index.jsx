import React from 'react'
import Create from '../../../components/buyer/createrequest/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function CreateRequest() {
  return (
    <section className='createrequest'>
      <Navbar />
      <div className="container">
        <Create />
      </div>
    </section>
  )
}

export default CreateRequest;