import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../store/context';
import { useContext } from 'react';
import { Api } from '../../api';
import axios from 'axios';

function FormTwo() {
    const authcontext = useContext(Authcontext);
    const phone = authcontext.phone;
    const state = { code: "" };
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

     const ActivateAccountphone = async (code,phone,device_id,device_type,setMessage,setLoading) => {
        const options = {
          method: "POST",
          url: `${Api}verify-phone`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            'Access-Control-Allow-Origin': '*',
          },
          data: JSON.stringify({
            code,
            phone,
            device_id,
            device_type
          }),
        };
        axios(options)
          .then(function (response) {
            localStorage.setItem("tokenclicklized", JSON.stringify(response.data.data.user.token));
            localStorage.setItem("usertypeclicklized", JSON.stringify(response.data.data.user.user_type_id));
            localStorage.setItem("useridclicklized", JSON.stringify(response.data.data.user.id));
      
            window.location.pathname = `/updatepasswordphone`;
            if(response.data.data.user.lang === 'ar'){
              localStorage.setItem("languagecklized", JSON.stringify("Ar"));
            }else{
              localStorage.setItem("languagecklized", JSON.stringify("En"));
            }
            setMessage("")
            setLoading(false);
          })
          .catch(function (error) {
            setMessage(error.response.data.message)
            setLoading(false);
          });
      };

    const onSubmit = (values) => {
        ActivateAccountphone(values.code, phone, "default", "web", setMessage,setLoading);
        setLoading(true);
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div className="form">
                <div className='mb-3'>
                    <Field type="text"
                        className={props.errors.code ? "form-control is-invalid" : "form-control"}
                        placeholder="Enter verification code" name="code" />
                    <ErrorMessage name="code" component="span" className='errorfiled' />
                </div>
                <div className="mb-1">
                    {message === "" ? "" :
                        message === "auth.code_invalid" ?
                            <span className='errorfiled'>
                                The code is not valid to send it again Please
                                <NavLink to={"/resendcode"}> Click here</NavLink>
                            </span> :
                            <span className='errorfiled'>{message}</span>
                    }
                </div>
                <div className='mb-5'>
                    {loading === false ?
                        <button className='btn btn-send' type="submit">Confirm</button>
                        :
                        <button className="btn btn-send button-disabled">
                            Loading
                            <span className="spinner"></span>
                        </button>}
                </div>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            code: Yup.string().required("Code Is Required"),
        });

        return schema;
    }
    return (
        <div className="signin__form">
            <Formik
                initialValues={state}
                onSubmit={onSubmit}
                render={form}
                validationSchema={schema()}
                validateOnChange={false}
                validateOnBlur={false}
            />
        </div>
    )
}

export default FormTwo