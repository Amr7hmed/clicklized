import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from "react-paginate";
import RequestCard from './card';

function RequestRow(props) {
  const { Data } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerpage = 9;


  useEffect(() => {
    const endOffest = itemOffset + itemPerpage;
    setCurrentItems(Data.slice(itemOffset, endOffest));
    setPageCount(Math.ceil(Data.length / itemPerpage));
  }, [itemOffset, itemPerpage, Data]);

  const handlePageClick = (e) => {
    const newOffest = (e.selected * itemPerpage) % Data.length;
    setItemOffset(newOffest);
  };

  return (
    <div className='myrequest__row'>
      { Data.length < 9 ?

          <div className="row">
            {Data.map(item =>
              <RequestCard key={item.id} Item={item} />
            )}
          </div>

          : <>
            <div className="row">
              {currentItems.map(item =>
                <RequestCard key={item.id} Item={item} />
              )}
            </div>

            <ReactPaginate
              previousLabel="< Back"
              nextLabel="Next >"
              breakLabel={"..."}
              pageCount={pageCount}
              postsPerPage={2}
              pageSize={1}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
              renderOnZeroPageCount={null}
            />
          </>
      }
    </div>
  )
}

export default RequestRow;