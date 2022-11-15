import axios from "axios";
import { Api } from "../index.js";

// Get Function Api 
export const GetDataRequest = async (setLoading,setData) => {
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
        console.log(response);
        setData(response.data.data);
      })
      .catch(function (error) {
        setLoading(true);
      });
  };
 

  
// Post Function Api
  
export const Createrequestdata = async (Data,clickedLatLng,setMessage) => {
const products=[];
  var data = new FormData();
    data.append("offers_allowed", Data.numberrequired);
    data.append("address", Data.address);
    data.append("lat", clickedLatLng.lat);
    data.append("lng", clickedLatLng.lng);
    data.append("delivery_date",
    `${Data.day.getMonth()+1}/${Data.day.getDate()}/${Data.day.getFullYear()}`);
    data.append("has_insurance", Data.inputinsurance);
    data.append("transportation", Data.transportation);
    data.append("notes", Data.notes);
   // data.append("logo", fileInput.files[0], Data.logo);
   
    for (let i = 0; i < Data.items.length; i++) {
      if(Data.items[i].item_id !== undefined )
        data.append("products["+i+"][quantity]", Data.items[i].quantity);
        data.append("products["+i+"][item_id]", Data.items[i].item_id);
    };
    data.append("company_name", Data.companyname);
    data.append("email", Data.companyemail);
    data.append("contact_number", Data.contactnumebr);
    data.append("industry_id", "1");
    data.append("payment_id", "1");
    //data.append("files[]", fileInput.files[0], "/C:/xampp/htdocs/HWZN/direction/public/site/images/hero-video-bg.jpg");
    data.append("suppliers[]", "1");
    data.append("send_all", Data.checkboxtoggle);

  const  options = {
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
    console.log(response);
  })
  .catch(function (error) {
    //console.log(error.response.data.message);
   setMessage(error.response.data.message)
  });
  
};
/*

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 56|Tocy1pGJqI33LwgaiaKdvKlNcST54ef21ErPbHjX");


*/