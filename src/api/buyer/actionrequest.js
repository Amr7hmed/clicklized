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
  
export const Createrequestdata = async (Data) => {

  var data = new FormData();
    data.append("offers_allowed", Data.numberrequired);
    data.append("lat", "1.31313212");
    data.append("lng", "1.032465465");
    data.append("address", "test");
    data.append("delivery_date", "11/11/2022");
    data.append("has_insurance", "yes");
    data.append("transportation", "included");
    data.append("notes", "test");
    //data.append("logo", fileInput.files[0], "/C:/xampp/htdocs/HWZN/direction/public/site/images/newsletter-image-bg.jpg");
    data.append("company_name", "test");
    data.append("email", "asmaaelfeky6@gmail.com");
    data.append("contact_number", "0131213244");
    data.append("industry_id", "1");
    data.append("payment_id", "1");
    //data.append("files[]", fileInput.files[0], "/C:/xampp/htdocs/HWZN/direction/public/site/images/hero-video-bg.jpg");
    data.append("products[0][item_id]", "1");
    data.append("products[0][quantity]", "20");
    data.append("products[1][item_id]", "2");
    data.append("products[1][quantity]", "100");
    data.append("suppliers[]", "1");
    data.append("send_all", "true");

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
    //setMessage("")
    console.log(response);
  })
  .catch(function (error) {
   // setMessage(error.response.data.message)
  });
  
};
/*

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 56|Tocy1pGJqI33LwgaiaKdvKlNcST54ef21ErPbHjX");


*/