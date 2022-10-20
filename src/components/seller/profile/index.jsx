import React, { useState } from 'react'
import GeneralBottom from './general/generalbottom';
import GeneralTop from './general/generaltop'
import ModalPassword from './modal/modalpassword';
import ModelEditprofile from './modal/modeleditprofile';

function MyProfile() {
  const [username,setUsername]=useState("Maged elrashid");
  return (
    <section className='myprofile'>
        <div className="container">
        <GeneralTop Username={username}/>
        <GeneralBottom/>
        <ModalPassword/>
        <ModelEditprofile/>
        </div>
    </section>
  )
}

export default MyProfile