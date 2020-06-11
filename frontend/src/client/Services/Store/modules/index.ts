import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import main from "client/containers/Pages/public/Main/reducers";
import mainSaga from "client/containers/Pages/public/Main/saga";
import board from "client/containers/Pages/public/Board/reducers";
import boardSaga from "client/containers/Pages/public/Board/saga";
import post from "client/containers/Pages/public/Post/reducers";
import postSaga from "client/containers/Pages/public/Post/saga";
import auth from "client/containers/Pages/session/Auth/reducers";
import authSaga from "client/containers/Pages/session/Auth/saga";
import profile from "client/containers/Pages/private/Profile/reducers";
import profileSaga from "client/containers/Pages/private/Profile/saga";

import loading from "client/containers/Providers/Loading";
import msg, { msgSaga } from "client/containers/Providers/Msg";

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
