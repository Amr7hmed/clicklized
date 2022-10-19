import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function FormEditSuppliers() {
    let navigate  = useNavigate();
    const state = {
        name: "",
        email: "",
        phone: "",
        industry: "",
        city: "",
    };

    const SendData = () => {
        swal({
            text: "Good !",
            icon: "success",
            buttons: false,
            timer: 3000
        })
       // navigate(`/suppliers`);
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
                            <label className="form-label">Company Name</label>
                            <Field type={"text"}
                                className={props.errors.name ? "form-control is-invalid" : "form-control"}
                                placeholder="Company Name here" name="name" />
                            <ErrorMessage name="name" component="span" className='errorfiled' />
                        </div>

                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">Company Industry</label>

                            <Field name="industry" component="select"
                                className={props.errors.industry ? "form-select is-invalid" : "form-select"} >
                                <option>
                                Company industry
                                </option>
                                <option value="industry">industry</option>
                                <option value="industrytwo">industrytwo</option>
                            </Field>

                            <ErrorMessage name="industry" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">City</label>

                            <Field name="city" component="select"
                                className={props.errors.city ? "form-select is-invalid" : "form-select"} >
                                <option>
                                City
                                </option>
                                <option value="cairo">Cairo</option>
                                <option value="riyadh">Riyadh</option>
                            </Field>

                            <ErrorMessage name="city" component="span" className='errorfiled' />
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">Contact number</label>
                            <Field type={"text"}
                                className={props.errors.phone ? "form-control is-invalid" : "form-control"}
                                placeholder="Enter contact number" name="phone" />
                            <ErrorMessage name="phone" component="span" className='errorfiled' />
                        </div>
                        
                        <div className='col-12 col-lg-6 input_model'>
                            <label className="form-label">Email</label>
                            <Field type={"email"}
                                className={props.errors.email ? "form-control is-invalid" : "form-control"}
                                placeholder="Enter email" name="email" />
                            <ErrorMessage name="email" component="span" className='errorfiled' />
                        </div>
                    </div>


                    <div className='end'>

                        <button className={'btn btn-send'}
                            type="submit" >Save edits</button>

                        <button type="button" className="btn btn-cancel"
                            data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>

            </form>
        </>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            name: Yup.string().required('Company name Required'),
            email: Yup.string().required('Company Email Required'),
            phone: Yup.string().required('Contact Number Required'),
            industry: Yup.string().required('Company Industry Required'),
            city: Yup.string().required('City Required'),
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

export default FormEditSuppliers;


