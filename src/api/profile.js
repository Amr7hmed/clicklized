import axios from "axios";
import { Api, Tokenclicklized } from "./index.js";

export const UpdateImageprofile = async (file,setMessage) => {
    var data = new FormData();
    data.append('image', file);
    const  options = {
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
  
  export const UpdateLogoprofile = async (file,setMessage) => {
  
    var data = new FormData();
    data.append('logo', file);
  
    const  options = {
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