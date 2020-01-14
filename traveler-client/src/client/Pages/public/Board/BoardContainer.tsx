import React from "react";
import BoardPresenter from "./BoardPresenter";
import { withRouter } from "react-router-dom";
const BoardContainer = withRouter(
  ({
    match: {
      params: { boardName }
    }
  }) => {
    const POST_LENGTH: number = 100;
    const POST_PER_PAGE: number = 10;
    const LENGTH_PAGE: number = POST_LENGTH / POST_PER_PAGE;
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const handlePage = (e: any) => {
      e.persist();
      setCurrentPage(parseInt(e.currentTarget.dataset.page));
    };

    return (
      <BoardPresenter
        handlePage={handlePage}
        lengthPage={LENGTH_PAGE}
        currentPage={currentPage}
      />
    );
  }
);

export default BoardContainer;
