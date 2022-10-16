import React from 'react'
import CreateRequestBottom from './createbottom/index.jsx';
import CreateTop from './createtop/index.jsx'

function Create() {
  return (
        <section className='create'>
        <CreateTop StyleScreen="createrequest_top"/>
        <CreateRequestBottom/>
    </section>
  )
}

export default Create;