import React from "react";
// import { createSelector } from "reselect";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { RootStateType } from "client/configureStore";
import { boardlistBrowseAction } from "client/containers/Pages/public/Main/actions";
import { boardSetPageAction, boardBrowseAction } from "./actions";
import BoardTemplate from "client/components/templates/BoardTemplate";

export interface IProps extends RouteComponentProps<{ boardName: string }> {
  boardList: RootStateType["main"]["boardlist"];
  boardposts: RootStateType["board"];
  boardlistBrowseAction: typeof boardlistBrowseAction;
  boardBrowseAction: typeof boardBrowseAction;
  boardSetPageAction: typeof boardSetPageAction;
}

const BoardContainer = withRouter(
  ({
    match,
    boardList,
    boardposts,
    boardlistBrowseAction,
    boardBrowseAction,
    boardSetPageAction,
  }: IProps) => {
    const POST_PER_PAGE = 5;
    React.useEffect(() => {
      boardlistBrowseAction();
      boardBrowseAction(Number(match.params.boardName), boardposts.page);
    }, [match.params.boardName, boardposts.page]);

    const handlePage = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      e.persist();
      boardSetPageAction(Number(e.currentTarget.dataset.page!));
    };

    return (
      <BoardTemplate
        title={
          boardList.filter(
            ({ id }) => Number(id) === Number(match.params.boardName),
          )[0]?.name
        }
        totalCount={boardposts.count}
        currentPage={boardposts.page}
        postlist={boardposts.rows}
        postPerPage={POST_PER_PAGE}
        handlePage={handlePage}
      />
    );
  },
);

export default connect(
  ({ main, board }: RootStateType) => ({
    boardList: main.boardlist,
    boardposts: board,
  }),
  { boardlistBrowseAction, boardSetPageAction, boardBrowseAction },
)(BoardContainer);
