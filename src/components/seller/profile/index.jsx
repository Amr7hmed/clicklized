import React, { useState } from 'react'
import GeneralBottom from './general/generalbottom';
import GeneralTop from './general/generaltop'
import ModalPassword from './modal/modalpassword';
import ModelEditprofile from './modal/modeleditprofile';

function MyProfile(props) {
  const {Data,Username}=props;
  return (
    <section className='myprofileseller'>
        <div className="container">
        <GeneralTop Username={Username}/>
        
        <GeneralBottom Data={Data}/>
        <ModalPassword/>
        <ModelEditprofile Data={Data}/>
        </div>
    </section>
  )
}

export default MyProfile