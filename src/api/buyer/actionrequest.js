import axios from "axios";
import { Api } from "../index.js";

// Get Function Api 
export const GetDataRequest = async (setLoading, setData) => {
  const options = {
    method: "get",
    url: `${Api}orders`,
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



// Post Function Api

export const Createrequestdata = async (setLoading,Arraydataone, clickedLatLng, Itemsresults, 
  daydata, SuppliersItems, imageslogo, arrayimagesfiles, Arraydatatwo, setMessage) => {
  const products = [];
  var data = new FormData();
  data.append("offers_allowed", Arraydataone.numberrequired);
  data.append("address", Arraydataone.address);
  data.append("lat", clickedLatLng.lat);
  data.append("lng", clickedLatLng.lng);
  data.append("delivery_date", daydata);
  data.append("has_insurance", Arraydataone.inputinsurance);
  data.append("transportation", Arraydataone.transportation);
  data.append("notes", Arraydataone.notes);
  data.append("logo", imageslogo);
  data.append("industry_id", Arraydataone.industry);

  for (let i = 0; i < Itemsresults.length; i++) {
    data.append("products[" + i + "][quantity]", Itemsresults[i].quantity);
    data.append("products[" + i + "][item_id]", Itemsresults[i].item_id);
  };
  for (let i = 0; i < arrayimagesfiles.length; i++) {
    data.append("files[]", arrayimagesfiles[i]);
  };
  data.append("company_name", Arraydatatwo.companyname);
  data.append("email", Arraydatatwo.companyemail);
  data.append("contact_number", Arraydatatwo.contactnumebr);

  if (Arraydatatwo.checkboxtoggle === true) {
    data.append("send_all", 1);
  } else {
    data.append("send_all", 0);
  }

  for (let i = 0; i < SuppliersItems.length; i++) {
    data.append("suppliers[]", SuppliersItems[i].id);
  };

  const options = {
    method: "post",
    url: `${Api}send-order`,
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
    setLoading(false);
    window.location.pathname = `/myrequest`;
  })
    .catch(function (error) {
      setMessage(error.response.data.message)
    });

};
/*

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 56|Tocy1pGJqI33LwgaiaKdvKlNcST54ef21ErPbHjX");


*/