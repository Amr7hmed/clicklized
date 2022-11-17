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
    industry:""
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
  const [paramsname,setParamsname]=useState("");
  const [SuppliersItems, setSuppliersItems] = useState([]);
  const [clickedLatLng, setClickedLatLng] = useState({ lat: 23.392899070336068 , lng: 42.86244913615009 });

  const screnonedataone = (values) => {
    setArraydataone(values);
    setParamsname("createissue");
 }
 const screnonedatatwo = (values) => {
  setArraydatatwo(values);
  setParamsname("createreview");
}

const AddImagesfiles=(e)=>{
setImagesfiles(e.target.files);
}

const AddImageslogo=(e)=>{
  setImageslogo(e.target.files[0]);
  }
  return (
    <section className='createrequest'>
      <Navbar />
      <div className="container">
        {paramsname === "createissue"?

        <CreateIssueData Statedata={statedatatwo} Arraydataone={arraydataone} screnonedatatwo={screnonedatatwo}
        setParamsname={setParamsname} setSuppliersItems={setSuppliersItems}/>

        :paramsname === "createreview"?

        <CreateReviewData Arraydataone={arraydataone} Arraydatatwo={arraydatatwo}
        SuppliersItems={SuppliersItems} imagesfiles={imagesfiles} imageslogo={imageslogo}
        setParamsname={setParamsname} clickedLatLng={clickedLatLng}/>

        :
        
        <CreateOne Statedata={statedataone} clickedLatLng={clickedLatLng}
        setClickedLatLng={setClickedLatLng} screnonedataone={screnonedataone}
        AddImagesfiles={AddImagesfiles} AddImageslogo={AddImageslogo}
        imageslogo={imageslogo} imagesfiles={imagesfiles}/>
        }
        
      </div>
    </section>
  )
}

export default CreateRequest;