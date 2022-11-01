import React from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import Invisible from "../../images/icon/invisible.svg";
import Visible from "../../images/icon/eye-regular.svg";
import { Signup } from '../../api/actionsauth';
import { useState } from 'react';

function FormSignup() {
    const state = {user_type: "", name: "", email: "" ,phone:"",password:"",password_confirmation: ""};
    const [toggle, setToggle] = useState(false);
    const [togglechangepassword, setTogglechangepassword] = useState(false);


    const SendData=()=>{
        Signup();
    }
    const onSubmit = (values) => {
      console.log(values);
      Signup(values);
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <label className='title'>Choose user type</label>
            <ul className='signup__radio'>
                <li>
                    <Field type="radio" value="3" name="user_type" />
                    <label >Supplier</label>
                </li>
                <li>
                    <Field type="radio" value="2" name="user_type" />
                    <label >Buyer</label>
                </li>
            </ul>
            <ErrorMessage name="type" component="span" className='errorfiled'/>
            <div className="form">
                <div className='mb-1'>
                    <label className="form-label">User name</label>
                    <Field type="text" 
				    className={props.errors.name ? "form-control is-invalid" : "form-control"}
                    placeholder="Enter your user name" name="name"/>
                    <ErrorMessage name="name" component="span" className='errorfiled'/>
                </div>
                <div className='mb-1'>
                    <label className="form-label">Business email</label>
                    <Field type="email" 
                    className={props.errors.email ? "form-control is-invalid" : "form-control"}
                    placeholder="Enter your business email" name="email"/>
                    <ErrorMessage name="email" component="span" className='errorfiled'/>
                </div>
                <div className='mb-1'>
                    <label className="form-label">Contact number</label>
                    <Field type="number" 
                    className={props.errors.phone ? "form-control is-invalid" : "form-control"}
                    placeholder="Enter your contact number" name="phone"/>
                    <ErrorMessage name="phone" component="span" className='errorfiled'/>
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

                <div className='mb-1'>
                    <label className="form-label">Reenter your password</label>
                    <div className="filedpassword">
                        <Field type={togglechangepassword === false?"password":"text"}
                            className={props.errors.password_confirmation ? "form-control is-invalid" : "form-control"}
                            placeholder="Re-enter The New Password" name="password_confirmation" />
                        <span className='toggoleimg' onClick={()=>setTogglechangepassword(!togglechangepassword)}>
                            {togglechangepassword === false?
                            <img src={Invisible} alt="Invisible"
                            className={"invisible_img"}
                            />
                            :
                            <img src={Visible} alt="Visible"
                            className={ "invisible_img"}
                            />
                        }
                        </span>


                    </div>
                    <ErrorMessage name="password_confirmation" component="span" className='errorfiled' />
                </div>
                <div className='mb-1'>
                    <button className='btn btn-send' type="submit">Sign up</button>
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
            phone: Yup.string().min(9, 'The Contact Number must be at least 9 Digits!').required("Contact Number Is Required"),
            password: Yup.string()
            .min(5, 'Too Short!')
            .max(9, 'Too Long!')
            .required('Required'), 
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
