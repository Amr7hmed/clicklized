import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import UploadImage from "../../../../images/icon/upload.png";

function Formprofileseller() {
    const state = {
        companyname: "",
        business_sector: "",
        cr: "",
        vat: "",
        companycr:"",
        vat_registration_date:"",
        website:"",
        country:"",
        city:"",
        address:"",
        phone:"",
        fax:"",
        payment_terms:""
    };

    const SendData = () => {
        swal({
            text: "Good !",
            icon: "success",
            buttons: false,
            timer: 3000
        })
        
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
                        <div className='col-6 input_model'>
                            <label className="form-label">User Company Name</label>
                            <Field type={"text"}
                                className={props.errors.companyname ? "form-control is-invalid" : "form-control"}
                                placeholder="Company Name here" name="companyname" />
                            <ErrorMessage name="companyname" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">Business Sector</label>
                            <Field type={"text"}
                                className={props.errors.business_sector ? "form-control is-invalid" : "form-control"}
                                placeholder="Business Sector here" name="business_sector" />
                            <ErrorMessage name="business_sector" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">CR NO.</label>
                            <Field type={"text"}
                                className={props.errors.cr ? "form-control is-invalid" : "form-control"}
                                placeholder="CR NO. here" name="cr" />
                            <ErrorMessage name="cr" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">VAT NO.</label>
                            <Field type={"text"}
                                className={props.errors.vat ? "form-control is-invalid" : "form-control"}
                                placeholder="VAT NO. here" name="vat" />
                            <ErrorMessage name="vat" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">test</label>
                            <Field type={"text"}
                                className={props.errors.cr ? "form-control is-invalid" : "form-control"}
                                placeholder="test . here" name="cr" />
                            <ErrorMessage name="cr" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">Company CR</label>
                            <Field type={"text"}
                                className={props.errors.companycr ? "form-control is-invalid" : "form-control"}
                                placeholder="Company CR. here" name="companycr" />
                            <ErrorMessage name="companycr" component="span" className='errorfiled' />
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">VAT Registration Date</label>
                            <Field type={"text"}
                                className={props.errors.vat_registration_date ? "form-control is-invalid" : "form-control"}
                                placeholder="VAT Registration Date . here" name="vat_registration_date" />
                            <ErrorMessage name="vat_registration_date" component="span" className='errorfiled' />
                        </div>
                        <div className='col-6 input_model'>
                            <label className="form-label">Payment Terms</label>
                            <Field type={"text"}
                                className={props.errors.payment_terms ? "form-control is-invalid" : "form-control"}
                                placeholder="Payment Terms. here" name="payment_terms" />
                            <ErrorMessage name="payment_terms" component="span" className='errorfiled' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">Website</label>
                            <Field type={"text"}
                                className={props.errors.website ? "form-control is-invalid" : "form-control"}
                                placeholder="Website . here" name="website" />
                            <ErrorMessage name="website" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">Country</label>
                            <Field type={"text"}
                                className={props.errors.country ? "form-control is-invalid" : "form-control"}
                                placeholder="Country . here" name="country" />
                            <ErrorMessage name="country" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">City</label>
                            <Field type={"text"}
                                className={props.errors.city ? "form-control is-invalid" : "form-control"}
                                placeholder="City. here" name="city" />
                            <ErrorMessage name="city" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">Address</label>
                            <Field type={"text"}
                                className={props.errors.address ? "form-control is-invalid" : "form-control"}
                                placeholder="Address. here" name="address" />
                            <ErrorMessage name="address" component="span" className='errorfiled' />
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">Phone No.</label>
                            <Field type={"number"}
                                className={props.errors.phone ? "form-control is-invalid" : "form-control"}
                                placeholder="Phone No. here" name="phone" />
                            <ErrorMessage name="phone" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">Fax No.</label>
                            <Field type={"number"}
                                className={props.errors.fax ? "form-control is-invalid" : "form-control"}
                                placeholder="Fax No. here" name="fax" />
                            <ErrorMessage name="fax" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='end'>
                        <button className={'btn btn-send button-active'} type="submit" >Save</button>
                        <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>

            </form>
        </>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            companyname: Yup.string().required('Required'),
            business_sector: Yup.string().required('Required'),
            cr: Yup.string().required('Required'),
            vat: Yup.string().required('Required'),
            companycr:Yup.string().required('Required'),
            vat_registration_date:Yup.string().required('Required'),
            website:Yup.string().required('Required'),
            country:Yup.string().required('Required'),
            city:Yup.string().required('Required'),
            address:Yup.string().required('Required'),
            phone: Yup.string()
            .min(9, 'The phone number must be at least 9 Digits!')
            .required("Required"),
            fax:Yup.string().required('Required'),
            payment_terms:Yup.string().required('Required'),
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

export default Formprofileseller;


