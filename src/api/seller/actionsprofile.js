import axios from "axios";
import { Api } from "../index.js";

// Post Function Api

export const UpdateProfile = async (Data,values,setMessage) => {
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
    data.append('cr_issue_date',
     `${values.cr_issue_date.getFullYear()}/${values.cr_issue_date.getMonth()+1}/${values.cr_issue_date.getDate()}`);
    data.append('cr_expire_date',
    `${values.cr_expire_date.getFullYear()}/${values.cr_expire_date.getMonth()+1}/${values.cr_expire_date.getDate()}`);
    data.append('vat_registration_date',
    `${values.vat_registration_date.getFullYear()}/${values.vat_registration_date.getMonth()+1}/${values.vat_registration_date.getDate()}`);
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
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenclicklized"))}`, 
    },
    data,
  };
    axios(options).then(function (response) {
    setMessage("")
    window.location.reload();
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
  });
  
};


// Get Function Api 
export const GetDataProfile = async (userid,setLoading,setData) => {
  const options = {
    method: "get",
    url: `${Api}profile/${userid}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenclicklized"))}`,
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
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenclicklized"))}`,
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

