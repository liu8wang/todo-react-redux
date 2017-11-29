
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

import async from './async';
import todos from './todos';

const rootReducer = combineReducers({
  async,
  todos,
  form: formReducer,
  routing,
});

export default rootReducer;
