import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import { Inputaddress, Inputday, InputFiles, Inputinsurance, InputItems, Inputnotes, Inputquotations, Inputtransportation } from './inputs';
import ModalMap from './modalmap';

function Form() {
    const [clickedLatLng, setClickedLatLng] = useState(null);
    const state = {
        numberrequired: "",
        items: [
            {
                item:"",
                quantity:""
            },
        ],
        address: "",
        day: "",
        inputinsurance: "yes",
        transportation: "included",
        notes: "",
        files: "",
        logo: "",
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
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <Inputquotations errors={props.errors} />
            <InputItems values={props.values} errors={props.errors} />
            <Inputaddress errors={props.errors} />
            <Inputday data={props} />
            <Inputinsurance Data={props} />
            <Inputtransportation Data={props} />
            <Inputnotes />
            <InputFiles />
            <ModalMap clickedLatLng={clickedLatLng} setClickedLatLng={setClickedLatLng}/>
            <div className='end'>
                <button className='btn btn-next' type="submit">Next</button>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            numberrequired: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!').required("Number Required"),
            address: Yup.string().required("Address Required"),
            day: Yup.string().required("Day Is Required"),
            files: Yup.string().required("Files Is Required"),
            logo: Yup.string().required("Logo Is Required"),
            
            items: Yup.array()
            .min(2, "You need at least one Item")
            .required("")
        });





        return schema;
    }
    return (
        <div className="form">
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
