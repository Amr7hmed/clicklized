import axios from "axios";
import { Api } from "../index.js";

// Get Function Api 
export const GetDataSuppliers = async (setLoading,setData) => {
    const options = {
      method: "get",
      url: `${Api}buyer-suppliers`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
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
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
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
  
// Delete Function Api 
export const DeleteSupplier = (Id, setLoading) => {
    const options = {
      method: "DELETE",
      url: `${Api}delete-buyer-supplier/${Id}`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      }
    };
    axios(options).then(function (response) {
      setLoading(false)
    })
      .catch(function (error) {
      });
  };

// Post Function Api
  
export const AddNewSupplier = async (DataUser,setMessage) => {
  var data = new FormData();
  data.append("industry_id",DataUser.industry);
  data.append("company_name", DataUser.name);
  data.append("email", DataUser.email);
  data.append("contact_number", DataUser.phone);
  data.append("city_id", DataUser.city);
  const  options = {
    method: "post",
    url: `${Api}new-supplier`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`, 
    },
    data,
  };
    axios(options).then(function (response) {
    setMessage("")
    console.log(response);
    window.location.pathname = `/suppliers`;
  })
  .catch(function (error) {
    setMessage(error.response.data.message)
  });
  
};