import React , { useState }from 'react';
import { useParams } from 'react-router-dom';
import CreateIssueData from '../../../components/buyer/createissue/index.jsx';
import CreateOne from '../../../components/buyer/createrequest/index.jsx';
import CreateReviewData from '../../../components/buyer/createreview/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function CreateRequest() {
  const { name } = useParams();
  const statedataone = {
    numberrequired: "",
    items: [
        {
            item_id:"",
            quantity:""
        },
    ],
    address: "",
    day: "",
    inputinsurance: "yes",
    transportation: "included",
    notes: "",
      };
  const statedatatwo={
    companyname: "",
    companyemail: "",
    contactnumebr: "",
    checkboxtoggle: false,
  }
  const [arraydataone,setArraydataone]=useState({});
  const [arraydatatwo,setArraydatatwo]=useState({});
  const [imagesfiles,setImagesfiles]=useState([]);
  const [imageslogo,setImageslogo]=useState(null);

  const screnonedataone = (values) => {
    console.log(values);
    setArraydataone(values);
 }
 const screnonedatatwo = (values) => {
  console.log(values);
  setArraydatatwo(values);
}

const AddImagesfiles=(e)=>{
console.log(e.target.files);
setImagesfiles(e.target.files);
}

const AddImageslogo=(e)=>{
  console.log(e.target.files[0]);
  setImageslogo(e.target.files[0]);
  }
const [clickedLatLng, setClickedLatLng] = useState({ lat: 23.392899070336068 , lng: 42.86244913615009 });
  return (
    <section className='createrequest'>
      <Navbar />
      <div className="container">
        {name === "createrequest"?
        <CreateOne Statedata={statedataone} clickedLatLng={clickedLatLng}
         setClickedLatLng={setClickedLatLng} screnonedataone={screnonedataone}
        AddImagesfiles={AddImagesfiles} AddImageslogo={AddImageslogo}
        imageslogo={imageslogo} imagesfiles={imagesfiles}/>
        :name === "createissue"?
        <CreateIssueData Statedata={statedatatwo} Arraydataone={arraydataone} screnonedatatwo={screnonedatatwo}
         imagesfiles={imagesfiles} imageslogo={imageslogo}/>
        :name === "createreview"?
        <CreateReviewData Arraydataone={arraydataone} Arraydatatwo={arraydatatwo}/>
        :""}
        
      </div>
    </section>
  )
}

export default CreateRequest;