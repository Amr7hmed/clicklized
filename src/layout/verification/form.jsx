import React, { useState}  from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from 'react-router-dom';
import { ActivateAccount } from '../../api/actionsauth';

function FormVerification() {
    const state = { code: ""};
    const [message, setMessage] = useState("");
    const email = JSON.parse(localStorage.getItem("emailclicklized"))


    const onSubmit = (values) => {
     ActivateAccount(values.code,email,"default","web",setMessage);
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
                {message === ""? "": 
                    message === "auth.code_invalid" ?
                    <span className='errorfiled'>
                        The code is not valid to send it again Please
                        <NavLink to={"/resendcode"}> Click here</NavLink>
                    </span>:
                    <span className='errorfiled'>{message}</span>
                    }
                </div>
                <div className='mb-5'>
                    <button className='btn btn-send' type="submit">Confirm</button>
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

export default FormVerification