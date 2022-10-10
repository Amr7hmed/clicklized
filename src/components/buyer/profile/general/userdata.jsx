import React from 'react';
import Editeimage from '../../../../images/icon/uploadimage.png';

function UserData(props) {
    const {DataUser}=props;
    
    const handleFileSelect = (e) => { 
        console.log(e.target.files[0]);
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
            <img src={DataUser.image} alt={DataUser.name} />
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

export default UserData