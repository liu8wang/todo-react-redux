import { sampleSize } from 'lodash';

import { GET_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from 'actions/constants';
import { success } from 'helpers/async';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case success(cx.GET_POSTS):
      return Object.assign([], state,
        sampleSize(action.payload, 30),
      );
    case cx.ADD_TODO: {
      const newstate = state.slice();
      newstate.push(action.payload);
      return newstate;
    }
    case cx.DELETE_TODO: {
      const newstate = state.slice();
      newstate.splice(action.payload, 1);
      return newstate;
    }
    case cx.COMPLETE_TODO: {
      const newstate = state.slice();
      newstate[action.payload.idx].title = action.payload.title;
      return newstate;
    }
    default:
      return state;
  }
};
