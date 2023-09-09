import React from 'react';
import { useLocation } from 'react-router-dom';

const Pagination = ({ currentPage, pageSize, totalItems }) => {
  const location = useLocation();

  const handlePageChange = page => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', page);
    window.location.search = searchParams.toString();
  };

  const totalPages = Math.ceil(totalItems / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      {pages.map(page => (
        <button
          key={page}
          className={`px-2 py-1 mx-1 border rounded ${
            page === currentPage ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
