import React from 'react';
import UserData from './userdata.jsx';
import CompanyData from './companydata.jsx';
import Imageprofile from '../../../../images/profile/image-one.jpg';
import Imagecompany from '../../../../images/profile/image-two.jpg';

function GeneralBottom(props) {
  const {Data}=props;
    const DataCompany ={name:"Company Name", companyindustry:"Company Industry here",image:Data.logo};
  return (
    <div className='myprofile__bottom'>
        <UserData DataUser={Data}/>
        <CompanyData DataCompany={Data}/>
    </div>
  )
}

export default GeneralBottom