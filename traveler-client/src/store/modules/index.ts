import { combineReducers } from "redux";
import auth from "./Auth/reducers";
import authSaga from "./Auth/saga";
import user from "./User/reducers";
import userSaga from "./User/saga";
import plan from "./Plan/reducers";
import planSaga from "./Plan/saga";
import loading from "./Loading";
import Error from "./Error";

import { all, fork } from "redux-saga/effects";

const rootReducer: any = combineReducers<RootStateType>({
  auth,
  user,
  plan,
  loading,
  Error
});
export default rootReducer;
export function* rootSaga() {
  yield all([fork(authSaga), fork(userSaga), fork(planSaga)]);
}
