import React, { useState } from 'react';
import { useEffect } from 'react';
import { DeleteItem, GetDataIndustries, UpdateCompanycrprofile, UpdateCompanyvatprofile, UpdateLogoprofile } from '../../../../api/buyer/actionsprofile';
import UploadImage from "../../../../images/icon/upload.png";
import Editeimage from '../../../../images/icon/uploadimage.png';
import SaveData from '../modal/savedata.jsx';
import Deletimage from "../../../../images/icon/delet-image.svg";
import ModelGallaryImage from '../modal/modelimages';

function CompanyData(props) {
    const { DataCompany, setLoadingdata } = props;
    const [logo, setLogo] = useState(null);
    const [toggolemodal, setToggolemodal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingcrfiles, setLoadingcrfiles] = useState(false);
    const [loadingvatfiles, setLoadingvatfiles] = useState(false);
    const [data, setData] = useState([]);
    const [messagelogo, setMessagelogo] = useState("");
    const [messagecrfiles, setMessagecrfiles] = useState("");
    const [messagevatfiles, setMessagevatfiles] = useState("");

    useEffect(() => {
        GetDataIndustries(setLoading, setData);
    }, [loading]);



    var newArray = data.filter(function (el) {
        return el.id === parseInt("1");
    });
    console.log(DataCompany.cr_files);
    console.log(DataCompany.vat_files);
    console.log(newArray);

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
                            {DataCompany.cr_files.length > 0 ? <div className="imgagegallary">
                                {DataCompany.cr_files.map(item =>
                                    <div className="img" key={item.id}>
                                        <button className='btn btn-deletimage'
                                            onClick={() => DeleteItem(item.id, setLoadingdata)}><img src={Deletimage} /></button>
                                        <img src={item.image} alt={item.id} className={"img_gallary"} 
                                        data-bs-toggle="modal" data-bs-target={`#modelgallaryimage${item.id}`}/>
                                        <ModelGallaryImage Data={item.image} Id={item.id}/>
                                    </div>
                                )}
                            </div> :
                                <>
                                    {loadingcrfiles === false ?
                                        <button type='button' className='btn btn-upload'>
                                            <input type="file" className="input-file" multiple name="cr_files"
                                                accept="image/*"
                                                onChange={e => {
                                                    UpdateCompanycrprofile(
                                                        DataCompany,
                                                        e.target.files,
                                                        setMessagecrfiles,
                                                        setLoadingdata,
                                                        setLoadingcrfiles)
                                                }} />
                                            <img src={UploadImage} alt="" />
                                            Upload files
                                        </button>
                                        :
                                        <button type='button' className='btn btn-upload button-disabled'>
                                            <span class="spinner"></span>
                                            Loading
                                        </button>}
                                    {messagecrfiles === "" ? "" : <span className='errorfiled'>{messagecrfiles}</span>}
                                </>
                                }
                        </li>
                        <li>
                            <span className="title">Company VAT</span>

                            {DataCompany.vat_files.length > 0 ?

                                <div className="imgagegallary">
                                    {DataCompany.vat_files.map(item =>
                                        <div className="img" key={item.id}>
                                            <button className='btn btn-deletimage'
                                                onClick={() => DeleteItem(item.id, setLoadingdata)}><img src={Deletimage} /></button>
                                            <img src={item.image} alt={item.id} className={"img_gallary"}  
                                        data-bs-toggle="modal" data-bs-target={`#modelgallaryimage${item.id}`}/>
                                        <ModelGallaryImage Data={item.image} Id={item.id}/>
                                        </div>
                                    )}
                                </div>
                                :
                                <>{loadingvatfiles === false ?
                                        <button type='button' className='btn btn-upload'>
                                            <input type="file" className="input-file" multiple name="cr_files"
                                                accept="image/*"
                                                onChange={e => {
                                                    UpdateCompanyvatprofile(
                                                        DataCompany,
                                                        e.target.files,
                                                        setMessagecrfiles,
                                                        setLoadingdata,
                                                        setLoadingvatfiles)
                                                }} />
                                            <img src={UploadImage} alt="" />
                                            Upload files
                                        </button>
                                        :
                                        <button type='button' className='btn btn-upload button-disabled'>
                                            <span class="spinner"></span>
                                            Loading
                                        </button>}
                                    {messagecrfiles === "" ? "" : <span className='errorfiled'>{messagecrfiles}</span>}
                                </>}
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

export default CompanyData;
/*

*/