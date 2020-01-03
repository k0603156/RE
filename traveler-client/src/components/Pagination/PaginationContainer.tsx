import React from "react";
import PaginationPrensnter from "./PaginationPrensnter";

const PaginationContainer = (props: {
  handlePage:
    | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
    | undefined;
  lengthPage: number;
  currentPage: number;
}) => {
  const { handlePage, lengthPage, currentPage } = props;
  return (
    <PaginationPrensnter
      handlePage={handlePage}
      lengthPage={lengthPage}
      currentPage={currentPage}
    />
  );
};

export default PaginationContainer;
