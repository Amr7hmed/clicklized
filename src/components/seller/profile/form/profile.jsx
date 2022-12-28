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
import { Authcontext } from '../../../../store/context';
import { useContext } from 'react';

function Formprofileseller(props) {
    const {Data}=props;
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [dataindustries, setDataIndustries] = useState([]);
    const [loadingcaity, setLoadingcaity] = useState(false);
    const [dataicaity, setDataicaity] = useState([]);
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;


    const [messagecrissuedate, setMessagecrissuedate] = useState("");
    const [messagecrexpiredate, setMessagecrexpiredate] = useState("");
    const [messagevatregistrationdate, setMessagevatregistrationdate] = useState("");

    
    useEffect(() => {
        GetDataIndustries(setLoading, setDataIndustries);
        GetDataCaity(setLoadingcaity,setDataicaity);
    }, [loadingcaity]);

    const state = {
        companyname: Data.supplier.company_name === null ?"":Data.supplier.company_name,
        business_sector: Data.industry === null ?"":Data.industry.id,
        fax:Data.supplier.fax_number === null ?"":Data.supplier.fax_number,
        cr: Data.supplier.cr_number=== null ?"":Data.supplier.cr_number,
        website:Data.supplier.website === null?"":Data.supplier.website,
        city:Data.city.length === 0 ?"":Data.city.id,
        address:Data.supplier.address === null ?"":Data.supplier.address,
        vat: Data.supplier.vat_number === null ?"":Data.supplier.vat_number,
        cr_issue_date: "",
        cr_expire_date: "",
        vat_registration_date:"",
        company_email:Data.supplier.business_email === null ? "" : Data.supplier.business_email,
        payment_terms:Data.supplier.payment_terms === null ?"":Data.supplier.payment_terms,
        languageaccounet:language,
    };

    const onSubmit = (values) => {
        console.log(values);
       UpdateProfile(Data,values,language,setMessage,setMessagecrissuedate,setMessagecrexpiredate,setMessagevatregistrationdate)

    }
    const form = (props) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">
                                    {language === "Ar" ? "اسم الشركة" : "Company Name"}
                            </label>
                            <Field type={"text"}
                                className={props.errors.companyname ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ? "اسم الشركة هنا" : "Company Name Here" }
                                name="companyname" />
                            <ErrorMessage name="companyname" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">
                                    {language === "Ar" ? "قطاع الأعمال" : "Business Sector"}
                            </label>
                            {loading === false ? "" : 
                            <Field name="business_sector" component="select"
                                className={props.errors.business_sector ? "form-select is-invalid" : "form-select"} >
                                <option>
                                    {language === "Ar" ? "قطاع الأعمال" : "Business Sector here"}
                                </option>
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
                            <label className="form-label">
                                    {language === "Ar" ? "رقم السجل التجاري" : "CR NO."}
                                </label>
                            <Field type={"text"}
                                className={props.errors.cr ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ? "رقم السجل التجاري" : "CR NO."}
                                name="cr" />
                            <ErrorMessage name="cr" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "رقم القيمة المضافة" : "VAT NO."}
                            </label>
                            <Field type={"text"}
                                className={props.errors.vat ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ? "رقم القيمة المضافة" : "VAT NO."}
                                 name="vat" />
                            <ErrorMessage name="vat" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "تاريخ إصدار السجل التجاري" : "CR Issue Date"}
                            </label>
                            <DatePickerdatacrissue  Data={props} DataAccount={Data}
                            messagecrissuedate={messagecrissuedate}/>
                            {messagecrissuedate === "" ? "" : <span className='errorfiled'>{messagecrissuedate}</span>}
                        </div>
                        
                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "تاريخ أنتهاء السجل التجاري" : "CR Expiry Date"}
                                </label>
                                <DatePickerdatacrexpire Data={props} DataAccount={Data} messagecrexpiredate={messagecrexpiredate}/>
                            {messagecrexpiredate === "" ? "" : <span className='errorfiled'>{messagecrexpiredate}</span>}
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">
                            {language === "Ar" ? 
                                        "تاريخ التسجيل في ضريبة القيمة المضافة"
                                         : "VAT Registration Date"}
                                </label>
                            <DatePickerregistration  Data={props}  DataAccount={Data}
                             messagevatregistrationdate={messagevatregistrationdate}/>
                            {messagevatregistrationdate === "" ? "" : <span className='errorfiled'>{messagevatregistrationdate}</span>}
                        </div>
                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "طريقه الدفع": "Payment Terms"}
                            </label>
                            <Field type={"text"}
                                className={props.errors.payment_terms ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ? "طريقه الدفع": "Payment Terms"}
                                 name="payment_terms" />
                            <ErrorMessage name="payment_terms" component="span" className='errorfiled' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "الموقع الألكتروني": "Website"}
                            </label>
                            <Field type={"text"}
                                className={props.errors.website ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ? "الموقع الألكتروني": "Website"}
                                 name="website" />
                            <ErrorMessage name="website" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "رقم الفاكس": "Fax No."}
                                </label>
                            <Field type={"number"}
                                className={props.errors.fax ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ? "رقم الفاكس": "Fax No."}
                                 name="fax" />
                            <ErrorMessage name="fax" component="span" className='errorfiled' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "المدينة": "City"}
                            </label>
                            {loadingcaity === false ? "" : 
                            <Field name="city" component="select"
                                className={props.errors.city ? "form-select is-invalid" : "form-select"} >
                                <option>
                                        {language === "Ar" ? "المدينة": "City"}
                                </option>
                                {dataicaity.map(item =><option value={item.id} key={item.id}>{item.name}</option>)}
                            </Field>
                            }
                            <ErrorMessage name="city" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "العنوان": "Address"}
                            </label>
                            <Field type={"text"}
                                className={props.errors.address ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ? "العنوان": "Address"}
                                 name="address" />
                            <ErrorMessage name="address" component="span" className='errorfiled' />
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-6 input_model'>
                            <label className="form-label">
                                        {language === "Ar" ? "البريد الإلكتروني للشركة": "Company Email"}
                            </label>
                            <Field type={"email"}
                                className={props.errors.company_email ? "form-control is-invalid" : "form-control"}
                                placeholder=
                                {language === "Ar" ? "البريد الإلكتروني للشركة": "Company Email"}
                                 name="company_email" />
                            <ErrorMessage name="company_email" component="span" className='errorfiled' />
                        </div>

                        <div className='col-6 input_model'>
                            <label className="form-label">
                            {language === "Ar" ? "اللغة": "Language"}
                            </label>
                            <Field name="languageaccounet" component="select"
                                className={props.errors.languageaccounet ? "form-select is-invalid" : "form-select"} 
                                >
                                <option value={"Ar"} >عربي</option>
                                <option value={"En"}>English</option>
                            </Field>
                            <ErrorMessage name="languageaccounet" component="span" className='errorfiled' />
                        </div>
                    </div>
                    {message === "" ? "" : <span className='errorfiled'>{message}</span>}

                    <div className='end'>
                        <button className={'btn btn-send button-active'} type="submit" >
                            {language === "Ar" ?"حفظ":"Save"}
                        </button>
                        <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">
                            {language === "Ar" ?"ألغاء":"Cancel"}
                        </button>
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
           // cr_issue_date:Yup.string().required('Required'),
           // vat_registration_date:Yup.string().required('Required'),
            website:Yup.string().required('Required'),
            city:Yup.string().required('Required'),
            address:Yup.string().required('Required'),
            company_email: Yup.string().required("Required"),
            fax:Yup.string().required('Required'),
            payment_terms:Yup.string().required('Required'),
            //cr_expire_date: Yup.string().required("Required"),
            languageaccounet: Yup.string().required("Required"),
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


