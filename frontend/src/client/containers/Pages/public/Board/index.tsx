import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";

import { RootStateType } from "client/configureStore";
import { boardlistBrowseAction } from "client/containers/Pages/public/Main/actions";

import { boardSetPageAction, boardBrowseAction } from "./actions";

import {
  perPageSelector,
  boardNameSelector,
  postsSelector,
  pageSelector,
  totalCountSelector,
} from "./selectors";

import BoardTemplate from "client/components/templates/BoardTemplate";

export interface IProps extends RouteComponentProps<{ boardId: string }> {
  perPage: number;
  boardName: string;
  boardposts: RootStateType["board"];
  page: number;
  totalCount: number;
  boardlistBrowseAction: typeof boardlistBrowseAction;
  boardBrowseAction: typeof boardBrowseAction;
  boardSetPageAction: typeof boardSetPageAction;
}

const BoardContainer = ({
  match: {
    params: { boardId },
  },
  perPage,
  boardName,
  totalCount,
  boardposts,
  page,
  boardlistBrowseAction,
  boardBrowseAction,
  boardSetPageAction,
}: IProps) => {
  React.useEffect(() => {
    boardlistBrowseAction();
    boardBrowseAction(Number(boardId), page);
  }, [boardId, page]);

  const handlePage = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.persist();
    boardSetPageAction(Number(e.currentTarget.dataset.page!));
  };
  return (
    <BoardTemplate
      title={boardName}
      currentPage={page}
      totalCount={totalCount}
      postlist={boardposts.rows}
      postPerPage={perPage}
      handlePage={handlePage}
    />
  );
};

const ConnectedBoardContainer = connect(
  (state: RootStateType, props: IProps) => ({
    perPage: perPageSelector(state),
    boardName: boardNameSelector(state, props),
    totalCount: totalCountSelector(state),
    page: pageSelector(state),
    boardposts: postsSelector(state),
  }),
  { boardlistBrowseAction, boardSetPageAction, boardBrowseAction },
)(BoardContainer);

export default withRouter(ConnectedBoardContainer);
