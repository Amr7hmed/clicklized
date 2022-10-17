import React from 'react';
import Showrequestrow from './data/index.jsx';
import ShowTop from './top/index.jsx';

function ShowRequestData(props) {
  const {id, name }=props;
  return (
    <div className='showrequestdata'>
        <ShowTop id={id} name={name}/>
        <Showrequestrow/>
    </div>
  )
}

export default ShowRequestData