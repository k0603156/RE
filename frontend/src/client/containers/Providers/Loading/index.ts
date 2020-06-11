import { createAction, createReducer } from "typesafe-actions";

const LOADING_START = "loading/LOADING_START";
const LOADING_FINISH = "loading/LOADING_FINISH";

export const loadingStart = createAction(
  LOADING_START,
  (requestType) => requestType,
)();

export const loadingFinish = createAction(
  LOADING_FINISH,
  (requestType) => requestType,
)();

const initialState: any = {};

export default createReducer(initialState, {
  [LOADING_START]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [LOADING_FINISH]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});
