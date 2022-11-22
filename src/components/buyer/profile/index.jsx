import React from 'react';
import GeneralBottom from './general/generalbottom';
import GeneralTop from './general/generaltop'
import ModalPassword from './modal/modalpassword';
import ModelEditprofile from './modal/modeleditprofile';

function MyProfile(props) {
  const {Data,Username ,setLoadingdata}=props;

  return (
    <section className='myprofile'>
        <div className="container">
        <GeneralTop Username={Username}/>
        
        <GeneralBottom Data={Data} setLoadingdata={setLoadingdata}/>
        <ModalPassword/>
        <ModelEditprofile Data={Data}/>
        </div>
    </section>
    )
}

export default MyProfile