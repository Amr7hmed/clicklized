import React, { useState } from 'react';
import UploadImage from "../../../../images/icon/upload.png";
import Editeimage from '../../../../images/icon/uploadimage.png';
import Savedata from '../modal/savedata';

function CompanyData(props) {
    const { DataCompany } = props;
    const [logo, setLogo] = useState("");
    const [toggolemodal, setToggolemodal] = useState(false);

    const [state, setState] = useState({
        cr_files: "",
        vat_files: "",
    });

    const [urlimage, setUrlImage] = useState(null);

    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                // console.log("Called", reader);
                baseURL = reader.result;
                // console.log(baseURL);
                resolve(baseURL);
                setUrlImage(baseURL)
            };
            //  console.log(fileInfo);
        });

    };


    const handleFileSelect = (e) => {
        console.log(e.target.files[0]);
        setToggolemodal(true);
        const filesdata = e.target.files[0];
        setLogo(filesdata);

        getBase64(filesdata)
            .then(result => {
                filesdata["base64"] = result;
                //console.log("File Is", filesdata);
                this.setState({
                    base64URL: result,
                    filesdata
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        const value = e.target.files[0];
        setState({
            ...state,
            [e.target.name]: value,
        });
        setToggolemodal(true);
    };

    const SendData = () => {
        console.log(state);
        console.log(logo);
        setToggolemodal(false);
    }
    return (
        <div className='companydata'>
            <div className="left">
                <ul>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Company Name</span>
                                <span className="data">{DataCompany.name}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Business Sector</span>
                                <span className="data">{DataCompany.business_sector}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">CR NO.</span>
                                <span className="data">{DataCompany.cr}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">CR Issue Date</span>
                                <span className="data">{DataCompany.cr_issue_date}</span>
                            </span>
                        </span>
                        <span className="col-4">
                        <span className="item">
                                <span className="title">CR Expiry Date</span>
                                <span className="data">{DataCompany.cr_expiry_date}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">VAT NO.</span>
                                <span className="data">{DataCompany.vat}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">VAT Registration Date</span>
                                <span className="data">{DataCompany.vat_registration_date}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Website</span>
                                <span className="data">{DataCompany.website}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Country</span>
                                <span className="data">{DataCompany.country}</span>
                            </span>
                        </span>
                        <span className="col-4">
                        <span className="item">
                                <span className="title">City</span>
                                <span className="data">{DataCompany.city}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Address</span>
                                <span className="data">{DataCompany.address}</span>
                            </span>
                        </span>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Phone No.</span>
                                <span className="data">{DataCompany.phone}</span>
                            </span>
                        </span>
                        <span className="col-4">
                        <span className="item">
                                <span className="title">Fax No.</span>
                                <span className="data">{DataCompany.fax}</span>
                            </span>
                        </span>
                    </li>
                    <li className='row'>
                        <span className="col-4">
                            <span className="item">
                                <span className="title">Payment Terms</span>
                                <span className="data">{DataCompany.payment_terms}</span>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="right">
                <img
                    src={urlimage === null ? DataCompany.image : urlimage}
                    alt={DataCompany.companyindustry} />
                <button type='button' className='btn'>
                    <input type="file" className="input-file"
                        name='logo' onChange={e => handleFileSelect(e)} />
                    <img src={Editeimage} alt="Edite image" />
                    Upload image
                </button>
            </div>

            <Savedata toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData} />
        </div>
    )

}

export default CompanyData