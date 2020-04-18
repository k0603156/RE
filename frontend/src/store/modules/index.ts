import { combineReducers, Reducer } from "redux";
import auth from "./Auth/reducers";
import authSaga from "./Auth/saga";
import user from "./User/reducers";
import userSaga from "./User/saga";
import post from "./Post/reducers";
import postSaga from "./Post/saga";
import board from "./Board/reducers";
import boardSaga from "./Board/saga";
import main from "./Main/reducers";
import mainSaga from "./Main/saga";
import loading from "./Loading";
import msg, { msgSaga } from "./Msg";

import { all, fork } from "redux-saga/effects";

const rootReducer = combineReducers({
  main,
  auth,
  user,
  post,
  board,
  loading,
  msg,
});
export type RootStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
export function* rootSaga() {
  yield all([
    fork(mainSaga),
    fork(authSaga),
    fork(userSaga),
    fork(postSaga),
    fork(boardSaga),
    fork(msgSaga),
  ]);
}
