import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function ModelGallaryImage(props) {
  const { Data, Id } = props;
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
              <embed src={Data.image} type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%" />

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModelGallaryImage;