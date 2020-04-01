import {
  BOARD_SELECT_MUTATE,
  BOARDLIST_BROWSE_REQUEST,
  POSTLIST_BROWSE_REQUEST,
  IMainAction
} from "./types";

//** CREATE ACTION **//
export function boardSelectMutate(boardId: string): IMainAction {
  return {
    type: BOARD_SELECT_MUTATE,
    payload: {
      boardId
    }
  };
}

export function boardlistBrowseAction(): IMainAction {
  return {
    type: BOARDLIST_BROWSE_REQUEST
  };
}

export function postlistBrowseAction(boardId: string): IMainAction {
  return {
    type: POSTLIST_BROWSE_REQUEST,
    payload: {
      boardId
    }
  };
}
