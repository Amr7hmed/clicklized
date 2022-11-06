import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import Invisible from "../../../../images/icon/invisible.svg";
import Visible from "../../../../images/icon/eye-regular.svg";
import { UpdatePasswordprofile } from '../../../../api/actionsauth';

function Formpassword() {
    const state = { 
    newpassword: "", 
    reenterpassword: "" 
};
    const [togglenewpassword, setTogglenewpassword] = useState(false);
    const [togglerenternewpassword, setTogglerenternewpassword] = useState(false);
    const [message, setMessage] = useState("");


    const onSubmit = (values) => {
        console.log(values);
        UpdatePasswordprofile(values.newpassword,values.reenterpassword,setMessage);
    }


    const form = (props) => {
        return <>
            <form onSubmit={props.handleSubmit}>
                <div className="modal-body">
                    <div>
                        <label className="form-label">New Password</label>
                        <div className="filedpassword">
                            <Field type={togglenewpassword === false ? "password" : "text"}
                                className={props.errors.newpassword ? "form-control is-invalid" : "form-control"}
                                placeholder="Re-enter The New Password" name="newpassword" />
                            <span className='toggoleimg' onClick={() => setTogglenewpassword(!togglenewpassword)}>
                                {togglenewpassword === false ?
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
                        <ErrorMessage name="newpassword" component="span" className='errorfiled' />
                    </div>


                    <div>
                        <label className="form-label">Re-enter The New Password</label>
                        <div className="filedpassword">
                            <Field type={togglerenternewpassword === false ? "password" : "text"}
                                className={props.errors.reenterpassword ? "form-control is-invalid" : "form-control"}
                                placeholder="Re-enter The New Password" name="reenterpassword" />
                            <span className='toggoleimg' onClick={() => setTogglerenternewpassword(!togglerenternewpassword)}>
                                {togglerenternewpassword === false ?
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
                        <ErrorMessage name="reenterpassword" component="span" className='errorfiled' />
                    </div>


                    <div className="mb-3">
                    {message === ""? "" : message === "The password format is invalid." ?
                    <span className='errorfiled'>Password must contain letters and numbers</span>
                    :<span className='errorfiled'>{message}</span>}
                </div>

                    <div className='end'>

                        <button className={'btn btn-send button-active'}
                        type="submit">Save</button>

                        <button type="button" className="btn btn-cancel"
                            data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>

            </form>
        </>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            newpassword: Yup.string()
                .min(5, 'Too Short!')
                .max(12, 'Too Long!')
                .required('Required'),

            reenterpassword: Yup.string().when("newpassword", {
                is: val => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("newpassword")],
                    "Both password need to be the same"
                )
            })
        });

        return schema;
    }
    return (
        <div className='formpassword'>
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

export default Formpassword;


