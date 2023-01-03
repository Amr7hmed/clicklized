import React, { useState ,useContext} from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Invisible from "../../images/icon/invisible.svg";
import Visible from "../../images/icon/eye-regular.svg";
import forgetpassword from "../../images/icon/lock-gray.png";
import { NavLink } from 'react-router-dom';
import { SignIn } from '../../api/actionsauth';
import { Authcontext } from '../../store/context';

function FormSignIn() {
    const authcontext = useContext(Authcontext);
    const setEmail = authcontext.setEmail;
    const state = { email: "", password: "" ,device_id:false};
    const [toggle, setToggle] = useState(false);
    const [message, setMessage] = useState("");

    const onSubmit = (values) => {
        setEmail(values.email);
        if(values.device_id === true){
            SignIn(values.email,values.password,"granted","web",setMessage);
        }else{
           SignIn(values.email,values.password,"denied","web",setMessage);
        }
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
                <div className="mb-1">
                    <Field type="checkbox" name="device_id" id="device_id"/>
                        <label className="form-label formlabel-checkbox" htmlFor='device_id'>
                            Would you like to see notifications?
                        </label>
                </div>
                <div className='forget_password'>
                    <img src={forgetpassword} />
                        <NavLink to={"/forgetpasswordemail"}>Forget password?</NavLink>
                </div>
                <div className="mb-1">
                    {message === ""? "": 
                    message === "auth.not_active" ?
                    <span className='errorfiled'>
                        This account is not activated, to activate the account, please 
                        <NavLink to={"/resendcode"}> Click here</NavLink>
                    </span>:
                    <span className='errorfiled'>{message}</span>
                    }
                </div>
                <div className='mb-1'>
                    <button className='btn btn-send' type="submit">Sign in</button>
                </div>
                <div>
                    <span className='end'>
                    Sign In by phone number ?{" "}
                        <NavLink to={"/signinphone"}>click here</NavLink>
                    </span>
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
