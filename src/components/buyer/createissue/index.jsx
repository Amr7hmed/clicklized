import React from 'react'
import CreateTop from '../createrequest/createtop/index.jsx';
import CreateIssueBottom from './createbottom/index.jsx';

function CreateIssueData() {
    return (
        <section className='create createissuedata'>
            <CreateTop  StyleScreen="createissue_top"/>
            <CreateIssueBottom/>
        </section>
    )
}

export default CreateIssueData;