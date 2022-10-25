import { take } from "redux-saga/effects";
import { INCREASE_COUNT, DECREASE_COUNT } from "../constants";

export function* workerSaga() {}

export function* watchClickSaga() {
  yield take(INCREASE_COUNT);
  console.log('watchClickSaga plus');
  yield take(DECREASE_COUNT);
  console.log('watchClickSaga minus');
}

export default function* rootSaga() {
  yield watchClickSaga();
}
