import React from 'react'
import Form from './form/form'

function CreateIssueBottom(props) {
  const {Statedata ,screnonedatatwo}=props;
  return (
    <div className='createbottom'>
        <div className='screenone'>
          <Form Statedata={Statedata} screnonedatatwo={screnonedatatwo}/>
        </div>
    </div>
  )
}

export default CreateIssueBottom