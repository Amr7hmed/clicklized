import axios from "axios";
import { Api, languagecklized, Tokenclicklized, UserId } from "../index.js";

// Post Function Api

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

export const UpdateProfile = async (Data,DataUser,Companycrfiles,Companyvatfiles,setMessage) => {
  var data = new FormData();
  data.append('user_type', Data.user_type_id);
  data.append("name", DataUser.name);
  data.append("email", DataUser.email);
  data.append("phone", DataUser.phone);
  data.append("industry_id",DataUser.industry);
  data.append("device_id", "default");
  data.append("device_type","web");
  

  for (let i = 0; i < Companycrfiles.length; i++) {
    data.append("cr_files[]", Companycrfiles[i]);
  };

  for (let i = 0; i < Companyvatfiles.length; i++) {
    data.append("vat_files[]", Companyvatfiles[i]);
  };

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
    localStorage.setItem("languagecklized", JSON.stringify(DataUser.languageaccounet));
    window.location.reload();
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
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

