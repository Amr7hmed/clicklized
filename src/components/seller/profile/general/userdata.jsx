import React, { useState } from 'react';
import Editeimage from '../../../../images/icon/uploadimage.png';
import Savedata from '../modal/savedata';

function UserData(props) {
    const {DataUser}=props;
    const [image, setImage] = useState("");
    const [toggolemodal, setToggolemodal] = useState(false);
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
        setImage(e.target.files[0]);
        setToggolemodal(true);
        const filesdata = e.target.files[0];

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

    const SendData = () => {
        console.log(image);
        setToggolemodal(false);
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
            <img src={urlimage === null ? DataUser.image : urlimage}
            alt={DataUser.name} />
            <button type='button' className='btn'>
                                <input type="file" className="input-file"
                                    onChange={e => handleFileSelect(e)} />
                <img src={Editeimage} alt="Edite image" />
                Upload image
            </button>
        </div>
        
        <Savedata toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} SendData={SendData} />
    </div>
  )
}

export default UserData