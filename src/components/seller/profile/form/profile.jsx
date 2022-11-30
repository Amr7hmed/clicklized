import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import UploadImage from "../../../../images/icon/upload.png";
import { GetDataIndustries, UpdateProfile } from '../../../../api/seller/actionsprofile';
import { GetDataCaity, GetDataCountries } from '../../../../api/buyer/actionsuppliers';
import { useEffect } from 'react';
import DatePickerdatacrexpire from './datepickercrexpire';
import DatePickerdatacrissue from './datepickerdatacrissue';
import DatePickerregistration from './datepickerregistration';

function Formprofileseller(props) {
    const {Data}=props;
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [dataindustries, setDataIndustries] = useState([]);
    const [loadingcaity, setLoadingcaity] = useState(false);
    const [dataicaity, setDataicaity] = useState([]);

    useEffect(() => {
        GetDataIndustries(setLoading, setDataIndustries);
        GetDataCaity(setLoadingcaity,setDataicaity);
    }, [loadingcaity]);



    const state = {
        companyname: "",
        business_sector: "",
        fax:"",
        cr: "",
        website:"",
        city:"",
        address:"",
        vat: "",
        cr_issue_date:"",
        cr_expire_date: "",
        vat_registration_date:"",
        company_email:"",
        payment_terms:"",
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
       UpdateProfile(Data,values,setMessage)
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
                            {loading === false ? "" : 
                            <Field name="business_sector" component="select"
                                className={props.errors.business_sector ? "form-select is-invalid" : "form-select"} >
                                <option>Business Sector here</option>
                                {dataindustries.map(item =>
                                <option value={item.id} key={item.id}>{item.name}</option>
                                )}
                            </Field>
                            }
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
                            <label className="form-label">CR Issue Date</label>
                            <DatePickerdatacrissue  Data={props} />
                            <ErrorMessage name="cr_issue_date" component="span" className='errorfiled' />
                        </div>
                        
                        <div className='col-6 input_model'>
                            <label className="form-label">CR Expiry Date</label>
                                <DatePickerdatacrexpire Data={props} />
                                <ErrorMessage name="cr_expire_date" component="span" className='errorfiled' />
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">VAT Registration Date</label>
                            <DatePickerregistration  Data={props}/>
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
                            <label className="form-label">Fax No.</label>
                            <Field type={"number"}
                                className={props.errors.fax ? "form-control is-invalid" : "form-control"}
                                placeholder="Fax No. here" name="fax" />
                            <ErrorMessage name="fax" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">City</label>
                            {loadingcaity === false ? "" : 
                            <Field name="city" component="select"
                                className={props.errors.city ? "form-select is-invalid" : "form-select"} >
                                <option>City here</option>
                                {dataicaity.map(item =><option value={item.id} key={item.id}>{item.name}</option>)}
                            </Field>
                            }
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
                            <label className="form-label">Company Email No.</label>
                            <Field type={"email"}
                                className={props.errors.company_email ? "form-control is-invalid" : "form-control"}
                                placeholder="Company Email No. here" name="company_email" />
                            <ErrorMessage name="company_email" component="span" className='errorfiled' />
                        </div>

                    </div>
                    {message === "" ? "" : <span className='errorfiled'>{message}</span>}

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
            cr_issue_date:Yup.string().required('Required'),
            vat_registration_date:Yup.string().required('Required'),
            website:Yup.string().required('Required'),
            city:Yup.string().required('Required'),
            address:Yup.string().required('Required'),
            company_email: Yup.string().required("Required"),
            fax:Yup.string().required('Required'),
            payment_terms:Yup.string().required('Required'),
            cr_expire_date: Yup.string().required("Required"),
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


