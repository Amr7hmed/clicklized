import axios from "axios";
import { Api } from "./index.js";

// Post Function Api
export const login = async (state) => {
  localStorage.setItem("tokenclicklized", JSON.stringify(state));
  window.location.reload();
};

export const ForgetPassword = async (state) => {
  localStorage.setItem("emailcode", JSON.stringify(state));
  window.location.pathname = `/verification`;
};
export const ForgetPasswordcode = async (state) => {
  localStorage.setItem("code", JSON.stringify(state));
  window.location.pathname = `/updatepassword`;
};
export const EndForgetPassword = async () => {
  window.location.pathname = `/`;
};

export const Signup = async (state) => {
  const options = {
    method: "POST",
    url: `${Api}register`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      //'Access-Control-Allow-Origin': '*',
    },
    data: JSON.stringify({
      ...state,
    }),
  };
  axios(options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("error",error);
    });
};