import React from 'react';
import UserData from './userdata.jsx';
import CompanyData from './companydata.jsx';
import Imageprofile from '../../../../images/profile/image-one.jpg';
import Imagecompany from '../../../../images/profile/image-two.jpg';

function GeneralBottom() {
    const DataUser={name:"Maged elrashid",email:"maged@company.com",phone:"00956654546",image:Imageprofile};
    const DataCompany ={name:"Company Name", companyindustry:"Company Industry here",image:Imagecompany};
  return (
    <div className='myprofile__bottom'>
        <UserData DataUser={DataUser}/>
        <CompanyData DataCompany={DataCompany}/>
    </div>
  )
}

export default GeneralBottom