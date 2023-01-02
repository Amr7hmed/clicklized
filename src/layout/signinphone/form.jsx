import React, { useState ,useContext} from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Invisible from "../../images/icon/invisible.svg";
import Visible from "../../images/icon/eye-regular.svg";
import forgetpassword from "../../images/icon/lock-gray.png";
import { NavLink } from 'react-router-dom';
import { SignInphone } from '../../api/actionsauth';
import { Authcontext } from '../../store/context';

function FormSignInPhone() {
    const authcontext = useContext(Authcontext);
    const setPhone = authcontext.setPhone;
    const state = { phone: "", password: "" ,device_id:false};
    const [toggle, setToggle] = useState(false);
    const [message, setMessage] = useState("");

    const onSubmit = (values) => {

        let phone_old = values.phone,
            phone_string = phone_old.toString(),
            slicefirstphone = phone_string.slice(0,3);
        
        if(slicefirstphone === "966"){
            setPhone(values.phone);
            if(values.device_id === true){
                SignInphone(values.phone,values.password,"granted","web",setMessage);
            }else{
                SignInphone(values.phone,values.password,"denied","web",setMessage);
            }
            
        }else{
            setMessage("Phone number must start with 966")
        }
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div className="form">
                <div className='mb-1'>
                    <label className="form-label">Phone Number</label>
                    <Field type="number"
                        className={props.errors.phone ? "form-control is-invalid" : "form-control"}
                        placeholder="966123456789" name="phone" />
                    <ErrorMessage name="phone" component="span" className='errorfiled' />
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
                        <NavLink to={"/forgetpasswordphone"}>Forget password?</NavLink>
                </div>
                <div className="mb-1">
                    {message === ""? "": 
                    message === "auth.not_active" ?
                    <span className='errorfiled'>
                        This account is not activated, to activate the account, please 
                        <NavLink to={"/resendcode"}> Click here</NavLink>
                    </span>:
                    message === "Please activate your phone first Or login using email" ?
                    <span className='errorfiled'>
                        Please activate your phone first through this 
                        <NavLink to={"/resendcodephone"}> link </NavLink>
                        or login with email <NavLink to={"/"}> click here </NavLink>
                    </span>
                    :
                    <span className='errorfiled'>{message}</span>
                    }
                </div>
                <div className='mb-1'>
                    <button className='btn btn-send' type="submit">Sign in</button>
                </div>
                <div>
                    <span className='end'>
                    Sign In by Business email ?{" "}
                        <NavLink to={"/"}>click here</NavLink>
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
            phone: Yup.string()
            .min(12, 'The phone number must be at least 12 Digits!')
            .max(13, 'The phone number must be no more than 13 digits long!'),
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

export default FormSignInPhone;
