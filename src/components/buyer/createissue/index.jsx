import React from 'react'
import CreateTop from '../createrequest/createtop/index.jsx';
import CreateIssueBottom from './createbottom/index.jsx';

function CreateIssueData(props) {
    const {Statedata}=props;
    return (
        <section className='create createissuedata'>
            <CreateTop  StyleScreen="createissue_top"/>
            <CreateIssueBottom Statedata={Statedata}/>
        </section>
    )
}

export default CreateIssueData;