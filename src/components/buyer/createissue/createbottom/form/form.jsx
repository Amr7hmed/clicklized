import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import swal from 'sweetalert';
import { Inputcheckbox, Inputcompany, InputSupplierslist } from "./inputs.jsx";
import { NavLink, useNavigate } from 'react-router-dom';
import ModalSuppliersList from './modallsupplierslist.jsx';
import IconProfile from "../../../../../images/icon/img-profile.jpg";

function Form(props) {
    const { Statedata ,screnonedatatwo ,setParamsname,} = props;
    let navigate = useNavigate();
    const [SupplierslistItems, setSupplierslistItems] = useState([]);


    const onSubmit = (values) => {
        if(SupplierslistItems.length === 0){
            return false;
        }else{
            screnonedatatwo(values)
        }
    }

    
  const AddSuppliers = (item) => {
    setSupplierslistItems([...SupplierslistItems, item])
  }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
                    <InputSupplierslist SupplierslistItems={SupplierslistItems} setSupplierslistItems={setSupplierslistItems}/>
                    <Inputcompany errors={props.errors}/>
                    <Inputcheckbox />
                    <ModalSuppliersList AddSuppliers={AddSuppliers} />
                    <div className='end'>
                        <button className='btn btn-cancel' onClick={()=>{
                        setParamsname("");
                        }} >
                            Back
                        </button>
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
