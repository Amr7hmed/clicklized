import React, { useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Inputcheckbox, Inputcompany, InputSupplierslist } from "./inputs.jsx";
import ModalSuppliersList from './modallsupplierslist.jsx';
import { Authcontext } from '../../../../../store/context.js';
import { useContext } from 'react';

function Form(props) {
    const { Statedata, screnonedatatwo, setParamsname, setSuppliersItems } = props;

    const authcontext = useContext(Authcontext);
    const setCheckboxtogglerequest = authcontext.setCheckboxtogglerequest;
    const setSupplierslistrequest = authcontext.setSupplierslistrequest;
    const setCompanynamerequest = authcontext.setCompanynamerequest;
    const setCompanyemailrequest = authcontext.setCompanyemailrequest;
    const setContactnumebrrequest = authcontext.setContactnumebrrequest;
    const supplierslistrequest = authcontext.supplierslistrequest;
    const language = authcontext.language;
    const [showsupplerslist, setShowsupplerslist] = useState(true);

    const onSubmit = (values) => {
        if (supplierslistrequest.length === 0) {

            if (values.companyname === "" || values.companyemail === "" || values.contactnumebr === "") {

                if (values.checkboxtoggle === false) {
                    setShowsupplerslist(false)
                } else {
                    SendData(values)
                    setShowsupplerslist(false)
                }

            } else {
                SendData(values)
                setShowsupplerslist(false)
            }

        } else {
            SendData(values)
            setShowsupplerslist(false)
        }
    }
    const SendData = (values) => {
        screnonedatatwo(values)
        setCheckboxtogglerequest(values.checkboxtoggle);
        setCompanynamerequest(values.companyname);
        setCompanyemailrequest(values.companyemail);
        setContactnumebrrequest(values.contactnumebr);
    }


    const AddSuppliers = (e, item) => {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            let remainingArr = supplierslistrequest.filter(data => data.id != item.id);
            setSupplierslistrequest([...remainingArr]);
            setSuppliersItems([...remainingArr]);
            if (language === "Ar") {
                e.target.innerHTML = "أضافه";
            } else {
                e.target.innerHTML = "Add";
            }
        } else {
            e.target.classList.add('active');
            setSupplierslistrequest([...supplierslistrequest, item])
            setSuppliersItems([...supplierslistrequest, item]);
            if (language === "Ar") {
                e.target.innerHTML = "مضاف";
            } else {
                e.target.innerHTML = "Added";
            }
        }
    }
    const DoneAdded = () => {
        setSupplierslistrequest([...supplierslistrequest]);
        setSuppliersItems([...supplierslistrequest]);
    }

    const RemoveallSuppliers = () => {
        setSupplierslistrequest([]);
        setSuppliersItems([]);
    }

    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <InputSupplierslist supplierslistrequest={supplierslistrequest} setSupplierslistrequest={setSupplierslistrequest} />
            <Inputcompany />
            <Inputcheckbox />
            <ModalSuppliersList AddSuppliers={AddSuppliers} DoneAdded={DoneAdded} RemoveallSuppliers={RemoveallSuppliers} />
            {showsupplerslist === false ? <span className='errorfiled'>
                {language === "Ar" ? "مطلوب اضافة مورد" : "Add Supplier is Required"}
            </span> : ""}



            <div className='end'>
                <button className='btn btn-cancel' onClick={() => { setParamsname(""); }} >
                    {language === "Ar" ? "السابق" : "Back"}
                </button>
                <button className='btn btn-next' type="submit">
                    {language === "Ar" ? "التالي" : "Next"}
                </button>
            </div>
        </form>
    }
    const schema = () => {
        const schema = Yup.object().shape({
            contactnumebr: Yup.string()
                .min(9, <>
                    {language === "Ar" ?
                        "يجب أن يكون رقم جهة الاتصال 9 أرقام على الأقل!"
                        :
                        'The Contact Number must be at least 9 Digits !'
                    }
                </>)
                .max(14, <>
                    {language === "Ar" ?
                        "رقم الاتصال يجب ألا يزيد عن 14 رقم!"
                        : 'Contact Number Must Be No More Than 14 !'
                    }
                </>
                ),
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
