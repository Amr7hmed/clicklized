import React  from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { ForgetPasswordcode } from '../../api/actions';

function FormOne() {
    const state = { code: ""};

    const SendData = (date) => {
        swal({
            text: "Good !",
            icon: "success",
            buttons: false,
            timer: 3000
        })
       ForgetPasswordcode(date);

    }
    const onSubmit = (values) => {
        console.log(values);
        SendData(values.code);
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
                <div className='mb-5'>
                    <button className='btn btn-send' type="submit">Confirm</button>
                </div>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            code: Yup.string().required(),
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
        />
    </div>
  )
}

export default FormOne