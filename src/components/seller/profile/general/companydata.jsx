import React, { useState } from 'react';
import { useContext } from 'react';
import { UpdateLogoprofile } from '../../../../api/profile';
import Editeimage from '../../../../images/icon/uploadimage.png';
import SaveData from '../../../../layout/modal/savedata';
import { Authcontext } from '../../../../store/context';

function CompanyData(props) {
    const { Data } = props;
    const [toggolemodal, setToggolemodal] = useState(false);
    const [message, setMessage] = useState("");
    const [imagedata, setImagedata] = useState(null);
    const [file, setFile] = useState(Data.logo);
    const ImageError = "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";

    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const SendData = () => {
        setToggolemodal(!toggolemodal);
        UpdateLogoprofile(imagedata, setMessage);
    }

    const CansalchingImage = () => {
        setFile(Data.logo);
        setToggolemodal(!toggolemodal);
        setImagedata(null);
    }

    return (
        <div className='companydata'>
            <div className="left">
                <ul>
                    <li className='row'>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                    {language === "Ar" ? "اسم الشركة" : "Company Name"}
                                
                                    </span>
                                <span className="data">
                                    {Data.supplier.company_name === null ? 
                                    <>
                                    {language === "Ar" ? "اسم الشركة هنا" : "Company Name Here" }
                                    </>
                                    : Data.supplier.company_name}
                                </span>
                            </span>
                        </span>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                    {language === "Ar" ? "قطاع الأعمال" : "Business Sector"}
                                </span>
                                <span className="data">
                                    {Data.industry === null ?
                                    <>
                                    {language === "Ar" ? "قطاع الأعمال" : "Company Industry Here"}
                                    </>
                                     : Data.industry.name}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                    {language === "Ar" ? "رقم السجل التجاري" : "CR NO."}
                                </span>
                                <span className="data">
                                    {Data.supplier.cr_number === null ? 
                                    <>
                                        {language === "Ar" ? "رقم السجل التجاري" : "CR NO."}
                                        </>: Data.supplier.cr_number}
                                </span>
                            </span>
                        </span>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "تاريخ إصدار السجل التجاري" : "CR Issue Date"}
                                    </span>
                                <span className="data">
                                    {Data.supplier.cr_issue_date === null ? 
                                    <>
                                        {language === "Ar" ? "تاريخ إصدار السجل التجاري" : "CR Issue Date"}
                                    </> : Data.supplier.cr_issue_date}
                                </span>
                            </span>
                        </span>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "تاريخ أنتهاء السجل التجاري" : "CR Expiry Date"}
                                </span>
                                <span className="data">
                                    {Data.supplier.cr_expire_date === null ? 
                                    <>
                                        {language === "Ar" ? "تاريخ أنتهاء السجل التجاري" : "CR Expiry Date"}
                                    </>
                                        : Data.supplier.cr_expire_date}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "رقم القيمة المضافة" : "VAT NO."}
                                </span>
                                <span className="data">
                                    {Data.supplier.vat_number === null ? <>
                                        {language === "Ar" ? "رقم القيمة المضافة" : "VAT NO."}
                                        </> : Data.supplier.vat_number}
                                </span>
                            </span>
                        </span>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? 
                                        "تاريخ التسجيل في ضريبة القيمة المضافة"
                                         : "VAT Registration Date"}
                                        </span>
                                <span className="data">
                                    {Data.supplier.vat_registration_date === null ?
                                        "VAT Registration Here" : Data.supplier.vat_registration_date}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "الموقع الألكتروني": "Website"}
                                        </span>
                                <span className="data">
                                    {Data.supplier.website === null ? <>
                                        {language === "Ar" ? "الموقع الألكتروني": "Website"}
                                    </>
                                    : Data.supplier.website}
                                </span>
                            </span>
                        </span>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "الدولة": "Country"}
                                </span>
                                <span className="data">
                                    {Data.country.length === 0 ?
                                    <>
                                    {language === "Ar" ? "الدولة": "Country"}
                                    </>
                                    : Data.country.name}
                                </span>
                            </span>
                        </span>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "المدينة": "City"}
                            </span>
                                <span className="data">
                                    {Data.city.length === 0 ? <>
                                        {language === "Ar" ? "المدينة": "City"}
                                </>
                                 : Data.city.name}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "العنوان": "Address"}
                                </span>
                                <span className="data">
                                    {Data.supplier.address === null ?
                                    <>
                                    {language === "Ar" ? "العنوان": "Address"}
                                    </>
                                    : Data.supplier.address}
                                </span>
                            </span>
                        </span>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "البريد الإلكتروني للشركة": "Company Email"}
                                </span>
                                <span className="data">
                                    {Data.supplier.business_email === null ?
                                    <>
                                        {language === "Ar" ? "البريد الإلكتروني للشركة": "Company Email"}
                                        </>
                                     : Data.supplier.business_email}
                                </span>
                            </span>
                        </span>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "رقم الفاكس": "Fax No."}
                                </span>
                                <span className="data">
                                    {Data.supplier.fax_number === null ? <>
                                        {language === "Ar" ? "رقم الفاكس": "Fax No."}
                                        </> : Data.supplier.fax_number}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-lg-4 col-md-6 col-12">
                            <span className="item">
                                <span className="title">
                                        {language === "Ar" ? "طريقه الدفع": "Payment Terms"}
                                </span>
                                <span className="data">
                                    {Data.supplier.payment_terms === null ? <>
                                        {language === "Ar" ? "طريقه الدفع": "Payment Terms"}
                                        </> : Data.supplier.payment_terms}
                                </span>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="right">
                <img src=
                    {file === null ? ImageError : file}
                    alt={Data.id} />
                <button type='button' className='btn'>
                    <input type="file" className="input-file" accept="image/*"
                        name='logo' onChange={e => {
                            setFile(URL.createObjectURL(e.target.files[0]));
                            setToggolemodal(!toggolemodal);
                            setImagedata(e.target.files[0]);
                        }} />

                    {language === "Ar" ?
                        <>
                            <img src={Editeimage} alt="Edite image" />
                            تحميل الصور
                        </>
                        :
                        <>
                            <img src={Editeimage} alt="Edite image" />
                            Upload image
                        </>
                    }
                </button>
                {message === "" ? "" : <span className='errorfiled'>{message}</span>}
            </div>

            {toggolemodal === false ? ""
                : <SaveData toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData}
                    CansalchingImage={CansalchingImage} />}
        </div>
    )

}

export default CompanyData