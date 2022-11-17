import React from 'react'
import Form from './form/form'

function CreateIssueBottom(props) {
  const {Statedata ,screnonedatatwo ,setParamsname, setSuppliersItems}=props;
  return (
    <div className='createbottom'>
        <div className='screenone'>
          <Form Statedata={Statedata} screnonedatatwo={screnonedatatwo} setParamsname={setParamsname}
           setSuppliersItems={setSuppliersItems}/>
        </div>
    </div>
  )
}

export default CreateIssueBottom