import React from 'react';
import IconSavemodal from "../../../../images/icon/savemodalicon.png";
import IconClosemodal from "../../../../images/icon/closemodal.png";

function Savedata(props) {
    const {toggolemodal ,setToggolemodal ,SendData}=props
    return (
        <div className={toggolemodal === false ?
             'modalsavedata hidemodal' :'modalsavedata showmodal'}>

            <div className="modaldata">
                <div className="modaldataheader">
                    <button type='button' className='btn btn-close'>
                        <img src={IconClosemodal} alt="Icon Close modal"
                        onClick={()=>setToggolemodal(false)} />
                    </button>
                </div>
                <div className="modaldatabody">
                    <img src={IconSavemodal} alt="Icon Save modal" />
                    <span className='text'>
                    Are you sure you want to save edits?
                    </span>
                </div>

                <div className="modaldataend">
                    <button type='button' className='btn btn-save'
                    onClick={SendData}>
                    Yes
                    </button>
                    <button type='button' className='btn btn-cancel'
                        onClick={()=>setToggolemodal(false)} >
                    Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Savedata;