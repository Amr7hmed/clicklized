import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { Inputcheckbox, Inputcompany, InputSupplierslist } from "./inputs.jsx";
import { NavLink, useNavigate } from 'react-router-dom';
import ModalSuppliersList from './modallsupplierslist.jsx';
import IconProfile from "../../../../../images/icon/img-profile.jpg";

function Form(props) {
    const { Statedata ,screnonedatatwo } = props;
    let navigate = useNavigate();
    const [SupplierslistItems, setSupplierslistItems] = useState([
        {
            id: 1,
            img: IconProfile,
            name: "Supplier name"
        }, {
            id: 2,
            img: IconProfile,
            name: "Supplier name"
        }
    ]);

    const onSubmit = (values) => {
       navigate(`/addrequest/createreview`);
       screnonedatatwo(values)
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
                    <InputSupplierslist SupplierslistItems={SupplierslistItems} />
                    <Inputcompany errors={props.errors}/>
                    <Inputcheckbox />
                    <ModalSuppliersList setSupplierslistItems={setSupplierslistItems} SupplierslistItems={SupplierslistItems} />
                    <div className='end'>
                        <NavLink to={"/addrequest/createrequest"} className='btn btn-cancel' >
                            Cancel
                        </NavLink>
                        <button className='btn btn-next' type="submit">Next</button>
                    </div>
        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            companyname: Yup.string().required(""),
            companyemail: Yup.string().required(""),
            contactnumebr: Yup.string().required(""),
        });
        return schema;
    }
    return (
        <div className="createissue">
            <Formik
                initialValues={Statedata}
                onSubmit={onSubmit}
                render={form}
                validationSchema={schema()}
                validateOnChange={false}
                validateOnBlur={false}
            />
        </div>
    )
}

export default Form;
