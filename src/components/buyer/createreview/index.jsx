import React from 'react'
import CreateReviewBottom from './createbottom/index.jsx';
import CreateTop from '../createrequest/createtop';

function CreateReviewData(props) {
  const {Arraydataone,Arraydatatwo,SuppliersItems,address ,imagesfiles,imageslogo,setParamsname,clickedLatLng}=props;
  
  return (
    <section className='create'>
    <CreateTop StyleScreen="createreviewdata_top" setParamsname={setParamsname}/>
    <CreateReviewBottom Arraydataone={Arraydataone} Arraydatatwo={Arraydatatwo} 
    SuppliersItems={SuppliersItems} imagesfiles={imagesfiles} imageslogo={imageslogo}
    setParamsname={setParamsname} clickedLatLng={clickedLatLng} address={address}/>
</section>
  )
}

export default CreateReviewData;