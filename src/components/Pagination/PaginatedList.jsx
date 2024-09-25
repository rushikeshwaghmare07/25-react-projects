import React, { useState } from 'react';
import ItemList from './ItemList';
import Pagination from './Pagination';

const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

const PaginatedList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-400">
      <h1 className="text-3xl font-bold mb-4">Pagination App</h1>

      <ItemList items={currentItems} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginatedList;
