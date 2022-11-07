import axios from "axios";
import { Api } from "./index.js";

// Post Function Api

// Post Function Api
export const SignIn = async (email,password,device_id,device_type,setMessage) => {
  const options = {
    method: "POST",
    url: `${Api}login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify({
      email,
      password,
      device_id,
      device_type
    }),
  };
  axios(options)
    .then(function (response) {
      localStorage.setItem("token", JSON.stringify(response.data.data.user.token));
      localStorage.setItem("usertype", JSON.stringify(response.data.data.user.user_type_id));
      localStorage.setItem("userid", JSON.stringify(response.data.data.user.id));
      setMessage("")
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      setMessage(error.response.data.message)
    });
};

export const ActivateAccount = async (code,email,device_id,device_type,setMessage) => {
  const options = {
    method: "POST",
    url: `${Api}activate-account`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify({
      code,
      email,
      device_id,
      device_type
    }),
  };
  axios(options)
    .then(function (response) {
      localStorage.setItem("token", JSON.stringify(response.data.data.user.token));
      localStorage.setItem("usertype", JSON.stringify(response.data.data.user.user_type_id));
      localStorage.setItem("userid", JSON.stringify(response.data.data.user.id));
      localStorage.removeItem("emailclicklized");
      window.location.pathname = `/`;
      setMessage("")
    })
    .catch(function (error) {
      setMessage(error.response.data.message)
    });
};


export const FPasswordCode = async (code,email,device_id,device_type,setMessage) => {
  const options = {
    method: "POST",
    url: `${Api}activate-account`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify({
      code,
      email,
      device_id,
      device_type
    }),
  };
  axios(options)
    .then(function (response) {
      localStorage.setItem("token", JSON.stringify(response.data.data.user.token));
      localStorage.setItem("usertype", JSON.stringify(response.data.data.user.user_type_id));
      localStorage.removeItem("emailclicklized");
      window.location.pathname = `/updatepassword`;
      setMessage("")
    })
    .catch(function (error) {
      setMessage(error.response.data.message)
    });
};

export const UpdatePassword = async (password,password_confirmation,setMessage) => {
  const  options = {
    method: "post",
    url: `${Api}update-password`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
    },
    data: JSON.stringify({
      password,
      password_confirmation
    }),
  };
    axios(options).then(function (response) {
    setMessage("")
    window.location.pathname = `/`;
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
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
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
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

export const Signoutacount=()=>{
  localStorage.removeItem("token")
  localStorage.removeItem("usertype")
  localStorage.removeItem("userid")
}
// Get Function Api
export const GetuserTypes = async (setUserTypes,setLoading) => {
  const options = {
    method: "get",
    url: `${Api}user-types`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
    },
  };
  axios(options)
    .then(function (response) {
      setUserTypes(response.data.data)
      setLoading(true)
    })
    .catch(function (error) {
      console.log(error);
      setLoading(true)
    });
}