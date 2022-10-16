import React from 'react'
import CreateReviewBottom from './createbottom/index.jsx';
import CreateTop from '../createrequest/createtop';

function CreateReviewData() {
  return (
    <section className='create'>
    <CreateTop StyleScreen="createreviewdata_top"/>
    <CreateReviewBottom/>
</section>
  )
}

export default CreateReviewData;