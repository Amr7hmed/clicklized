import React, { useState } from 'react';
import { DeleteItem, UpdateCompanycrprofile, UpdateCompanyvatprofile } from '../../../../api/buyer/actionsprofile';
import UploadImage from "../../../../images/icon/upload.png";
import Editeimage from '../../../../images/icon/uploadimage.png';
import SaveData from '../../../../layout/modal/savedata.jsx';
import Deletimage from "../../../../images/icon/delet-image.svg";
import ModelGallaryImage from '../../../../layout/modal/modelimages.jsx';
import { UpdateLogoprofile } from '../../../../api/profile';
import { Authcontext } from '../../../../store/context';
import { useContext } from 'react';

function CompanyData(props) {
    const { DataCompany, setLoadingdata } = props;
    const [logo, setLogo] = useState(DataCompany.logo);
    const [toggolemodal, setToggolemodal] = useState(false);
    const [imagedatalogo, setImagedatalogo] = useState(null);
    const [loadingcrfiles, setLoadingcrfiles] = useState(false);
    const [loadingvatfiles, setLoadingvatfiles] = useState(false);
    const [messagelogo, setMessagelogo] = useState("");
    const [messagecrfiles, setMessagecrfiles] = useState("");
    const [messagevatfiles, setMessagevatfiles] = useState("");
    const [imagesfilesvat, setImagesfilesvat] = useState(DataCompany.vat_files);
    const [imagesfilescr, setImagesfilescr] = useState(DataCompany.cr_files);

    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const ImageError = "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";

    const SendData = () => {
        setToggolemodal(!toggolemodal);
        UpdateLogoprofile(imagedatalogo, setMessagelogo);
    }

    const RemoveImagesfilesvat = (arr, setArr, value) => {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        setArr([...arr]);
        DeleteItem(value.id)
    }

    const CansalchingImage = () => {
        setLogo(DataCompany.logo);
        setToggolemodal(!toggolemodal);
        setImagedatalogo(null);
    }
    return (
        <div className='companydata'>
            <div className="left">

                <ul>
                    <li>
                        <span className="title">
                            {language === "Ar" ? "قطاع الشركة" : "Company Industry"}
                        </span>
                        <span className="data">
                            {DataCompany.industry === null ? "Company Industry Here" : DataCompany.industry.name}
                        </span>
                    </li>
                    <li>
                        <span className="title">
                            {language === "Ar" ? "السجل التجاري" : "Company CR"}
                        </span>
                        {imagesfilescr.length > 0 ? <div className="imgagegallary">
                            {imagesfilescr.map(item =>
                                <div className="img" key={item.id}>
                                    <button className='btn btn-deletimage'
                                        onClick={() => RemoveImagesfilesvat(imagesfilescr, setImagesfilescr, item)}>
                                        <img src={Deletimage} />
                                    </button>
                                    <img src={item.image} alt={item.id} className={"img_gallary"}
                                        data-bs-toggle="modal" data-bs-target={`#modelgallaryimage${item.id}`} />
                                </div>
                            )}
                        </div> :
                            <>
                                {loadingcrfiles === false ?
                                    <button type='button' className=
                                        {DataCompany.industry === null ? 'btn btn-upload button-disabled' : 'btn btn-upload'}>
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
                                        {language === "Ar" ?
                                            <>تحميل الملفات<img src={UploadImage} alt="" /></>
                                            :<><img src={UploadImage} alt="" />Upload files</>
                                        }
                                    </button>
                                    :
                                    <button type='button' className='btn btn-upload button-disabled'>
                                        {language === "Ar" ?
                                            <>جاري التحميل<span className="spinner"></span></>
                                            :<><span className="spinner"></span>Loading</>
                                        }
                                    </button>}
                                {messagecrfiles === "" ? "" : <span className='errorfiled'>{messagecrfiles}</span>}
                            </>
                        }
                    </li>
                    <li>
                        <span className="title">
                            {language === "Ar" ? "ملف ضريبة القيمة المضافة" : "Company VAT"}
                        </span>

                        {imagesfilesvat.length > 0 ?

                            <div className="imgagegallary">
                                {imagesfilesvat.map(item =>
                                    <div className="img" key={item.id}>
                                        <button className='btn btn-deletimage'
                                            onClick={() => RemoveImagesfilesvat(imagesfilesvat, setImagesfilesvat, item)}>
                                            <img src={Deletimage} /></button>
                                        <img src={item.image} alt={item.id} className={"img_gallary"}
                                            data-bs-toggle="modal" data-bs-target={`#modelgallaryimage${item.id}`} />
                                    </div>
                                )}
                            </div>
                            :
                            <>{loadingvatfiles === false ?
                                <button type='button' className=
                                    {DataCompany.industry === null ? 'btn btn-upload button-disabled' : 'btn btn-upload'}>
                                    <input type="file" className="input-file" multiple name="cr_files"
                                        accept="image/*"
                                        onChange={e => {
                                            UpdateCompanyvatprofile(
                                                DataCompany,
                                                e.target.files,
                                                setMessagevatfiles,
                                                setLoadingdata,
                                                setLoadingvatfiles)
                                        }} />
                                    {language === "Ar" ?
                                        <>تحميل الملفات<img src={UploadImage} alt="" /></>
                                        :<><img src={UploadImage} alt="" />Upload files</>
                                    }
                                </button>
                                :
                                <button type='button' className='btn btn-upload button-disabled'>
                                      {language === "Ar" ?
                                            <>جاري التحميل<span className="spinner"></span></>
                                            :<><span className="spinner"></span>Loading</>
                                        }
                                </button>}
                                {messagevatfiles === "" ? "" : <span className='errorfiled'>{messagevatfiles}</span>}
                            </>}
                    </li>
                </ul>
            </div>
            <div className="right">
                <img src={logo === null ? ImageError : logo}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                            "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                    }} alt={DataCompany.companyindustry} />
                <button type='button' className='btn'>
                    <input type="file" className="input-file" accept="image/*"
                        name='logo' onChange={e => {
                            setLogo(URL.createObjectURL(e.target.files[0]));
                            setToggolemodal(!toggolemodal);
                            setImagedatalogo(e.target.files[0]);
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
                {messagelogo === "" ? "" : <span className='errorfiled'>{messagelogo}</span>}
            </div>

            {toggolemodal === false ? ""
                :
                <SaveData toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData}
                    CansalchingImage={CansalchingImage} />
            }
        </div>
    )

}

export default CompanyData;
/*

*/