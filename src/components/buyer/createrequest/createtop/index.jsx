import React from 'react'
import Head from './head'
import List from './list'

function CreateTop(props) {
  const {StyleScreen ,setParamsname}=props;
  return (
    <div className='top'>
      <Head StyleScreen={StyleScreen} setParamsname={setParamsname}/>
      <List StyleScreen={StyleScreen}/>
    </div>
  )
}

export default CreateTop