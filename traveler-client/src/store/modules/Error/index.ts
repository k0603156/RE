import { createAction, createReducer } from "typesafe-actions";
const ERROR = "error/ERROR";

export const requestFailure = createAction(
  ERROR,
  (errorType: any) => errorType
);

const initialState = {
  message: ""
};

const loading = createReducer(initialState, {
  [ERROR]: (state: any, action: any) => ({
    message: action.payload.message
  })
});

export default loading;
