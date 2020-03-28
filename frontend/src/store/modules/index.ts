import { combineReducers } from "redux";
import auth from "./Auth/reducers";
import authSaga from "./Auth/saga";
import user from "./User/reducers";
import userSaga from "./User/saga";
import post from "./Post/reducers";
import postSaga from "./Post/saga";
import postlist from "./Postlist/reducers";
import postlistSaga from "./Postlist/saga";
import main from "./Main/reducers";
import mainSaga from "./Main/saga";
import loading from "./Loading";
import msg, { msgSaga } from "./Msg";

import { all, fork } from "redux-saga/effects";

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer: any = combineReducers<RootStateType>({
  main,
  auth,
  user,
  post,
  postlist,
  loading,
  msg
});
export default rootReducer;
export function* rootSaga() {
  yield all([
    fork(mainSaga),
    fork(authSaga),
    fork(userSaga),
    fork(postSaga),
    fork(postlistSaga),
    fork(msgSaga)
  ]);
}
