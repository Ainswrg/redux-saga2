import { takeEvery, put, call, fork, spawn } from 'redux-saga/effects';
import {
  GET_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
} from '../constants';
import { getLatestNews, getPopularNews } from '../../api';
import { setLatestNews, setPopularNews } from '../actions/actionCreator';

export function* handleLatestNews() {
  try {
    // throw new Error();
    const { hits } = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch (e) {
    // throw new Error('Error fetching latest news');
    yield put({ type: SET_LATEST_NEWS_ERROR, payload: 'Error fetching latest news'});
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews, 'react');
    yield put(setPopularNews(hits));
  } catch (e) {
    yield put({ type: SET_POPULAR_NEWS_ERROR, payload: 'Error fetching popular news'});
  }
}

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
