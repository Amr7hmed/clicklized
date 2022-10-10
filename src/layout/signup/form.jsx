import React from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

function FormSignup() {
    const state = {type: "", name: "", email: "" ,number:"",password:""};

    const SendData=()=>{
            swal({
              text: "Good !",
              icon: "success",
              buttons: false,
              timer: 3000
            })
    
    }
    const onSubmit = (values) => {
      console.log(values);
      SendData();
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <label className='title'>Choose user type</label>
            <ul className='signup__radio'>
                <li>
                    <Field type="radio" value="supplier" name="type" />
                    <label >Supplier</label>
                </li>
                <li>
                    <Field type="radio" value="buyer" name="type" />
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
                    <Field type="text" 
                    className={props.errors.number ? "form-control is-invalid" : "form-control"}
                    placeholder="Enter your contact number" name="number"/>
                    <ErrorMessage name="number" component="span" className='errorfiled'/>
                </div>
                <div className='mb-1'>
                    <label className="form-label">Password</label>
                    <Field type="password" 
                    className={props.errors.password ? "form-control is-invalid" : "form-control"}
                    placeholder="Enter password" name="password"/>
                    <ErrorMessage name="password" component="span" className='errorfiled'/>
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
            type: Yup.string().required(),
            name: Yup.string().required(),
            email: Yup.string().required(),
            number: Yup.string().required(),
            password: Yup.string().required(),
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
            />
        </div>
    )
}

export default FormSignup;
