import React from 'react'
import Head from './head'
import List from './list'

function CreateTop(props) {
  const {StyleScreen}=props;
  return (
    <div className='top'>
      <Head StyleScreen={StyleScreen}/>
      <List StyleScreen={StyleScreen}/>
    </div>
  )
}

export default CreateTop