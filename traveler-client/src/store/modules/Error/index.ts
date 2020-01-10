import { createAction, createReducer } from "typesafe-actions";
const CREATE_ERROR = "error/CREATE_ERROR";
const CLEAR_ERROR = "error/CLEAR_ERROR";

export const createError = createAction(CREATE_ERROR, (Type, Error) => {
  return { Type, Error };
})();
export const clearError = createAction(CLEAR_ERROR)();
const initialState = {
  type: "",
  status: "",
  message: ""
};

const errorReducer = createReducer(initialState, {
  [CREATE_ERROR]: (state: any, action: any) => {
    return {
      type: action.payload.Type,
      status: action.payload.Error.response?.status || "localErr",
      message:
        action.payload.Error.response?.data.message ||
        action.payload.Error.message
    };
  },
  [CLEAR_ERROR]: (state: any, action: any) => {
    return {
      type: "",
      status: "",
      message: ""
    };
  }
});

export default errorReducer;
