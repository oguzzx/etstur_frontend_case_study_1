import React, { useState } from "react";

function Paginate({ otels, setOtels, pageNumbers, paginate, currentPage }) {
  return (
    <div className="paginate">
      {pageNumbers.map((number) => (
        <button
          style={
            currentPage === number
              ? { backgroundColor: "red" }
              : { backgroundColor: " #4caf50" }
          }
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Paginate;
