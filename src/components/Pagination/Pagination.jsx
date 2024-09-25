import React from 'react';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 text-gray-700'}`}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 text-gray-700'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
