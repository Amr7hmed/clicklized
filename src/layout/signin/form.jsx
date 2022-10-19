import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import Invisible from "../../images/icon/invisible.svg";
import Visible from "../../images/icon/eye-regular.svg";
import forgetpassword from "../../images/icon/lock-gray.png";
import { login } from '../../api/actions';
import { NavLink } from 'react-router-dom';

function FormSignIn() {
    const state = { email: "", password: "" };
    const [toggle, setToggle] = useState(false);

    const SendData = (date) => {
        swal({
            text: "Good !",
            icon: "success",
            buttons: false,
            timer: 3000
        })
        login(date);

    }
    const onSubmit = (values) => {
        console.log(values);
        SendData(values.email);
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div className="form">
                <div className='mb-1'>
                    <label className="form-label">Business email</label>
                    <Field type="email"
                        className={props.errors.email ? "form-control is-invalid" : "form-control"}
                        placeholder="Enter your business email" name="email" />
                    <ErrorMessage name="email" component="span" className='errorfiled' />
                </div>
                <div className='mb-1'>
                    <label className="form-label">Password</label>
                    <div className="filedpassword">
                        <Field type={toggle === false?"password":"text"}
                            className={props.errors.password ? "form-control is-invalid" : "form-control"}
                            placeholder="Enter password" name="password" />
                        <span className='toggoleimg' onClick={()=>setToggle(!toggle)}>
                            {toggle === false?
                            <img src={Invisible} alt="Invisible"
                            className={props.errors.password ? "hide invisible_img" : "invisible_img"}
                            />
                            :
                            <img src={Visible} alt="Visible"
                            className={props.errors.password ? "hide invisible_img" : "invisible_img"}
                            />
                        }
                        </span>


                    </div>
                    <ErrorMessage name="password" component="span" className='errorfiled' />
                </div>
                <div className='forget_password'>
                    <img src={forgetpassword} />
                        <NavLink to={"/forgetpassword"}>Forget password?</NavLink>
                </div>
                <div className='mb-1'>
                    <button className='btn btn-send' type="submit">Sign in</button>
                </div>
                <div>
                    <span className='end'>
                    New user ?{" "}
                        <NavLink to={"/signup"}>Sign up</NavLink>
                    </span>
                </div>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            email: Yup.string().required(),
            password: Yup.string().required(),
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

export default FormSignIn;
