import React from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ForgetPassword } from '../../api/actionsauth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../api';
import axios from 'axios';
import { Authcontext } from '../../store/context';
import { useContext } from 'react';

export function FormPhoneOne() {
    const authcontext = useContext(Authcontext);
    const phone = authcontext.phone;
    const setPhone = authcontext.setPhone;
    const state = { phone: phone };
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();
  
    const ResendCode = async (phone, setMessage) => {
      const options = {
        method: "POST",
        url: `${Api}send-phone-code`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify({
          phone,
        }),
      };
      axios(options)
        .then(function (response) {
          navigate(`/passwordcodephone`);
          setMessage("")
          setLoading(false);
        })
        .catch(function (error) {
          setMessage(error.response.data.message)
          setLoading(false);
        });
    };
    const onSubmit = (values) => {
      setPhone(values.phone);
      ResendCode(values.phone, setMessage);
      setLoading(true);
    }
  
    const form = (props) => {
      return <form onSubmit={props.handleSubmit}>
        <div className="form">
          <div className='mb-3'>
            <Field type="number"
              className={props.errors.phone ? "form-control is-invalid" : "form-control"}
              placeholder="966123456789" name="phone" />
            <ErrorMessage name="phone" component="span" className='errorfiled' />
          </div>
          <div className="mb-1">
            {message === "" ? "" :
              <span className='errorfiled'>{message}</span>
            }
          </div>
          <div className='mb-5'>
            {loading === false ?
              <button className='btn btn-send' type="submit">Send verification code</button>
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
        phone: Yup.string()
        .min(12, 'The phone number must be at least 12 Digits!')
        .max(13, 'The phone number must be no more than 13 digits long!'),
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
export function FormEmailOne() {
  const authcontext = useContext(Authcontext);
  const email = authcontext.email;
  const setEmail = authcontext.setEmail;

  const state = {email};
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const ResendCode = async (email, setMessage) => {
    const options = {
      method: "POST",
      url: `${Api}send-email-code`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify({
        email,
      }),
    };
    axios(options)
      .then(function (response) {
        navigate(`/passwordcodeemail`);
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
    ResendCode(values.email, setMessage);
    setLoading(true);
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
        <div className="mb-1">
          {message === "" ? "" :
            <span className='errorfiled'>{message}</span>
          }
        </div>
        <div className='mb-5'>
          {loading === false ?
            <button className='btn btn-send' type="submit">Send verification code</button>
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


  