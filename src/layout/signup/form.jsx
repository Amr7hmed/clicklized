import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from 'react-router-dom';
import Invisible from "../../images/icon/invisible.svg";
import Visible from "../../images/icon/eye-regular.svg";
import { Api } from '../../api';
import axios from 'axios';
import { Authcontext } from '../../store/context';
import { useContext } from 'react';

function FormSignup(props) {
    const authcontext = useContext(Authcontext);
    const setEmail = authcontext.setEmail;

    let navigate = useNavigate();
    const { userTypes } = props;
    const state = {
        user_type: "", name: "", email: "", phone: "", password: "", password_confirmation: "",
        device_id: false
    };
    const [toggle, setToggle] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [togglechangepassword, setTogglechangepassword] = useState(false);


    const Signup = async (values, device_id, device_type, setMessage) => {
        const options = {
            method: "POST",
            url: `${Api}register`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                'Access-Control-Allow-Origin': '*',
            },
            data: JSON.stringify({
                ...values,
                device_id,
                device_type
            }),
        };
        axios(options)
            .then(function (response) {
                navigate(`/verificationemail`);
                setMessage("")
                setLoading(false);
            })
            .catch(function (error) {
                setMessage(error.response.data.message)
                setLoading(false);
            });
    };

    const onSubmit = (values) => {
        setEmail(values.email);
        if (values.device_id === true) {
            Signup(values, "granted", "web", setMessage);
            setLoading(true);
        } else {
            Signup(values, "denied", "web", setMessage);
            setLoading(true);
        }

    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <label className='title'>Choose user type</label>
            <ul className='signup__radio'>
                {userTypes.map(item =>
                    <li key={item.id}>
                        <Field type="radio" value={item.id.toString()}
                            name="user_type" id={`user_type_${item.id}`} />
                        <label htmlFor={`user_type_${item.id}`}>
                            {item.name}
                        </label>
                    </li>
                )}
            </ul>
            <ErrorMessage name="user_type" component="span" className='errorfiled' />
            <div className="form">
                <div className='mb-1'>
                    <label className="form-label">User name</label>
                    <Field type="text"
                        className={props.errors.name ? "form-control is-invalid" : "form-control"}
                        placeholder="Enter your user name" name="name" />
                    <ErrorMessage name="name" component="span" className='errorfiled' />
                </div>
                <div className='mb-1'>
                    <label className="form-label">Business email</label>
                    <Field type="email"
                        className={props.errors.email ? "form-control is-invalid" : "form-control"}
                        placeholder="Enter your business email" name="email" />
                    <ErrorMessage name="email" component="span" className='errorfiled' />
                </div>
                <div className='mb-1'>
                    <label className="form-label">Contact number</label>
                    <Field type="number"
                        className={props.errors.phone ? "form-control is-invalid" : "form-control"}
                        placeholder="966123456789" name="phone" />
                    <ErrorMessage name="phone" component="span" className='errorfiled' />
                </div>
                <div className='mb-1'>
                    <label className="form-label">Password</label>
                    <div className="filedpassword">
                        <Field type={toggle === false ? "password" : "text"}
                            className={props.errors.password ? "form-control is-invalid" : "form-control"}
                            placeholder="Enter password" name="password" />
                        <span className='toggoleimg' onClick={() => setToggle(!toggle)}>
                            {toggle === false ?
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

                <div className='mb-3'>
                    <label className="form-label">Reenter your password</label>
                    <div className="filedpassword">
                        <Field type={togglechangepassword === false ? "password" : "text"}
                            className={props.errors.password_confirmation ? "form-control is-invalid" : "form-control"}
                            placeholder="Re-enter The New Password" name="password_confirmation" />
                        <span className='toggoleimg' onClick={() => setTogglechangepassword(!togglechangepassword)}>
                            {togglechangepassword === false ?
                                <img src={Invisible} alt="Invisible"
                                    className={"invisible_img"}
                                />
                                :
                                <img src={Visible} alt="Visible"
                                    className={"invisible_img"}
                                />
                            }
                        </span>


                    </div>
                    <ErrorMessage name="password_confirmation" component="span" className='errorfiled' />
                </div>
                <div className="mb-1">
                    <Field type="checkbox" name="device_id" id="device_id" />
                    <label className="form-label formlabel-checkbox" htmlFor='device_id'>
                        Would you like to see notifications?
                    </label>
                </div>
                <div className="mb-1">
                    {message === "" ? "" : message === "The password format is invalid." ?
                        <span className='errorfiled'>
                            Password must contain letters and numbers
                        </span> :
                        <span className='errorfiled'>{message}</span>
                    }
                </div>
                <div className='mb-1'>
                    {loading === false ?
                        <button className='btn btn-send' type="submit">Sign up</button>
                        :
                        <button className="btn btn-send button-disabled">
                            Loading
                            <span className="spinner"></span>
                        </button>}
                </div>
                <div>
                    <span className='end'>
                        Already user ? {" "}
                        <NavLink to={"/"}>Sign in</NavLink>
                    </span>
                </div>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            user_type: Yup.string().required("User Type Is Required"),
            name: Yup.string().required("Name Is Required"),
            email: Yup.string().required("Email Is Required"),
            phone: Yup.string()
                .min(9, 'The Contact Number must be at least 9 Digits !')
                .max(14, 'Contact Number Must Be No More Than 14 !')
                .required("Contact Number Is Required"),

            phone: Yup.string()
                .min(12, 'The phone number must be at least 12 Digits!')
                .max(13, 'The phone number must be no more than 13 digits long!')
                .required("Contact Number Is Required"),
            password: Yup.string()
                .min(8, 'Password Must Not Be Less Than 8 Characters')
                .max(14, 'Password Must Not Be More Than 14 Characters')
                .required('Password Is Required'),
            password_confirmation: Yup.string().when("password", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Both password need to be the same"
                )
            }).required('Required'),
        });

        return schema;
    }
    return (
        <div className="signup__form">
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

export default FormSignup;
