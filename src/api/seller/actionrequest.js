import axios from "axios";
import { Api } from "../index.js";

// Get Function Api 
export const GetDataRequestSupplier = async (setLoading, setData) => {
  const options = {
    method: "get",
    url: `${Api}supplier-orders`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenclicklized"))}`,
    },
  };
  axios(options)
    .then(function (response) {
      setLoading(true);
      //console.log(response.data.data);
      setData(response.data.data);
    })
    .catch(function (error) {
      setLoading(true);
    });
};



