'use client';
import { useState } from "react";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";

type PropsType = {
  totalPage: number;
  onPageChange: (page: number) => void;
};

function PaginationComponent({ totalPage, onPageChange }: PropsType) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center gap-1">
      <a
      
        onClick={() => handlePageChange(currentPage - 1)}
        className={`inline-flex items-center justify-center w-8 h-8 rounded border border-gray-200 bg-white text-gray-900 ${currentPage === 1 && 'cursor-not-allowed'}`}
      >
        <BiSkipPrevious />
      </a>

      {Array.from({ length: totalPage }, (_, i) => (
        <a
          key={i}
          
          onClick={() => handlePageChange(i + 1)}
          className={`block w-8 h-8 rounded border ${currentPage === i + 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-200 bg-white text-gray-900'} text-center leading-8`}
        >
          {i + 1}
        </a>
      ))}

      

      <a
        
        onClick={() => handlePageChange(currentPage + 1)}
        className={`inline-flex items-center justify-center w-8 h-8 rounded border border-gray-200 bg-white text-gray-900 ${currentPage === totalPage && 'cursor-not-allowed'}`}
      >
        <BiSkipNext />
      </a>
    </div>
  );
}

export default PaginationComponent;
