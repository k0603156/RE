import React, { useEffect, useCallback } from "react";
import BoardPresenter from "./BoardPresenter";
import { withRouter } from "react-router-dom";
const BoardContainer = withRouter(
  ({
    match: {
      params: { boardName }
    }
  }) => {
    const POST_LENGTH = 100;
    const POST_PER_PAGE = 10;
    const [currentPage, setCurrentPage]: [
      number,
      React.Dispatch<React.SetStateAction<number>>
    ] = React.useState<number>(1);

    const handlePage = (e: any) => {
      e.persist();
      setCurrentPage(e.currentTarget.dataset.page);
    };

    return (
      <BoardPresenter
        handlePage={handlePage}
        lengthPage={POST_LENGTH / POST_PER_PAGE}
        currentPage={currentPage}
      />
    );
  }
);

export default BoardContainer;
