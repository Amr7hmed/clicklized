import React from 'react';
import UserData from './userdata.jsx';
import CompanyData from './companydata.jsx';
import Imageprofile from '../../../../images/profile/image-one.jpg';
import Imagecompany from '../../../../images/profile/image-two.jpg';

function GeneralBottom(props) {
  const {Data}=props;
  return (
    <div className='myprofile__bottom'>
        <UserData DataUser={Data}/>
        <CompanyData DataCompany={Data}/>
    </div>
  )
}

export default GeneralBottom