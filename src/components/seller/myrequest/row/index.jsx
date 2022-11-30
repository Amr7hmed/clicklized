import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from "react-paginate";
import RequestCardSeller from '../card';

function RequestRowSeller(props) {
  const { Data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerpage = 4;


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
    <>
      <div className='myrequestseller__row'>
        {currentItems.map(item =>
          <RequestCardSeller Dataoffer={item} key={item.id} />
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
  )
}

export default RequestRowSeller;