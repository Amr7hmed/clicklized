import axios from "axios";
import { Api, Tokenclicklized, languagecklized, UserId } from "./index.js";

// 1-1-  Post Function Api
export const UpdateImageprofile = async (file, setMessage) => {
  var data = new FormData();
  data.append('image', file);

  const options = {
    method: "post",
    url: `${Api}update-image`,
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
  })
    .catch(function (error) {
      setMessage(error.response.data.message)
    });
};

export const UpdateLogoprofile = async (file, setMessage) => {
  var data = new FormData();
  data.append('logo', file);

  const options = {
    method: "post",
    url: `${Api}update-image`,
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
  })
    .catch(function (error) {
      setMessage(error.response.data.message)
    });
};

export const ChangeLang = async (Data) => {

  var data = new FormData();
  data.append('lang', Data);

  const options = {
    method: "post",
    url: `${Api}change-lang`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${Tokenclicklized}`,
    },
    data,
  };
  axios(options).then(function (response) {
    if (Data === 'ar') {
      localStorage.setItem("languagecklized", JSON.stringify("Ar"));
    } else {
      localStorage.setItem("languagecklized", JSON.stringify("En"));
    }
    window.location.reload();
  })
    .catch(function (error) {
    });

};

export const UpdateProfilebuyer = async (Data, DataUser, Companycrfiles, Companyvatfiles, setMessage) => {

  var data = new FormData();
  data.append('user_type', Data.user_type_id);
  data.append("name", DataUser.name);
  data.append("email", DataUser.email);
  data.append("phone", DataUser.phone);
  data.append("industry_id", DataUser.industry);
  data.append("device_id", "default");
  data.append("device_type", "web");

  for (let i = 0; i < Companycrfiles.length; i++) {
    data.append("cr_files[]", Companycrfiles[i]);
  };

  for (let i = 0; i < Companyvatfiles.length; i++) {
    data.append("vat_files[]", Companyvatfiles[i]);
  };

  const options = {
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
    localStorage.setItem("languagecklized", JSON.stringify(DataUser.languageaccounet));
    window.location.reload();
  })
    .catch(function (error) {
      setMessage(error.response.data.message)
    });

};


export const UpdateProfileseller = async (Data,values,language,setMessage,setMessagecrissuedate,
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


export const UpdatePasswordprofile = async (password,password_confirmation,setMessage) => {
  const  options = {
    method: "post",
    url: `${Api}update-password`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${Tokenclicklized}`, 
    },
    data: JSON.stringify({
      password,
      password_confirmation
    }),
  };
    axios(options).then(function (response) {
    window.location.reload();
    setMessage("")
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
  });
};

// 1-2- Post Function Api Buyer

export const UpdateCompanycrprofile = async (DataUser,files,setMessage,setLoadingdata,setLoadingcrfiles) => {
  setLoadingcrfiles(true);
  var data = new FormData();
  data.append("name", DataUser.name);
  data.append("email", DataUser.email);
  data.append("phone", DataUser.phone);
  data.append('user_type', DataUser.user_type_id);
  for (let i = 0; i < files.length; i++) {
    data.append("cr_files[]", files[i]);
  };
  data.append("device_id", "default");
  data.append("device_type","web");
  data.append("industry_id", DataUser.industry.id);
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
      setLoadingdata(false);
      setLoadingcrfiles(false);
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
    setLoadingcrfiles(false);
  });
  
};

export const UpdateCompanyvatprofile = async (DataUser,files,setMessage,setLoadingdata,setLoadingvatfiles) => {
  setLoadingvatfiles(true);
  var data = new FormData();
  data.append("name", DataUser.name);
  data.append("email", DataUser.email);
  data.append("phone", DataUser.phone);
  data.append('user_type', DataUser.user_type_id);
  for (let i = 0; i < files.length; i++) {
    data.append("vat_files[]", files[i]);
  };
  data.append("device_id", "default");
  data.append("device_type","web");
  data.append("industry_id", DataUser.industry.id);
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
    setLoadingdata(false);
    setLoadingvatfiles(false);
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
    setLoadingvatfiles(false);
  });
  
};


// Delete Function Api 

export const DeleteItem = (Id) => {
  const options = {
    method: "delete",
    url: `${Api}delete-attachment/${Id}`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Tokenclicklized}`,
    },
  };
  axios(options).then(function (response) {
  })
    .catch(function (error) {
    });


};



// Get Function Api 

export const GetDataProfile = async (setLoading,setData ) => {
  const options = {
    method: "get",
    url: `${Api}profile/${UserId}?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
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

      if(response.data.data.user.lang === 'ar'){
        localStorage.setItem("languagecklized", JSON.stringify("Ar"));
      }else{
        localStorage.setItem("languagecklized", JSON.stringify("En"));
      }

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


export const GetDataCaity = async (setLoading,setData) => {
  const options = {
    method: "get",
    url: `${Api}cities`,
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
