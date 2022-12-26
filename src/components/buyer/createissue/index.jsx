import React from 'react'
import CreateTop from '../createrequest/createtop/index.jsx';
import CreateIssueBottom from './createbottom/index.jsx';

function CreateIssueData(props) {
    const {Statedata,screnonedatatwo,setParamsname, setSuppliersItems}=props;
    

    return (
        <section className='create createissuedata'>
            <CreateTop  StyleScreen="createissue_top" setParamsname={setParamsname}/>
            <CreateIssueBottom Statedata={Statedata} screnonedatatwo={screnonedatatwo} setParamsname={setParamsname}
            setSuppliersItems={setSuppliersItems}/>
        </section>
    )
}

export default CreateIssueData;