import { List } from 'immutable';
import { sampleSize } from 'lodash';

import { GET_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions/constants';
import { success } from '../helpers/async';

const initialState = List();

export default (state = initialState, action) => {
  switch (action.type) {
    case success(GET_TODOS):
      return List(sampleSize(action.payload, 30));
    case ADD_TODO: {
      return state.push(action.payload);
    }
    case DELETE_TODO: {
      return state.delete(action.payload);
    }
    case COMPLETE_TODO: {
      return state.update(action.payload, obj => ({
        ...obj,
        completed: true,
      }));
    }
    default:
      return state;
  }
};
