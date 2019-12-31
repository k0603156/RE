import React from "react";
import { IPagination } from "./Pagination";
import PaginationPrensnter from "./PaginationPrensnter";

const PaginationContainer = ({
  handlePage,
  lengthPage,
  currentPage
}: IPagination) => {
  return (
    <PaginationPrensnter
      handlePage={handlePage}
      lengthPage={lengthPage}
      currentPage={currentPage}
    />
  );
};

export default PaginationContainer;
