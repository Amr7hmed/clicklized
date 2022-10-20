//import axios from "axios";
//import swal from "sweetalert";
//import { Api } from "./index.js";

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
export const Signup = async () => {
  window.location.pathname = `/`;
};