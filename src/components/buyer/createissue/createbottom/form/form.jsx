import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import {Inputcheckbox, Inputcompany, InputSupplierslist} from "./inputs.jsx";
import { useNavigate } from 'react-router-dom';
import ModalSuppliersList from './modallsupplierslist.jsx';

function Form() {
    const [clickedLatLng, setClickedLatLng] = useState(null);
    let navigate  = useNavigate();
    const state = {
        companyname: "",
        companyemail: "",
        contactnumebr:"",
        checkboxtoggle: false,
    };

    const SendData = (date) => {
        swal({
            text: "Good !",
            icon: "success",
            buttons: false,
            timer: 3000
        })

    }
    const onSubmit = (values) => {
        console.log(values);
        console.log(clickedLatLng);
        navigate(`/createreview`);
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <InputSupplierslist/>
            <Inputcompany errors={props.errors} />
            <Inputcheckbox/>
            <ModalSuppliersList/>
            <div className='end'>
                <button className='btn btn-cancel' type="type">Cancel</button>
                <button className='btn btn-next' type="submit">Next</button>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            companyname: Yup.string().required("Company Name Required"),
            companyemail: Yup.string().required("Company Email Required"),
            contactnumebr: Yup.string().required("Contact Numebr Required"),
        });





        return schema;
    }
    return (
        <div className="createissue">
            <Formik
                initialValues={state}
                onSubmit={onSubmit}
                render={form}
                validationSchema={schema()}
            />
        </div>
    )
}

export default Form;
