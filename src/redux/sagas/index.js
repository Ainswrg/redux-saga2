import { takeEvery, takeLatest, takeLeading, select } from "redux-saga/effects";
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";
import counter from "../reducers/counter";

const delay = (time) => new Promise((resolve, reject) => {
  setTimeout(resolve, time * 1000);
})

export function* workerSaga() {
  const count = yield select(({ counter }) => counter.count);
  yield delay(3);
  console.log(`watchClickSaga plus ${count}`);
  yield;
}

export function* watchClickSaga() {
  yield takeLatest(INCREASE_COUNT, workerSaga);
  yield takeLeading(INCREASE_COUNT, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
