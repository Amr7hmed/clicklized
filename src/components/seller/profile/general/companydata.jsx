import React, { useState } from 'react';
import { UpdateLogoprofile } from '../../../../api/profile';
import Editeimage from '../../../../images/icon/uploadimage.png';
import SaveData from '../../../../layout/modal/savedata';

function CompanyData(props) {
    const { Data } = props;
    const [toggolemodal, setToggolemodal] = useState(false);
    const [message, setMessage] = useState("");
    const [imagedata, setImagedata] = useState(null);
    const [file, setFile] = useState(Data.logo);
    const ImageError = "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";

    const SendData = () => {
        setToggolemodal(!toggolemodal);
        UpdateLogoprofile(imagedata, setMessage);
    }

    const CansalchingImage=()=>{
        setFile(Data.logo);
        setToggolemodal(!toggolemodal);
        setImagedata(null);
    }

    return (
        <div className='companydata'>
            <div className="left">
                <ul>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Company Name</span>
                                <span className="data">
                                    {Data.supplier.company_name === null ? "Company Name Here" : Data.supplier.company_name}
                                </span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Business Sector</span>
                                <span className="data">
                                    {Data.industry === null ? "Company Industry Here" : Data.industry.name}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">CR NO.</span>
                                <span className="data">
                                    {Data.supplier.cr_number === null ? "CR NO Here" : Data.supplier.cr_number}
                                </span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">CR Issue Date</span>
                                <span className="data">
                                    {Data.supplier.cr_issue_date === null ? "CR Issue Here" : Data.supplier.cr_issue_date}
                                </span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">CR Expiry Date</span>
                                <span className="data">
                                    {Data.supplier.cr_expire_date === null ? "CR Expiry Here" : Data.supplier.cr_expire_date}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">VAT NO.</span>
                                <span className="data">
                                    {Data.supplier.vat_number === null ? "VAT NO Here" : Data.supplier.vat_number}
                                </span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">VAT Registration Date</span>
                                <span className="data">
                                    {Data.supplier.vat_registration_date === null ? 
                                    "VAT Registration Here" : Data.supplier.vat_registration_date}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Website</span>
                                <span className="data">
                                    {Data.supplier.website === null ? "Website Here" : Data.supplier.website}
                                </span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Country</span>
                                <span className="data">
                                    {Data.country.length === 0 ? "Country Here" : Data.country.name}
                                </span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">City</span>
                                <span className="data">
                                    {Data.city.length === 0 ? "City Here" : Data.city.name}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Address</span>
                                <span className="data">
                                    {Data.supplier.address === null ? "Address Here" : Data.supplier.address}
                                </span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Company Email</span>
                                <span className="data">
                                    {Data.supplier.business_email === null ? "Company Email Here" : Data.supplier.business_email}
                                </span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Fax No.</span>
                                <span className="data">
                                    {Data.supplier.fax_number === null ? "Fax No Here" : Data.supplier.fax_number}
                                </span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Payment Terms</span>
                                <span className="data">
                                {Data.supplier.payment_terms === null ? "Payment Terms Here" : Data.supplier.payment_terms}
                            </span>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="right">
                <img src=
                    {file === "https://clicklized.hwzn.sa/admin//storage"
                        ? ImageError : file}
                    alt={Data.id} />
                <button type='button' className='btn'>
                    <input type="file" className="input-file" accept="image/*"
                        name='logo' onChange={e => {
                            setFile(URL.createObjectURL(e.target.files[0]));
                            setToggolemodal(!toggolemodal);
                            setImagedata(e.target.files[0]);
                        }} />

                    <img src={Editeimage} alt="Edite image" />
                    Upload image
                </button>
                {message === "" ? "" : <span className='errorfiled'>{message}</span>}
            </div>

            {toggolemodal === false ? ""
                : <SaveData toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData} 
                CansalchingImage={CansalchingImage}/>}
        </div>
    )

}

export default CompanyData