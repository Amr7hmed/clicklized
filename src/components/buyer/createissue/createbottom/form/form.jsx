import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Inputcheckbox, Inputcompany, InputSupplierslist } from "./inputs.jsx";
import ModalSuppliersList from './modallsupplierslist.jsx';

function Form(props) {
    const { Statedata ,screnonedatatwo ,setParamsname, setSuppliersItems} = props;

    const [SupplierslistItems, setSupplierslistItems] = useState([]);

    const onSubmit = (values) => {
        if(SupplierslistItems.length === 0){
            return false;
        }else{
            screnonedatatwo(values)
        }
    }


        const AddSuppliers = (e,item) => {
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active');
            e.target.innerHTML = "Add";

            let remainingArr = SupplierslistItems.filter(data => data.id != item.id);
            setSupplierslistItems([...remainingArr]);
            setSuppliersItems([...remainingArr]);
        }else{
            e.target.classList.add('active');
            e.target.innerHTML = "Added";
            setSupplierslistItems([...SupplierslistItems, item])
            setSuppliersItems([...SupplierslistItems, item]);
        }
        }
        const DoneAdded = () => {
        setSupplierslistItems([...SupplierslistItems]);
        setSuppliersItems([...SupplierslistItems]);
        }

        const RemoveallSuppliers = () => {
        setSupplierslistItems([]);
        setSuppliersItems([]);
        }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
                    <InputSupplierslist SupplierslistItems={SupplierslistItems} setSupplierslistItems={setSupplierslistItems}/>
                    <Inputcompany errors={props.errors}/>
                    <Inputcheckbox />
                    <ModalSuppliersList AddSuppliers={AddSuppliers} DoneAdded={DoneAdded} RemoveallSuppliers={RemoveallSuppliers}/>



                    <div className='end'>
                        <button className='btn btn-cancel' onClick={()=>{setParamsname("");}} >
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
