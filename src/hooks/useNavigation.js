import { useState } from 'react';

const useNavigation = (initialPage, totalPages) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1)); // Ensure currentPage does not exceed totalPages
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0)); // Ensure currentPage is not less than 0
  };

  return {
    currentPage,
    nextPage,
    prevPage,
    setCurrentPage,
  };
};

export default useNavigation;