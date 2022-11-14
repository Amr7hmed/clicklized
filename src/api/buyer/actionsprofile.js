import axios from "axios";
import { Api } from "../index.js";

// Post Function Api

export const UpdateImageprofile = async (DataUser,file,setMessage) => {
  console.log(DataUser);
  var data = new FormData();
  data.append("name", DataUser.name);
  data.append("email", DataUser.email);
  data.append("phone", DataUser.phone);
  data.append('user_type', DataUser.user_type_id);
  data.append('image', file);
  data.append("device_id", "default");
  data.append("device_type","web");
  data.append("industry_id", "1");
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
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
  });
};

export const UpdateLogoprofile = async (DataUser,file,setMessage) => {
  console.log(DataUser);
  var data = new FormData();
  data.append("name", DataUser.name);
  data.append("email", DataUser.email);
  data.append("phone", DataUser.phone);
  data.append('user_type', DataUser.user_type_id);
  //data.append('image', URL.createObjectURL(DataUser.image));
  data.append('logo', file);
  data.append("device_id", "default");
  data.append("device_type","web");
  data.append("industry_id", "1");
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
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
  });
};

export const UpdateCompanycr = async (DataUser,files,setMessage) => {
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
  data.append("industry_id", "1");
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
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
  });
  
};

export const UpdateCompanyvat = async (DataUser,files,setMessage) => {
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
  data.append("industry_id", "1");
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
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
  });
  
};

export const UpdateProfile = async (Data,DataUser,setMessage) => {
  var data = new FormData();
  data.append('user_type', Data.user_type_id);
  data.append("name", DataUser.name);
  data.append("email", DataUser.email);
  data.append("phone", DataUser.phone);
  data.append("industry_id",DataUser.industry);
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
    window.location.pathname = `/profilebuyer`;
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

