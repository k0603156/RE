import { createSelector } from "reselect";
import { RootStateType } from "client/configureStore";

export const getBoardId = (state: RootStateType) => state.main.boardId;

export const getBoardList = (state: RootStateType) => state.main.boards;

export const getPostList = (state: RootStateType) => state.main.posts;

export const pickBoardSelector = createSelector(
  [getBoardId, getBoardList, getPostList],
  (boardId, boards, posts) => ({
    id: boardId,
    name: boards.length !== 0 ? boards[boardId - 1].name : "",
    rows: posts,
  }),
);

export const boardlistSelector = createSelector(
  [getBoardList],
  (boards) => boards,
);
