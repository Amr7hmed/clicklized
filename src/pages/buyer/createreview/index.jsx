import React from 'react'
import CreateReviewData from '../../../components/buyer/createreview';
import Navbar from '../../../layout/navbar';

function CreateReview() {
  return (
    <section className='createrequest'>
      <Navbar />
      <div className="container">
        <CreateReviewData/>
      </div>
    </section>
  )
}

export default CreateReview