import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { Inputaddress, Inputday, Fileslist, Inputinsurance, InputItems, Inputnotes, Inputquotations, Inputtransportation, Supplierslist } from './inputs';
import { NavLink, useNavigate } from 'react-router-dom';
import IconProfile from "../../../../../images/icon/img-profile.jpg";

function Form() {
    let navigate  = useNavigate();
    const state = {
        numberrequired: "test",
        items: [
            {
                item:"one",
                quantity:"1"
            },
            {
                item:"two",
                quantity:"2"
            },
        ],
        address: "21 set-test cairo",
        day: "25/10/2022",
        inputinsurance: "yes",
        transportation: "included",
        notes: "test data",
        fileslist: ["file.pdf","fileone.pdf","filetwo.pdf"],
        supplierslist: [
            {
                id:1,
                img:IconProfile,
                name:"Supplier name"
            },{
                id:2,
                img:IconProfile,
                name:"Supplier name"
            }
        ],
        checkboxtoggle: true,
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
        //navigate(`/createissue`);
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <Inputquotations errors={props.errors} Data={props}/>
            <InputItems values={props.values} errors={props.errors} />
            <Inputaddress errors={props.errors} Data={props}/>
            <Inputday data={props.values} />
            <Inputinsurance Data={props} />
            <Inputtransportation Data={props} />
            <Inputnotes Data={props}/>
            <Fileslist Data={props}/>
            <Supplierslist Data={props}/>
            <div className='end'>
                <div>
                <NavLink to={"/addrequest/createreview"} className='btn btn-cancel' >
                    Cancel
                </NavLink>
                <button className='btn btn-download'>Download as pdf</button>
                </div>
                <button className='btn btn-next' type="submit">Next</button>
            </div>

        </form>
    }


    return (
        <div className="form">
            <Formik
                initialValues={state}
                onSubmit={onSubmit}
                render={form}
                enableReinitialize={true}
            />
        </div>
    )
}

export default Form;
