import React,  { useState } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";


const Pagination = (props) => {

  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;
  const left = useState(1);
  const right = useState(5);

  return (

    <div>
      <button onClick={() => onPageChange(start - 1)}><AiOutlineCaretLeft /></button>

      {/* Using Array to map over the range of pages
      {Array.from({ length: 5 }, (_, index) => (
        <button key={index + start} onClick={() => onPageChange(index + start)}>
          {index + start}
        </button>
      ))} */}

      {
        
      }

      <button onClick={() => onPageChange(start + 5)}><AiOutlineCaretRight /></button>
    </div>
  )
}

export default Pagination;
