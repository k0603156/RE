import { createSelector } from "reselect";
import { RootStateType } from "client/configureStore";

export const getPerPage = (state: RootStateType) => state.board.perPage;

export const getBoardId = (state: RootStateType, props: any) =>
  Number(props.match.params.boardId);

export const getBoards = (state: RootStateType) => state.main.boards;

export const getPosts = (state: RootStateType) => state.board;

export const getPage = (state: RootStateType) => state.board.page;

export const getTotalCount = (state: RootStateType) => state.board.count;

export const perPageSelector = createSelector(
  [getPerPage],
  (perPage) => perPage,
);

export const boardIdSelector = createSelector(
  [getBoardId],
  (boardId) => boardId,
);

export const boardNameSelector = createSelector(
  [getBoardId, getBoards],
  (boardId, boards) =>
    boards.filter((board) => Number(board.id) === boardId)[0]?.name,
);
export const pageSelector = createSelector([getPage], (page) => page);

export const totalCountSelector = createSelector(
  [getTotalCount],
  (totalCount) => totalCount,
);

export const postsSelector = createSelector([getPosts], (board) => board);
