import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import { Inputaddress, Inputday, Inputquotations } from './inputs';

function Form() {
    const state = { 
        numberrequired : "",
        address:"",
        day:"",
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
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
                <Inputquotations errors={props.errors}/>

                <Inputaddress errors={props.errors}/>
                <Inputday data={props}/>
                <div className='end'>
                    <button className='btn btn-send' type="submit">Sign in</button>
                </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            numberrequired : Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!').required("Number Required"),
            address : Yup.string().required("Address Required"),
            day: Yup.string().required("Day Is Required"),
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
