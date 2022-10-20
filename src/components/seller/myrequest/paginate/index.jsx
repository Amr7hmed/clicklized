import React, { useState } from 'react';
import ReactPaginate from "react-paginate";

function Paginate() {
    const [perpage, setPerpage] = useState(6);

    const handlePageClick = (data) => {
        let number = 1 + data.selected;
        console.log(number);
      };

  return (<>
  <ReactPaginate
    previousLabel="< Back"
    nextLabel="Next >"
    breakLabel={"..."}
    pageCount={perpage}
    pageSize={1}
    marginPagesDisplayed={1}
    pageRangeDisplayed={1}
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
  />
  </>
  )
}

export default Paginate;