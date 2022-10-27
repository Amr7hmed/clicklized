import React from 'react';
import UserData from './userdata.jsx';
import CompanyData from './companydata.jsx';
import Imageprofile from '../../../../images/profile/image-one.jpg';
import Imagecompany from '../../../../images/profile/image-two.jpg';

function GeneralBottom() {
    const DataUser={name:"Maged elrashid",email:"maged@company.com",phone:"00956654546",image:Imageprofile};
    const DataCompany ={name:"Company Name here",
    business_sector:" Business Sector here",
    cr:"CR NO. here",
    cr_issue_date:"CR Issue Date here",
    cr_expiry_date:"CR Expiry Date here",
    vat:"VAT NO. here",
    vat_registration_date:"VAT Registration Date here",
    website:"https://www.google.com/",
    country:"Country here",
    city:"City here",
    address:"Address here",
    phone:"Phone No. here",
    fax:"Fax No. here",
    payment_terms:"Payment Terms here"
    ,image:Imagecompany};
  return (
    <div className='myprofileseller__bottom'>
        <UserData DataUser={DataUser}/>
        <CompanyData DataCompany={DataCompany}/>
    </div>
  )
}

export default GeneralBottom