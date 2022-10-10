import React from 'react';
import UploadImage from "../../../../images/icon/upload.png";
import Editeimage from '../../../../images/icon/uploadimage.png';

function CompanyData(props) {
    const { DataCompany } = props;

    
    const handleFileSelect = (e) => { 
        console.log(e.target.files[0]);
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
                                    onChange={e => handleFileSelect(e)} />
                                    <img src={UploadImage} alt="" />
                                    Upload files
                        </button>
                    </li>
                    <li>
                        <span className="title">Company VAT</span>
                        <button type='button' className='btn btn-upload'>
                                <input type="file" className="input-file"
                                    onChange={e => handleFileSelect(e)} />
                                    <img src={UploadImage} alt="" />
                                    Upload files
                        </button>
                    </li>
                </ul>
            </div>
        <div className="right">
            <div className="img">
                
            <img src={DataCompany.image} alt={DataCompany.companyindustry} />
            <span className="text">{DataCompany.name}</span>
            </div>
            <button type='button' className='btn'>
                                <input type="file" className="input-file"
                                    onChange={e => handleFileSelect(e)} />
                <img src={Editeimage} alt="Edite image" />
                Upload image
            </button>
        </div>
        </div>
    )

}

export default CompanyData