import React , { useState }from 'react';
import { useParams } from 'react-router-dom';
import CreateIssueData from '../../../components/buyer/createissue/index.jsx';
import CreateOne from '../../../components/buyer/createrequest/index.jsx';
import CreateReviewData from '../../../components/buyer/createreview/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function CreateRequest() {
  const { name } = useParams();
  const statedata = {
    numberrequired: "",
    items: [
        {
            item:"",
            quantity:""
        },
    ],
    address: "",
    day: "",
    inputinsurance: "yes",
    transportation: "included",
    notes: "",
    files: "",
    logo: "",
    companyname: "",
    companyemail: "",
    contactnumebr: "",
    checkboxtoggle: false,
};
const [clickedLatLng, setClickedLatLng] = useState(null);
  return (
    <section className='createrequest'>
      <Navbar />
      <div className="container">
        {name === "createrequest"?
        <CreateOne Statedata={statedata} clickedLatLng={clickedLatLng}
         setClickedLatLng={setClickedLatLng}/>
        :name === "createissue"?
        <CreateIssueData Statedata={statedata}/>
        :name === "createreview"?
        <CreateReviewData Statedata={statedata}/>
        :""}
        
      </div>
    </section>
  )
}

export default CreateRequest;