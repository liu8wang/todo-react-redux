
import { takeLatest } from 'redux-saga/effects';
import { apiClient, async } from 'helpers';

import * as cx from 'actions/constants';

const getTodos = async.apiCall({
  type: cx.GET_TODOS,
  method: apiClient.get,
  path: () => '/todos',
  success: res => res.data,
});

export default function* rootSaga() {
  yield takeLatest(cx.GET_TODOS, getTodos);
}
