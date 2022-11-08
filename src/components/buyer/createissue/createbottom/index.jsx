import React from 'react'
import Form from './form/form'

function CreateIssueBottom(props) {
  const {Statedata}=props;
  return (
    <div className='createbottom'>
        <div className='screenone'>
          <Form Statedata={Statedata}/>
        </div>
    </div>
  )
}

export default CreateIssueBottom