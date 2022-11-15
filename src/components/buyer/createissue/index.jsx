import React from 'react'
import CreateTop from '../createrequest/createtop/index.jsx';
import CreateIssueBottom from './createbottom/index.jsx';

function CreateIssueData(props) {
    const {Statedata,screnonedatatwo,imagesfiles,imageslogo}=props;
    console.log(imagesfiles);
    console.log(imageslogo);
    return (
        <section className='create createissuedata'>
            <CreateTop  StyleScreen="createissue_top"/>
            <CreateIssueBottom Statedata={Statedata} screnonedatatwo={screnonedatatwo}/>
        </section>
    )
}

export default CreateIssueData;