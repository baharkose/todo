import React, { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div style={{display: totalItems > 3 ? "block": "none"}} >
      <div className="nextAndBack"> 
        <AiFillCaretLeft
          className="left"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        />
        <AiFillCaretRight
          className="right"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default Pagination;
