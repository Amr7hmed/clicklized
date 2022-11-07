import React, { useState } from 'react';
import { useEffect } from 'react';
import { GetDataIndustries, UpdateCompanycr, UpdateCompanyvat, UpdateLogoprofile } from '../../../../api/actionsprofile';
import UploadImage from "../../../../images/icon/upload.png";
import Editeimage from '../../../../images/icon/uploadimage.png';
import SaveData from '../modal/savedata.jsx';

function CompanyData(props) {
    const { DataCompany } = props;
    const [logo, setLogo] = useState(null);
    const [toggolemodal, setToggolemodal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [messagelogo, setMessagelogo] = useState("");
    const [messagecrfiles, setMessagecrfiles] = useState("");
    const [messagevatfiles, setMessagevatfiles] = useState("");

    const [state, setState] = useState({
        cr_files: "",
        vat_files: "",
    });
    useEffect(() => {
        GetDataIndustries(setLoading, setData);
    }, [loading]);



    var newArray = data.filter(function (el) {
        return el.id === parseInt("1");
    });
    // console.log(data);
    // console.log(newArray);

    const SendData = () => { }
    return (<>
        {loading === false ? (
            ""
        ) : (
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
                                <input type="file" className="input-file" multiple name="cr_files"
                                    onChange={e => {
                                        UpdateCompanycr(DataCompany, e.target.files, setMessagecrfiles)
                                    }} />
                                <img src={UploadImage} alt="" />
                                Upload files
                            </button>
                            {messagecrfiles === "" ? "" : <span className='errorfiled'>{messagecrfiles}</span>}
                        </li>
                        <li>
                            <span className="title">Company VAT</span>
                            <button type='button' className='btn btn-upload'>
                                <input type="file" className="input-file" multiple accept="image/*"
                                    name="vat_files"
                                    onChange={e => {
                                        UpdateCompanyvat(DataCompany, e.target.files, setMessagevatfiles)
                                    }}
                                />
                                <img src={UploadImage} alt="" />
                                Upload files
                            </button>
                            {messagevatfiles === "" ? "" : <span className='errorfiled'>{messagevatfiles}</span>}
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <img src={logo === null ? DataCompany.logo : logo}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                        }} alt={DataCompany.companyindustry} />
                    <button type='button' className='btn'>
                        <input type="file" className="input-file" accept="image/*"
                            name='logo' onChange={e => {
                                setLogo(URL.createObjectURL(e.target.files[0]));
                                UpdateLogoprofile(DataCompany, e.target.files[0], setMessagelogo);
                            }} />
                        <img src={Editeimage} alt="Edite image" />
                        Upload image
                    </button>
                    {messagelogo === "" ? "" : <span className='errorfiled'>{messagelogo}</span>}
                </div>

                {toggolemodal === false ?
                    ""
                    :
                    <SaveData toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData} />
                }
            </div>
        )}
    </>)

}

export default CompanyData