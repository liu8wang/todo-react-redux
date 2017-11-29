import React from 'react';
import { Route } from 'react-router';

import { TodoPage } from './components';

const routes = (
  <div id="todo-app">
    <Route path="/" component={TodoPage} />
  </div>
);

export default routes;
