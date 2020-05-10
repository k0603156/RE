import { all, fork, takeLatest, delay, put } from "redux-saga/effects";
import { createAction, createReducer } from "typesafe-actions";
import { InitialState } from "./types";

const MSG_CREATE = "msg/MSG_CREATE";
const MSG_CLEAR = "msg/MSG_CLEAR";

export const msgCreate = createAction(
  MSG_CREATE,
  (actionType, msgType: "ALERT" | "ERROR", Message) => {
    return { actionType, msgType, Message };
  },
)();
export const msgClear = createAction(MSG_CLEAR, () => {
  return {};
})();

const initialState: InitialState = {
  isAlert: false,
  actionType: "",
  msgType: "ALERT",
  message: "",
  status: "",
};

const msgReducer = createReducer(initialState, {
  [MSG_CREATE]: (state: any, action: any) => {
    const { actionType, msgType, Message } = action.payload;
    return {
      isAlert: true,
      actionType,
      msgType,
      message: Message.response?.data.message || Message.message,
      status: Message.response?.status || "localErr",
    };
  },
  [MSG_CLEAR]: () => {
    return {
      isAlert: false,
      actionType: "",
      msgType: "ALERT",
      message: "",
      status: "",
    };
  },
});

function* increaseStorySaga() {
  yield delay(3000);
  yield put(msgClear());
}

function* increaseStory() {
  yield takeLatest(MSG_CREATE, increaseStorySaga);
}

function* msgSaga() {
  yield all([fork(increaseStory)]);
}
export { msgSaga };
export default msgReducer;
