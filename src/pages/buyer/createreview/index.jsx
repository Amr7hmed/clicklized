import React from 'react'
import CreateReviewData from '../../../components/buyer/createreview/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

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