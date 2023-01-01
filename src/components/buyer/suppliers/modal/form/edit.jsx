import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Authcontext } from '../../../../../store/context';
import { useContext } from 'react';
import { GetDataCaity, GetDataIndustries } from '../../../../../api/profile';

function FormEditSuppliers() {
    let navigate  = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loadingcaity, setLoadingcaity] = useState(false);
    const [dataindustries, setDataIndustries] = useState([]);
    const [dataicaity, setDataicaity] = useState([]);
    const [message, setMessage] = useState("");

    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    useEffect(() => {
        GetDataIndustries(setLoading, setDataIndustries);
        GetDataCaity(setLoadingcaity,setDataicaity)
    }, [loading]);

    const state = {
        name: "",
        email: "",
        phone: "",
        industry: "",
        city: "",
    };
    

    const onSubmit = (values) => {
       // AddNewSupplier(values,setMessage)
    }

    const form = (props) => {
        return <>
        <form onSubmit={props.handleSubmit}>
            <div className="modal-body">
                <div className='row'>
                    <div className='col-12 col-lg-6 input_model'>
                        <label className="form-label">
                        {language === "Ar" ?"اسم الشركة":"Company Name"}
                        </label>
                        <Field type={"text"}
                            className={props.errors.name ? "form-control is-invalid" : "form-control"}
                            placeholder=
                            {language === "Ar" ?"اسم الشركة هنا":"Company Name here"}
                             name="name" />
                        <ErrorMessage name="name" component="span" className='errorfiled' />
                    </div>

                    <div className='col-12 col-lg-6 input_model'>
                        <label className="form-label">
                        {language === "Ar" ?"قطاع الشركة":"Company Industry"}
                        </label>

                        {loading === false ? "" : 
                        <Field name="industry" component="select"
                            className={props.errors.industry ? "form-select is-invalid" : "form-select"} >
                            <option>
                                {language === "Ar" ?"قطاع الشركة":"Company Industry"}
                            </option>
                            {dataindustries.map(item =>
                            <option value={item.id} key={item.id}>{item.name}</option>
                            )}
                        </Field>
                        }

                        <ErrorMessage name="industry" component="span" className='errorfiled' />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-lg-6 input_model'>
                        <label className="form-label">
                        {language === "Ar" ?"المدينة":"City"}
                        </label>

                        {loadingcaity === false ? "" : 
                        <Field name="city" component="select"
                            className={props.errors.city ? "form-select is-invalid" : "form-select"} >
                            <option>
                            {language === "Ar" ?"المدينة":"City"}
                            </option>
                            {dataicaity.map(item =>
                            <option value={item.id} key={item.id}>{item.name}</option>
                            )}
                        </Field>
                        }

                        <ErrorMessage name="city" component="span" className='errorfiled' />
                    </div>
                </div>


                <div className='row'>
                    <div className='col-12 col-lg-6 input_model'>
                        <label className="form-label">
                        {language === "Ar" ?"رقم التواصل":"Contact number"}
                        </label>
                        <Field type={"text"}
                            className={props.errors.phone ? "form-control is-invalid" : "form-control"}
                            placeholder=
                            {language === "Ar" ?"رقم التواصل":"Contact number"}
                             name="phone" />
                        <ErrorMessage name="phone" component="span" className='errorfiled' />
                    </div>
                    
                    <div className='col-12 col-lg-6 input_model'>
                        <label className="form-label">
                            {language === "Ar" ?"البريد الإلكتروني":"Email"}
                            </label>
                        <Field type={"email"}
                            className={props.errors.email ? "form-control is-invalid" : "form-control"}
                            placeholder=
                            {language === "Ar" ?"البريد الإلكتروني":"Email"}
                             name="email" />
                        <ErrorMessage name="email" component="span" className='errorfiled' />
                    </div>
                </div>
                {message === "" ? "" : <span className='errorfiled'>{message}</span>}


                <div className='end'>

                    <button className={'btn btn-send'}
                        type="submit" >
                        {language === "Ar" ?"حفظ":"Save"}
                        </button>

                    <button type="button" className="btn btn-cancel"
                        data-bs-dismiss="modal">
                        {language === "Ar" ?"إلغاء":"Cancel"}
                        </button>
                </div>
            </div>

        </form>
        </>
    }

   
    const schema = () => {
        const schema = Yup.object().shape({
            name: Yup.string().required(<>
                {language === "Ar" ?"اسم الشركة مطلوب":'Company name Required'}
            </>
            ),
            email: Yup.string().required(<>
                {language === "Ar" ?"البريد الإلكتروني مطلوب":'Company Email Required'}
            </>
            ),
            phone: Yup.string().required(<>
                {language === "Ar" ?"رقم التواصل مطلوب":'Contact Number Required'}
            </>
            ),
            industry: Yup.string().required(<>
                {language === "Ar" ?"قطاع الشركة مطلوب":'Company Industry Required'}
            </>
            ),
            city: Yup.string().required(<>
                {language === "Ar" ?"المدينة مطلوب":'City Required'}
            </>
            ),
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


