import React from 'react'
import Navbar from '../../../components/buyer/navbar/index.jsx';
import CreateIssueData from '../../../components/buyer/createissue/index.jsx';

function CreateIssue() {
  return (
    <section className='createrequest'>
      <Navbar />
      <div className="container">
        <CreateIssueData/>
      </div>
    </section>
  )
}

export default CreateIssue;