import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Inputaddress, Inputday, InputFiles, Inputinsurance, InputItems, Inputnotes, Inputquotations, Inputtransportation } from './inputs';
import ModalMap from './modalmap';
import { useNavigate } from 'react-router-dom';
import { Createrequestdata } from '../../../../../api/buyer/actionrequest';

function Form(props) {
    const {Statedata,clickedLatLng, setClickedLatLng}=props;
    const [message, setMessage] = useState("");
    let navigate  = useNavigate();

    const onSubmit = (values) => {
       // navigate(`/addrequest/createissue`);
        Createrequestdata(values)
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
            {message === "" ? "" : <span className='errorfiled'>{message}</span>}
            <div className='end'>
                <button className='btn btn-next' type="submit">Next</button>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            numberrequired: Yup.string()
                .min(8, 'Too Short!')
                .max(14, 'Too Long!').required("Number Required"),
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
