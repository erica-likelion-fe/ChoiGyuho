import { useState, useMemo } from "react";

const usePagination = (dataList = [], itemsPerPage = 16) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(dataList.length / itemsPerPage);
  }, [dataList.length, itemsPerPage]);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return dataList.slice(start, start + itemsPerPage);
  }, [dataList, currentPage, itemsPerPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return {
    currentPage,
    totalPages,
    currentData,
    setCurrentPage,
    goToNextPage,
    goToPrevPage,
  };
};

export default usePagination;
