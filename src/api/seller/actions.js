import axios from "axios";
import { Api, Tokenclicklized } from "../index.js";

// Get Function Api 
export const GetDataRequestSupplier = async (setLoading, setData) => {
  const options = {
    method: "get",
    url: `${Api}supplier-orders`,
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

export const GetDataRequest = async (Id,setLoading, setData) => {
  const options = {
    method: "get",
    url: `${Api}order-details/${Id}`,
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
      console.log(response.data.data);
    })
    .catch(function (error) {
      setLoading(true);
    });
};