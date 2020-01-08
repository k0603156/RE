import { createAction, createReducer } from "typesafe-actions";
const ERROR = "error/ERROR";
const CLEAR_ERROR = "error/CLEAR_ERROR";

export const requestFailure = createAction(ERROR, errorType => errorType)();
export const clearError = createAction(CLEAR_ERROR)();
const initialState = {
  status: "",
  statusText: "",
  message: ""
};

const error = createReducer(initialState, {
  [ERROR]: (state: any, action: any) => {
    const response = action.payload.response;
    console.log(action);
    return {
      status: "",
      statusText: "",
      message: response.data.error
    };
  },
  [CLEAR_ERROR]: (state: any, action: any) => {
    return {
      status: "",
      statusText: "",
      message: ""
    };
  }
});

export default error;
