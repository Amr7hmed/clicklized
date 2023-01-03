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
      localStorage.setItem("tokenclicklized", JSON.stringify(response.data.data.user.token));
      localStorage.setItem("usertypeclicklized", JSON.stringify(response.data.data.user.user_type_id));
      localStorage.setItem("useridclicklized", JSON.stringify(response.data.data.user.id));
      setMessage("")
      window.location.reload();
      if(response.data.data.user.lang === 'ar'){
        localStorage.setItem("languagecklized", JSON.stringify("Ar"));
      }else{
        localStorage.setItem("languagecklized", JSON.stringify("En"));
      }
      
    })
    .catch(function (error) {
      setMessage(error.response.data.message)
    });
};

export const SignInphone = async (phone,password,device_id,device_type,setMessage) => {
  const options = {
    method: "POST",
    url: `${Api}login`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify({
      phone,
      password,
      device_id,
      device_type
    }),
  };
  axios(options)
    .then(function (response) {
      localStorage.setItem("tokenclicklized", JSON.stringify(response.data.data.user.token));
      localStorage.setItem("usertypeclicklized", JSON.stringify(response.data.data.user.user_type_id));
      localStorage.setItem("useridclicklized", JSON.stringify(response.data.data.user.id));
      localStorage.setItem("languagecklized", JSON.stringify("En"));
      setMessage("")
      window.location.pathname = `/`;
      console.log(response.data.data.user.lang);
      if(response.data.data.user.lang === 'ar'){
        localStorage.setItem("languagecklized", JSON.stringify("Ar"));
      }else{
        localStorage.setItem("languagecklized", JSON.stringify("En"));
      }
    })
    .catch(function (error) {
      setMessage(error.response.data.message)
    });
};

export const FPasswordCode = async (code,email,device_id,device_type,setMessage,setLoading) => {
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
      localStorage.setItem("tokenclicklized", JSON.stringify(response.data.data.user.token));
      localStorage.setItem("usertypeclicklized", JSON.stringify(response.data.data.user.user_type_id));
      localStorage.removeItem("emailclicklized");
      window.location.pathname = `/updatepassword`;
      setMessage("")
      setLoading(false);
    })
    .catch(function (error) {
      setMessage(error.response.data.message)
      setLoading(false);
    });
};

export const Signoutacount=()=>{
  localStorage.removeItem("tokenclicklized")
  localStorage.removeItem("usertypeclicklized")
  localStorage.removeItem("useridclicklized")
  localStorage.removeItem("languagecklized")
  window.location.pathname = `/`;
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
      setLoading(true)
    });
}