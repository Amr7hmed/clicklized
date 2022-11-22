import React from 'react';

function ModelGallaryImage(props) {
  const { Data ,Id} = props;
  return (
    <div className="modal fade modelgallaryimage"
      id={`modelgallaryimage${Id}`} tabIndex="-1"
      aria-labelledby="modelgallaryimageLabel" aria-hidden="true">
      <div
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="image">
              <img src={Data} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModelGallaryImage;