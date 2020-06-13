import { createSelector } from "reselect";
import { RootStateType } from "client/configureStore";

export const getBoardId = (state: RootStateType) => state.main.boardId;

export const getBoardList = (state: RootStateType) => state.main.boards;

export const getPostList = (state: RootStateType) => state.main.posts;

export const boardIdSelector = createSelector(
  [getBoardId],
  (boardId) => boardId,
);

export const boardNameSelector = createSelector(
  [getBoardId, getBoardList],
  (boardId, boards) => (boards.length !== 0 ? boards[boardId - 1].name : ""),
);

export const boardlistSelector = createSelector(
  [getBoardList],
  (boards) => boards,
);

export const postlistSelector = createSelector([getPostList], (posts) => posts);
