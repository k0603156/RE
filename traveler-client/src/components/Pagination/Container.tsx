import React from "react";
import Presenter from "./Presenter";

const Container = (props: {
  handlePage:
    | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
    | undefined;
  lengthPage: number;
  currentPage: number;
}) => {
  const { handlePage, lengthPage, currentPage } = props;
  return (
    <Presenter
      handlePage={handlePage}
      lengthPage={lengthPage}
      currentPage={currentPage}
    />
  );
};

export default Container;
