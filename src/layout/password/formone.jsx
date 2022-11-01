import React  from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ForgetPassword } from '../../api/actionsauth';

function FormOne() {
    const state = { email: ""};

    const SendData = (date) => {
       ForgetPassword(date)
    }
    const onSubmit = (values) => {
        console.log(values);
        SendData(values.email);
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div className="form">
                <div className='mb-3'>
                    <Field type="email"
                        className={props.errors.email ? "form-control is-invalid" : "form-control"}
                        placeholder="Enter your email" name="email" />
                    <ErrorMessage name="email" component="span" className='errorfiled' />
                </div>
                <div className='mb-5'>
                    <button className='btn btn-send' type="submit">Send verification code</button>
                </div>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            email: Yup.string().required("Email Is Required"),
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

export default FormOne