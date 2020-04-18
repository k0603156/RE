import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { boardBrowseAction } from "@Store/modules/Board/actions";
import { RootStateType } from "@Store/modules";
import BoardPresenter from "./BoardPresenter";

export interface IProps extends RouteComponentProps<{ boardName: string }> {
  main: RootStateType["main"];
  board: RootStateType["board"];
  boardBrowseAction: typeof boardBrowseAction;
}

const BoardContainer = withRouter((props: IProps) => {
  const POST_PER_PAGE = 5;

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    props.boardBrowseAction(currentPage);
  }, [props.match.params.boardName, currentPage]);
  const handlePage = (e: any) => {
    e.persist();
    setCurrentPage(parseInt(e.currentTarget.dataset.page));
  };
  return (
    <BoardPresenter
      title={"title"}
      handlePage={handlePage}
      lengthPage={Math.ceil(props.board.count / POST_PER_PAGE)}
      currentPage={currentPage}
      postlist={props.board.rows}
    />
  );
});

export default connect(
  ({ main, board, loading }: RootStateType) => ({ main, board }),
  { boardBrowseAction }
)(BoardContainer);
