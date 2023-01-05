import axios from "axios";
import { Api, languagecklized, Tokenclicklized } from "./index.js";

// A- Seller Account 

// Get Function Api 
export const GetDataRequestSupplier = async (setLoading, setData) => {
  const options = {
    method: "get",
    url: `${Api}supplier-orders?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
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
export const GetDataoffersSupplier = async (setLoading, setData) => {
  const options = {
    method: "get",
    url: `${Api}offers?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
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
export const GetDataRequest = async (setLoading, setData ,Id) => {
  const options = {
    method: "get",
    url: `${Api}order-details/${Id}?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
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


// B- Buyer Account

// 1- Suppliers Page

// Get Function Api 
export const GetDataSuppliers = async (setLoading,setData) => {
  const options = {
    method: "get",
    url: `${Api}buyer-suppliers?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
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

export const DeleteSupplier = (Id, setLoading) => {
const options = {
  method: "DELETE",
  url: `${Api}delete-buyer-supplier/${Id}?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
  headers: {
  Accept: "application/json",
  'Content-Type': 'application/json',
  Authorization: `Bearer ${Tokenclicklized}`,
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
  url: `${Api}new-supplier?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
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
  window.location.pathname = `/suppliers`;
})
.catch(function (error) {
  setMessage(error.response.data.message)
});

};


// 2- Request Page

// Get Function Api 
export const GetAllDataRequest = async (setLoading, setData) => {
  const options = {
    method: "get",
    url: `${Api}orders?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
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

// Post Function Api

export const Createrequestdata = async (setLoading,Arraydataone, clickedLatLng, Itemsresults, 
  daydata, SuppliersItems, imageslogo, arrayimagesfiles, Arraydatatwo,address, setMessage) => {
  const products = [];
  var data = new FormData();
  data.append("offers_allowed", Arraydataone.numberrequired);
  data.append("address", address);
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
    url: `${Api}send-order?Accept-Language=${JSON.parse(languagecklized) ==="Ar" ?"ar":"en"}`,
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
    setLoading(false);
   window.location.pathname = `/myrequest`;
  })
    .catch(function (error) {
      setMessage(error.response.data.message)
      setLoading(false);
    });

};
