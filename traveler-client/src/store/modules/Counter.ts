import { put, takeEvery, delay } from "redux-saga/effects";
import { createAction, ActionType, createReducer } from "typesafe-actions";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_ASYNC = "INCREMENT_ASYNC";
const DECREMENT_ASYNC = "DECREMENT_ASYNC";

export const increment: any = createAction(INCREMENT);
export const decrement: any = createAction(DECREMENT);
export const incrementAsync: any = createAction(INCREMENT_ASYNC);
export const decrementAsync: any = createAction(DECREMENT_ASYNC);

function* incrementAsyncSaga() {
  yield delay(1000);
  yield put(increment());
}

function* decrementAsyncSaga() {
  yield delay(1000);
  yield put(decrement());
}

export function* counterSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
  yield takeEvery(DECREMENT_ASYNC, decrementAsyncSaga);
}
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

const actions = { increment, decrement, incrementAsync, decrementAsync };
type CounterAction = ActionType<typeof actions>;

export default createReducer<CounterState, CounterAction>(initialState, {
  [INCREMENT]: state => ({ count: state.count + 1 }),
  [DECREMENT]: state => ({ count: state.count - 1 }),
  [INCREMENT_ASYNC]: (state, action) => ({
    count: state.count + action.payload
  })
});
