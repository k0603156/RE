import { combineReducers, Reducer } from "redux";
import auth from "./Auth/reducers";
import authSaga from "./Auth/saga";
import profile from "./Profile/reducers";
import profileSaga from "./Profile/saga";
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
  profile,
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
    fork(profileSaga),
    fork(postSaga),
    fork(boardSaga),
    fork(msgSaga),
  ]);
}
