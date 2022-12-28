import axios from "axios";
import { Api, Tokenclicklized, UserId } from "../index.js";

// Post Function Api

export const UpdateProfile = async (Data,values,language,setMessage,setMessagecrissuedate,
  setMessagecrexpiredate,setMessagevatregistrationdate) => {
  let crissuedate='';
  let crexpiredate='';
  let vatregistrationdate='';

  if(values.cr_issue_date === ""){
    crissuedate = Data.supplier.cr_issue_date;
  }else{
    crissuedate=`${values.cr_issue_date.getFullYear()}/${values.cr_issue_date.getMonth()+1}/${values.cr_issue_date.getDate()}`;
  }

  if(values.cr_expire_date    === ""){
    crexpiredate = Data.supplier.cr_expire_date;
  }else{
    crexpiredate=`${values.cr_expire_date.getFullYear()}/${values.cr_expire_date.getMonth()+1}/${values.cr_expire_date.getDate()}`;
  }

  if(values.vat_registration_date === ""){
    vatregistrationdate = Data.supplier.vat_registration_date;
  }else{
    vatregistrationdate=`${values.vat_registration_date.getFullYear()}/${values.vat_registration_date.getMonth()+1}/${values.vat_registration_date.getDate()}`;
  }


  
  var data = new FormData();
    data.append('user_type', Data.user_type_id);
    data.append('name',  Data.name);
    data.append('email', Data.email);
    data.append('phone', Data.phone);
    //data.append('image', Data.image);
    //data.append('logo', Data.logo);
    data.append('industry_id', values.business_sector);
    data.append('company_name', values.companyname);
    data.append('city_id', values.city);
    data.append('country_id', values.country);
    data.append('fax_number', values.fax);
    data.append('website', values.website);
    data.append('address', values.address);
    data.append('payment_terms', values.payment_terms);
    data.append('cr_number', values.cr);
    data.append('vat_number', values.vat);
    data.append('cr_issue_date',crissuedate);
    data.append('cr_expire_date',crexpiredate);
    data.append('vat_registration_date',vatregistrationdate);
    data.append('business_email', values.company_email);
    data.append("device_id", "default");
    data.append("device_type","web");

  const  options = {
    method: "post",
    url: `${Api}update-profile`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${Tokenclicklized}`, 
    },
    data,
  };
    axios(options).then(function (response) {
    setMessage("")
    localStorage.setItem("languagecklized", JSON.stringify(values.languageaccounet));
    window.location.reload();
  })
  .catch(function (error) {
    console.log(error.response.data.message);
    
    if(error.response.data.field === "cr_issue_date"){
      setMessagecrissuedate(error.response.data.message)
      setMessagecrexpiredate("")
      setMessagevatregistrationdate("")
      setMessage("")
    }else if(error.response.data.field === 'cr_expire_date'){
      setMessagecrissuedate("")
      setMessagecrexpiredate(error.response.data.message)
      setMessagevatregistrationdate("")
      setMessage("")
    }else if(error.response.data.field === 'vat_registration_date'){
      setMessagecrissuedate("")
      setMessagecrexpiredate("")
      setMessagevatregistrationdate(error.response.data.message)
      setMessage("")
    }else{
      setMessage(error.response.data.message)
    }
  });
  
};


// Get Function Api 
export const GetDataProfile = async (setLoading,setData) => {
  const options = {
    method: "get",
    url: `${Api}profile/${UserId}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Tokenclicklized}`,
    },
  };
  axios(options)
    .then(function (response) {
      setLoading(true);
      setData(response.data.data.user);
    })
    .catch(function (error) {
      setLoading(true);
    });
};


export const GetDataIndustries = async (setLoading,setData) => {
  const options = {
    method: "get",
    url: `${Api}industries`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Tokenclicklized}`,
    },
  };
  axios(options)
    .then(function (response) {
      setLoading(true);
      setData(response.data.data);
    })
    .catch(function (error) {
      setLoading(true);
    });
};

