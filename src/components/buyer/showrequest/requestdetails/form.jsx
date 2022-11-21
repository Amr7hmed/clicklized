import React, { useState } from 'react';
import { Formik } from "formik";
import { Inputaddress, Inputday, Fileslist, Inputinsurance,
     InputItems, Inputnotes, Inputquotations, Inputtransportation, 
     Supplierslist } from './inputs';

function Form(props) {
    const {state}=props;
    


    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <Inputquotations errors={props.errors} Data={props}/>
            <InputItems values={props.values} errors={props.errors} />
            <Inputaddress errors={props.errors} Data={props}/>
            <Inputday Data={props} />
            <Inputinsurance Data={props} />
            <Inputtransportation Data={props} />
            <Inputnotes Data={props}/>
            <Fileslist Data={props}/>
            <Supplierslist Data={props}/>

        </form>
    }

    return (
        <div className="form">
            <Formik 
            enableReinitialize={true}
            initialValues={state} 
            render={form}/>
        </div>
    )
}

export default Form;
