import React from 'react'
import CreateReviewBottom from './createbottom/index.jsx';
import CreateTop from '../createrequest/createtop';

function CreateReviewData(props) {
  const {Arraydataone,Arraydatatwo}=props;
  return (
    <section className='create'>
    <CreateTop StyleScreen="createreviewdata_top"/>
    <CreateReviewBottom Arraydataone={Arraydataone} Arraydatatwo={Arraydatatwo}/>
</section>
  )
}

export default CreateReviewData;