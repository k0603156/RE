import { createAction, createReducer } from "typesafe-actions";
const ERROR = "error/ERROR";

export const requestFailure = createAction(ERROR, errorType => errorType)();

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
      status: response.status,
      statusText: response.statusText,
      message: response.data.error
    };
  }
});

export default error;
