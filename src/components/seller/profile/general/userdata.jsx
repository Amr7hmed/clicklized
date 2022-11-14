import React, { useState } from 'react';
import { UpdateImageprofile } from '../../../../api/seller/actionsprofile';
import Editeimage from '../../../../images/icon/uploadimage.png';
import Savedata from '../modal/savedata';

function UserData(props) {
    const {DataUser}=props;
    const [toggolemodal, setToggolemodal] = useState(false);
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);

    const SendData = () => {
        setToggolemodal(!toggolemodal);
        const usertype = localStorage.getItem("usertypeclicklized");
        console.log(file);
        UpdateImageprofile(usertype,file,setMessage)
        console.log(toggolemodal);
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
            <img src={file === null ? DataUser.image : file}
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
                UpdateImageprofile(DataUser,e.target.files[0],setMessage) ;
            }} />
                <img src={Editeimage} alt="Edite image" />
                Upload image
            </button>
            {message === ""? "" :<span className='errorfiled'>{message}</span>}
        </div>
        
        {toggolemodal === false ? 
        "" 
        :
        <Savedata toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData} />
             }
    </div>
  )
}

export default UserData