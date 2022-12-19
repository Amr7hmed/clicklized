import React, { useState } from 'react';
import { useContext } from 'react';
import { UpdateImageprofile } from '../../../../api/profile';
import Editeimage from '../../../../images/icon/uploadimage.png';
import SaveData from '../../../../layout/modal/savedata';
import { Authcontext } from '../../../../store/context';

function UserData(props) {
    const {DataUser}=props;
    const [toggolemodal, setToggolemodal] = useState(false);
    const [message, setMessage] = useState("");
    const [imagedata,setImagedata]=useState(null);
    const [file, setFile] = useState(DataUser.image);
    const ImageError = "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
  
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const SendData = () => {
        setToggolemodal(!toggolemodal);
        UpdateImageprofile(imagedata,setMessage) ;
    }

    const CansalchingImage=()=>{
        setFile(DataUser.image);
        setToggolemodal(!toggolemodal);
        setImagedata(null);
    }
  return (
    <div className='userdata'>
        <div className="left">
            <ul>
                <li>
                    <span className="title">
                        {language === "Ar" ?"الأسم":"User name"}
                    </span>
                    <span className="data">{DataUser.name}</span>
                </li>
                <li>
                    <span className="title">
                        {language === "Ar" ?"الأيميل":"Business Email"}
                    </span>
                    <span className="data">{DataUser.email}</span>
                </li>
                <li>
                    <span className="title">
                        {language === "Ar" ?"رقم الهاتف":"Contact Number"}
                    </span>
                    <span className="data">{DataUser.phone}</span>
                </li>
            </ul>
        </div>
        <div className="right">
            <img src={file === null ? ImageError : file}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                    "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                }}
            alt={DataUser.name} />

            <button type='button' className='btn'>
            <input type="file" className="input-file" accept="image/*"
             onChange={e => {
                setFile(URL.createObjectURL(e.target.files[0]));
                setToggolemodal(!toggolemodal);
                setImagedata(e.target.files[0]);
            }} />
            
            {language === "Ar" ?
            <>
            تغيير الصوره
            <img src={Editeimage} alt="Edite image" />
            </>
            :
            <>
            <img src={Editeimage} alt="Edite image" />
                Upload image
            </>
            }
                
            </button>
            {message === ""? "" :<span className='errorfiled'>{message}</span>}
        </div>
        {toggolemodal === false ? 
        "" 
        :
        <SaveData toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData} 
        CansalchingImage={CansalchingImage}/>
             }
    </div>
  )
}

export default UserData