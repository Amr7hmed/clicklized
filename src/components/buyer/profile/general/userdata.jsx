import React, { useState } from 'react';
import { UpdateImageprofile } from '../../../../api/profile';
import Editeimage from '../../../../images/icon/uploadimage.png';
import SaveData from '../../../../layout/modal/savedata';

function UserData(props) {
    const {DataUser}=props;
    const [toggolemodal, setToggolemodal] = useState(false);
    const [message, setMessage] = useState("");
    const [imagedata,setImagedata]=useState(null);
    const [file, setFile] = useState(DataUser.image);
    const ImageError = "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
  

    const SendData = () => {
        setToggolemodal(!toggolemodal);
        UpdateImageprofile(imagedata,setMessage) ;
    }
  return (
    <div className='userdata'>
        <div className="left">
            <ul>
                <li>
                    <span className="title">User name</span>
                    <span className="data">{DataUser.name}</span>
                </li>
                <li>
                    <span className="title">Business email</span>
                    <span className="data">{DataUser.email}</span>
                </li>
                <li>
                    <span className="title">Contact Number</span>
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
                <img src={Editeimage} alt="Edite image" />
                Upload image
            </button>
            {message === ""? "" :<span className='errorfiled'>{message}</span>}
        </div>
        {toggolemodal === false ? 
        "" 
        :
        <SaveData toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData} />
             }
    </div>
  )
}

export default UserData