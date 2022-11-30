import React from 'react'
import CreateReviewBottom from './createbottom/index.jsx';
import CreateTop from '../createrequest/createtop';

function CreateReviewData(props) {
  const {Arraydataone,Arraydatatwo,SuppliersItems ,imagesfiles,imageslogo,setParamsname,clickedLatLng}=props;
  
  return (
    <section className='create'>
    <CreateTop StyleScreen="createreviewdata_top"/>
    <CreateReviewBottom Arraydataone={Arraydataone} Arraydatatwo={Arraydatatwo} 
    SuppliersItems={SuppliersItems} imagesfiles={imagesfiles} imageslogo={imageslogo}
    setParamsname={setParamsname} clickedLatLng={clickedLatLng} />
</section>
  )
}

export default CreateReviewData;