import React, { useState } from 'react';
import { UpdateLogoprofile } from '../../../../api/seller/actionsprofile';
import UploadImage from "../../../../images/icon/upload.png";
import Editeimage from '../../../../images/icon/uploadimage.png';
import Savedata from '../modal/savedata';

function CompanyData(props) {
    const { DataCompany ,Data } = props;
    const [toggolemodal, setToggolemodal] = useState(false);
    const [message, setMessage] = useState("");
    const [imagedata,setImagedata]=useState(null);
    const [file, setFile] = useState(null);

    console.log(Data);

    const SendData = () => {
        setToggolemodal(!toggolemodal);
        UpdateLogoprofile(imagedata,setMessage) ;
    }

    return (
        <div className='companydata'>
            <div className="left">
                <ul>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Company Name</span>
                                <span className="data">{Data.supplier.company_name}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Business Sector</span>
                                <span className="data">{"DataCompany.business_sector"}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">CR NO.</span>
                                <span className="data">{Data.supplier.cr_number}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">CR Issue Date</span>
                                <span className="data">{Data.supplier.cr_issue_date}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">CR Expiry Date</span>
                                <span className="data">{Data.supplier.cr_expire_date}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">VAT NO.</span>
                                <span className="data">{Data.supplier.vat_number}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">VAT Registration Date</span>
                                <span className="data">{Data.supplier.vat_registration_date}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Website</span>
                                <span className="data">{Data.supplier.website}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Country</span>
                                <span className="data">{"Data.supplier.country"}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">City</span>
                                <span className="data">{Data.city.name}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Address</span>
                                <span className="data">{"Data.supplier.address"}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Company Email</span>
                                <span className="data">{Data.supplier.business_email}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Fax No.</span>
                                <span className="data">{Data.supplier.fax_number}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Payment Terms</span>
                                <span className="data">{Data.supplier.payment_terms}</span>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="right">
                <img src={file === null ? Data.logo : file}
                    alt={Data.id} />
                <button type='button' className='btn'>
                    <input type="file" className="input-file"
                        name='logo'  onChange={e => {
                            setFile(URL.createObjectURL(e.target.files[0]));
                            setToggolemodal(!toggolemodal);
                            setImagedata(e.target.files[0]);
                        }} />
                        
                    <img src={Editeimage} alt="Edite image" />
                    Upload image
                </button>
            </div>

            {toggolemodal === false ?""
                :<Savedata toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData} />}
        </div>
    )

}

export default CompanyData