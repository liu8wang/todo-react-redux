
import { takeLatest } from 'redux-saga/effects';
import { apiClient, async } from '../helpers';

import { GET_TODOS } from '../actions/constants';

const getTodos = async.apiCall({
  type: GET_TODOS,
  method: apiClient.get,
  path: () => '/todos',
  success: res => res.data,
});

export default function* rootSaga() {
  yield takeLatest(GET_TODOS, getTodos);
}
