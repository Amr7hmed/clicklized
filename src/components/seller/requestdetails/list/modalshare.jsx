import React, { useRef, useState } from 'react';
import IconWhatsapp from "../../../../images/icon/icon-whatsapp.png";
import IconEmail from "../../../../images/icon/icon-email.svg";
import { EmailShareButton, WhatsappShareButton } from "react-share";

function ModalShare() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  const Urlshere = "https/www.nazahatech.com/order2342342wx";
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div className="modal fade" id="modalsharerequest" tabIndex="-1" aria-labelledby="modalsharerequestLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalsharerequestLabel">Share request</h5>
          </div>
          <div className="modal-body">
            <div className="inputs">
              <input type="text" className='input_text form-control'
                ref={textAreaRef}
                readOnly
                value={Urlshere} />
              <button type='button'
                className={copySuccess === 'Copied!' ? "btn btn-share-copy" : 'btn btn-share'}
                onClick={copyToClipboard}>
                Share
              </button>
            </div>

            <div className="oruse">
              <span>Or use</span>
              <ul>
                <li className='btn-whatsapp'>
                  <WhatsappShareButton
                    className='btn'
                    url={Urlshere}
                  >
                    <img src={IconWhatsapp} alt="Icon Whatsapp" />
                    Whatsapp
                  </WhatsappShareButton>
                </li>
                <li className='btn-email'>
                  <EmailShareButton
                    className='btn'
                    url={Urlshere}
                  >
                  <img src={IconEmail} alt="Icon Email" />
                  Email
                  </EmailShareButton>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-cancel_modal" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ModalShare;