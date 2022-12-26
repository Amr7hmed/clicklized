import React, { useState } from 'react';
import { useContext } from 'react';
import CreateIssueData from '../../../components/buyer/createissue/index.jsx';
import CreateOne from '../../../components/buyer/createrequest/index.jsx';
import CreateReviewData from '../../../components/buyer/createreview/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';
import { Authcontext } from '../../../store/context.js';

function CreateRequest() {

  const authcontext = useContext(Authcontext);
  const numberrequest = authcontext.numberrequest;
  const itemsrequest = authcontext.itemsrequest;
  const addressrequest = authcontext.addressrequest;
  const inputinsurancerequest = authcontext.inputinsurancerequest;
  const industryrequest = authcontext.industryrequest;
  const transportationrequest = authcontext.transportationrequest;
  const notesrequest = authcontext.notesrequest;
  const dayrequest = authcontext.dayrequest;
  const imagesfilesrequest = authcontext.imagesfilesrequest;
  const setImagesfilesrequest = authcontext.setImagesfilesrequest;
  const imageslogorequest = authcontext.imageslogorequest;
  const setImageslogorequest = authcontext.setImageslogorequest;
  const checkboxtogglerequest = authcontext.checkboxtogglerequest;
  const supplierslistrequest = authcontext.supplierslistrequest;
  const companynamerequest = authcontext.companynamerequest;
  const companyemailrequest = authcontext.companyemailrequest;
  const contactnumebrrequest = authcontext.contactnumebrrequest;

  const statedataone = {
    numberrequired: numberrequest,
    items: itemsrequest,
    day: dayrequest,
    inputinsurance: inputinsurancerequest,
    transportation: transportationrequest,
    notes: notesrequest,
    industry: industryrequest
  };
  const statedatatwo = {
    companyname: companynamerequest,
    companyemail: companyemailrequest,
    contactnumebr: contactnumebrrequest,
    checkboxtoggle: checkboxtogglerequest,
  }
  const [arraydataone, setArraydataone] = useState({});
  const [arraydatatwo, setArraydatatwo] = useState({});
  const [imagesfiles, setImagesfiles] = useState(imagesfilesrequest);
  const [imageslogo, setImageslogo] = useState(imageslogorequest);
  const [showaddress, setShowaddress] = useState(true);
  const [paramsname, setParamsname] = useState("");
  const [address, setAddress] = useState(addressrequest);
  const [SuppliersItems, setSuppliersItems] = useState(supplierslistrequest);
  const [clickedLatLng, setClickedLatLng] = useState({ lat: 23.392899070336068, lng: 42.86244913615009 });

  const screnonedataone = (values) => {
    if (address === "") {
      setShowaddress(false);
    } else {
      setArraydataone(values);
      setParamsname("createissue");
    }
  }
  const screnonedatatwo = (values) => {
    setArraydatatwo(values);
    setParamsname("createreview");
  }

  const AddImagesfiles = (e) => {
    const Images = [];
    setImagesfiles(e.target.files);
    for (let index = 0; index < e.target.files.length; index++) {
      Images.push(e.target.files[index])
    }
    setImagesfilesrequest([...Images]);
  }

  const RemoveImagesfiles = (value) => {
    var index = imagesfilesrequest.indexOf(value);
    if (index > -1) {
      imagesfilesrequest.splice(index, 1);
    }
    setImagesfilesrequest([...imagesfilesrequest]);
    setImagesfiles([...imagesfilesrequest]);
  }

  const AddImageslogo = (e) => {
    setImageslogo(e.target.files[0]);
    setImageslogorequest(e.target.files[0]);
  }

  const RemoveImageslogo = () => {
    setImageslogorequest(null);
    setImageslogo(imageslogorequest);
  }

  return (
    <section className='createrequest'>
      <Navbar />
      <div className="container">
        {paramsname === "createissue" ?

          <CreateIssueData Statedata={statedatatwo} Arraydataone={arraydataone} screnonedatatwo={screnonedatatwo}
            setParamsname={setParamsname} setSuppliersItems={setSuppliersItems} />

          : paramsname === "createreview" ?

            <CreateReviewData Arraydataone={arraydataone} Arraydatatwo={arraydatatwo}
              SuppliersItems={SuppliersItems} imagesfiles={imagesfiles} imageslogo={imageslogo}
              address={address}
              setParamsname={setParamsname} clickedLatLng={clickedLatLng} />

            :

            <CreateOne Statedata={statedataone} clickedLatLng={clickedLatLng}
              setClickedLatLng={setClickedLatLng} screnonedataone={screnonedataone}
              AddImagesfiles={AddImagesfiles} AddImageslogo={AddImageslogo}
              imageslogo={imageslogo} imagesfiles={imagesfiles}
              RemoveImagesfiles={RemoveImagesfiles} RemoveImageslogo={RemoveImageslogo}
              address={address} setAddress={setAddress} showaddress={showaddress} setParamsname={setParamsname}/>
        }

      </div>
    </section>
  )
}

export default CreateRequest;