import {
  BOARD_SELECT_TRIGGER,
  BOARDLIST_BROWSE_REQUEST,
  POSTLIST_BROWSE_REQUEST,
  IMainAction,
} from "./types";

//** CREATE ACTION **//
export function boardSelectAction(boardId: string): IMainAction {
  return {
    type: BOARD_SELECT_TRIGGER,
    payload: {
      boardId,
    },
  };
}

export function boardlistBrowseAction(): IMainAction {
  return {
    type: BOARDLIST_BROWSE_REQUEST,
  };
}

export function postlistBrowseAction(boardId: string): IMainAction {
  return {
    type: POSTLIST_BROWSE_REQUEST,
    payload: {
      boardId,
    },
  };
}
