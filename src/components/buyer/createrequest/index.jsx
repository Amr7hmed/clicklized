import React from 'react'
import CreateBottom from './createbottom';
import CreateTop from './createtop'

function Create() {
  return (
    <section className='create'>
        <div className="container">
        <CreateTop/>
        <CreateBottom/>
        </div>
    </section>
  )
}

export default Create;