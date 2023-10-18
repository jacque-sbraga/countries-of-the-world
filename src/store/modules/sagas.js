import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';

function* exemploRequest() {
  try {
    yield call();
    yield put(actions.requestSuccess());
  } catch {
    yield put(actions.requestError());
  }
}

function* watchFetchData() {
  yield takeEvery(types.FETCH_DATA_REQUEST, exemploRequest);
}

export default function* rootSaga() {
  yield [watchFetchData];
}
