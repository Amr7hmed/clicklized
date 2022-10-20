import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import UploadImage from "../../../../images/icon/upload.png";

function Formprofile() {
    const state = {
        name: "",
        email: "",
        phone: "",
        industry: "",
        cr_files: "",
        vat_files: ""
    };

    const SendData = () => {
        /*
        swal({
            text: "Good !",
            icon: "success",
            buttons: false,
            timer: 3000
        })
        */
       window.location.reload();

    }
    const onSubmit = (values) => {
        console.log(values);
        SendData();
    }


    const form = (props) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">User Name</label>
                            <Field type={"text"}
                                className={props.errors.name ? "form-control is-invalid" : "form-control"}
                                placeholder="User Name" name="name" />
                            <ErrorMessage name="name" component="span" className='errorfiled' />
                        </div>

                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">Bussiness Email</label>
                            <Field type={"email"}
                                className={props.errors.email ? "form-control is-invalid" : "form-control"}
                                placeholder="Bussiness Email" name="email" />
                            <ErrorMessage name="email" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">Contact Number</label>
                            <Field type={"text"}
                                className={props.errors.phone ? "form-control is-invalid" : "form-control"}
                                placeholder="Contact Number" name="phone" />
                            <ErrorMessage name="phone" component="span" className='errorfiled' />
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">Company Industry</label>

                            <Field name="industry" component="select"
                                className={props.errors.industry ? "form-select is-invalid" : "form-select"} >
                                <option></option>
                                <option value="industry">industry</option>
                                <option value="industrytwo">industrytwo</option>
                            </Field>

                            <ErrorMessage name="industry" component="span" className='errorfiled' />
                        </div>

                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">Company CR</label>
                            <button type='button'
                                className={props.errors.cr_files ? "btn btn-upload is-invalid" : "btn btn-upload"}>
                                <Field type={"file"}
                                    className="input-file" name="cr_files" />
                                <img src={UploadImage} alt="" />
                                Upload files
                            </button>
                            <ErrorMessage name="cr_files" component="span" className='errorfiled' />
                        </div>
                    </div>




                    <div className='row'>

                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">Company VAT</label>
                            <button type='button'
                                className={props.errors.vat_files ? "btn btn-upload is-invalid" : "btn btn-upload"}>
                                <Field type={"file"}
                                    className="input-file" name="vat_files" />
                                <img src={UploadImage} alt="" />
                                Upload files
                            </button>
                            <ErrorMessage name="vat_files" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='end'>

                        <button className={props.errors.name ||
                            props.errors.email ||
                            props.errors.phone ||
                            props.errors.industry ||
                            props.errors.cr_files ||
                            props.errors.vat_files ?
                            'btn btn-send button-disabled' :
                            'btn btn-send button-active'}
                            data-bs-dismiss="modal"
                            type="submit" >Save</button>

                        <button type="button" className="btn btn-cancel"
                            data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>

            </form>
        </>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            name: Yup.string().required('User name Required'),
            email: Yup.string().required('Bussiness Email Required'),
            phone: Yup.string().required('Contact Number Required'),
            industry: Yup.string().required('Company Industry Required'),
            cr_files: Yup.string().required('Company CR Required'),
            vat_files: Yup.string().required('Company VAT Required'),
        });

        return schema;
    }
    return (
        <>
            <Formik
                initialValues={state}
                onSubmit={onSubmit}
                render={form}
                validationSchema={schema()}
                validateOnChange={false}
                validateOnBlur={false}
            />
        </>
    )
}

export default Formprofile;


