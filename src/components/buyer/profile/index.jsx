import React, { useState } from 'react'
import GeneralBottom from './general/generalbottom';
import GeneralTop from './general/generaltop'

function MyProfile() {
  const [username,setUsername]=useState("Maged elrashid");
  return (
    <section className='myprofile'>
        <div className="container">
        <GeneralTop Username={username}/>
        <GeneralBottom/>
        </div>
    </section>
  )
}

export default MyProfile