import React, { useEffect, useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Inputaddress, Inputday, InputFiles, InputIndustry, Inputinsurance, InputItems, Inputnotes, Inputquotations, Inputtransportation } from './inputs';
import ModalMap from './modalmap';
import { Authcontext } from '../../../../../store/context';
import { useContext } from 'react';

function Form(props) {
    const {Statedata,clickedLatLng, setClickedLatLng,screnonedataone ,AddImagesfiles ,
        imagesfiles,AddImageslogo,imageslogo ,RemoveImagesfiles ,RemoveImageslogo,
        address,setAddress ,showaddress}=props;
    const authcontext = useContext(Authcontext);
    const setNumberrequest = authcontext.setNumberrequest;
    const setItemsrequest = authcontext.setItemsrequest;
    const setAddressrequest = authcontext.setAddressrequest;
    const setIndustryrequest = authcontext.setIndustryrequest;
    const setInputinsurancerequest = authcontext.setInputinsurancerequest;
    const setTransportationrequest = authcontext.setTransportationrequest;
    const setNotesrequest = authcontext.setNotesrequest;
    const setDayrequest = authcontext.setDayrequest; 
     
     
  const language = authcontext.language;
     
     const onSubmit = (values) => {
         setNumberrequest(values.numberrequired);
         setItemsrequest([...values.items])
         setAddressrequest(values.address)
         setInputinsurancerequest(values.inputinsurance)
         setTransportationrequest(values.transportation)
         setNotesrequest(values.notes)
         setIndustryrequest(values.industry)
         setDayrequest(values.day)
         screnonedataone(values);
        }


    const form = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <Inputquotations errors={props.errors} />
            <InputItems values={props.values} errors={props.errors} />
            <Inputaddress errors={props.errors} 
            address={address} setAddress={setAddress}/>
            {showaddress === false ? <span className='errorfiled'>
              {language === "Ar" ? "العنوان مطلوب" : "Address Is Required"}
            </span>:""}
            <br/>
            <br/>
            <InputIndustry errors={props.errors} />
            <Inputday data={props} />
            <Inputinsurance Data={props} />
            <Inputtransportation Data={props} />
            <Inputnotes />
            <InputFiles AddImagesfiles={AddImagesfiles} imagesfiles={imagesfiles}
            AddImageslogo={AddImageslogo} imageslogo={imageslogo} RemoveImagesfiles={RemoveImagesfiles}
            RemoveImageslogo={RemoveImageslogo}/>
            <ModalMap clickedLatLng={clickedLatLng} setClickedLatLng={setClickedLatLng} setAddress={setAddress}/>
            <div className='end'>
                <button 
                className={imagesfiles.length === 0 || imageslogo === null? 
                'btn btn-next button-disabled' : 'btn btn-next button-active'}
                 type="submit">Next</button>
            </div>

        </form>
    }

    const schema = () => {
        const schema = Yup.object().shape({
            numberrequired: Yup.string().max(5, 'Too Long!').required("Number Required"),
            day: Yup.string().required("Day Is Required"),
            items: Yup.array()
            .min(1, "You need at least one Item")
            .required(""),
            industry:Yup.string().required("Industry Is Required"),
        });
        return schema;
    }
    return (
        <div className="form">
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
