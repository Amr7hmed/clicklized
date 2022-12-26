import React, { useContext } from 'react';
import { Authcontext } from '../../../../store/context.js';
import Form from './form/form.jsx';

function CreateReviewBottom(props) {
  const {Arraydataone,address,Arraydatatwo,SuppliersItems,imagesfiles ,imageslogo,setParamsname,clickedLatLng}=props;
  

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='createreview'>
    <div className='screenone'>
        <div className="title">
            <h6>
              {language === "Ar" ? " " : "RFP"}
            </h6>
        </div>
        <Form Arraydataone={Arraydataone} Arraydatatwo={Arraydatatwo} SuppliersItems={SuppliersItems}
        imagesfiles={imagesfiles} imageslogo={imageslogo} setParamsname={setParamsname} clickedLatLng={clickedLatLng}
        address={address}/>
    </div>
    </div>
  )
}

export default CreateReviewBottom;