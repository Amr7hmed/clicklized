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
                    <li>
                        <span className="title">Company Industry</span>
                        <span className="data">{DataCompany.companyindustry}</span>
                    </li>
                    <li>
                        <span className="title">Company CR</span>
                        <button type='button' className='btn btn-upload'>
                            <input type="file" className="input-file"
                                name="cr_files" onChange={e => handleChange(e)} />
                            <img src={UploadImage} alt="" />
                            Upload files
                        </button>
                    </li>
                    <li>
                        <span className="title">Company VAT</span>
                        <button type='button' className='btn btn-upload'>
                            <input type="file" className="input-file"
                                name="vat_files" onChange={e => handleChange(e)} />
                            <img src={UploadImage} alt="" />
                            Upload files
                        </button>
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