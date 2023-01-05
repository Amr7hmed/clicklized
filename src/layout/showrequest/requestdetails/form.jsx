import React, { useState } from 'react';
import { Formik } from "formik";
import { Inputaddress, Inputday, Fileslist, Inputinsurance,
     InputItems, Inputnotes, Inputquotations, Inputtransportation, 
     Supplierslist } from './inputs';
import { useLocation } from 'react-router-dom';

function Form(props) {
    const {state}=props;
    let location = useLocation(),
      textlocation = location.pathname,
      resultseller = textlocation.includes("seller");
    


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
            {resultseller === true ? "":<Supplierslist Data={props}/>}

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
