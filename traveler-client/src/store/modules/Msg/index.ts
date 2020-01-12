import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import { createAction, createReducer } from "typesafe-actions";
const CREATE_MSG = "msg/CREATE_MSG";
const CLEAR_MSG = "msg/CLEAR_MSG";

export const createMSG = createAction(
  CREATE_MSG,
  (actionType, msgType: "ALERT" | "ERROR", Message) => {
    return { actionType, msgType, Message };
  }
)();
export const clearMSG = createAction(CLEAR_MSG, () => {
  return {};
})();

const initialState: IMsgState = {
  isAlert: false,
  actionType: "",
  msgType: "ALERT",
  message: "",
  status: ""
};

const msgReducer = createReducer(initialState, {
  [CREATE_MSG]: (state: any, action: any) => {
    const { actionType, msgType, Message } = action.payload;
    return {
      isAlert: true,
      actionType,
      msgType,
      message: Message.response?.data.message || Message.message,
      status: Message.response?.status || "localErr"
    };
  },
  [CLEAR_MSG]: (state: any, action: any) => {
    return {
      isAlert: false,
      actionType: "",
      msgType: "ALERT",
      message: "",
      status: ""
    };
  }
});

function* increaseStorySaga() {
  yield delay(3000);
  yield put(clearMSG());
}

function* increaseStory() {
  yield takeLatest(CREATE_MSG, increaseStorySaga);
}

function* msgSaga() {
  yield all([fork(increaseStory)]);
}
export { msgSaga };
export default msgReducer;
