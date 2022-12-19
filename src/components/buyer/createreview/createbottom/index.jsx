import React from 'react';
import Form from './form/form.jsx';

function CreateReviewBottom(props) {
  const {Arraydataone,address,Arraydatatwo,SuppliersItems,imagesfiles ,imageslogo,setParamsname,clickedLatLng}=props;
  return (
    <div className='createreview'>
    <div className='screenone'>
        <div className="title">
            <h6>RFP</h6>
        </div>
        <Form Arraydataone={Arraydataone} Arraydatatwo={Arraydatatwo} SuppliersItems={SuppliersItems}
        imagesfiles={imagesfiles} imageslogo={imageslogo} setParamsname={setParamsname} clickedLatLng={clickedLatLng}
        address={address}/>
    </div>
    </div>
  )
}

export default CreateReviewBottom;