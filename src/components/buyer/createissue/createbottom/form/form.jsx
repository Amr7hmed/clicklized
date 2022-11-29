import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Inputcheckbox, Inputcompany, InputSupplierslist } from "./inputs.jsx";
import ModalSuppliersList from './modallsupplierslist.jsx';
import { Authcontext } from '../../../../../store/context.js';
import { useContext } from 'react';

function Form(props) {
    const { Statedata, screnonedatatwo, setParamsname, setSuppliersItems } = props;

    const authcontext = useContext(Authcontext);
    const setCheckboxtogglerequest = authcontext.setCheckboxtogglerequest;
    const setSupplierslistrequest = authcontext.setSupplierslistrequest;
    const setCompanynamerequest = authcontext.setCompanynamerequest;
    const setCompanyemailrequest = authcontext.setCompanyemailrequest;
    const setContactnumebrrequest = authcontext.setContactnumebrrequest;
    const supplierslistrequest = authcontext.supplierslistrequest;

    const onSubmit = (values) => {
        if (supplierslistrequest.length === 0) {
            return false;
        } else {
            screnonedatatwo(values)
            setCheckboxtogglerequest(values.checkboxtoggle);
            setCompanynamerequest(values.companyname);
            setCompanyemailrequest(values.companyemail);
            setContactnumebrrequest(values.contactnumebr);
        }
    }


    const AddSuppliers = (e, item) => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            e.target.innerHTML = "Add";

            let remainingArr = supplierslistrequest.filter(data => data.id != item.id);
            setSupplierslistrequest([...remainingArr]);
            setSuppliersItems([...remainingArr]);
        } else {
            e.target.classList.add('active');
            e.target.innerHTML = "Added";
            setSupplierslistrequest([...supplierslistrequest, item])
            setSuppliersItems([...supplierslistrequest, item]);
        }
    }
    const DoneAdded = () => {
        setSupplierslistrequest([...supplierslistrequest]);
        setSuppliersItems([...supplierslistrequest]);
    }

    const RemoveallSuppliers = () => {
        setSupplierslistrequest([]);
        setSuppliersItems([]);
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <InputSupplierslist supplierslistrequest={supplierslistrequest} setSupplierslistrequest={setSupplierslistrequest} />
            <Inputcompany />
            <Inputcheckbox />
            <ModalSuppliersList AddSuppliers={AddSuppliers} DoneAdded={DoneAdded} RemoveallSuppliers={RemoveallSuppliers} />



            <div className='end'>
                <button className='btn btn-cancel' onClick={() => { setParamsname(""); }} >
                    Back
                </button>
                <button className='btn btn-next' type="submit">Next</button>
            </div>
        </form>
    }
    const schema = () => {
        const schema = Yup.object().shape({
            contactnumebr: Yup.string()
                .min(9, 'The Contact Number must be at least 9 Digits !')
                .max(14, 'Contact Number Must Be No More Than 14 !'),
        });

        return schema;
    }

    return (
        <div className="createissue">
            <Formik
                initialValues={Statedata}
                onSubmit={onSubmit}
                render={form}
                validationSchema={schema()}
                validateOnChange={false}
                validateOnBlur={false}
            />
        </div>
    )
}

export default Form;
