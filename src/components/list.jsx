
import React from 'react';
import { uniqueId } from 'lodash';
import { compose, pure } from 'recompose';
import { TodoItem } from '../components';

import './todo.css';

const enhance = compose(
  pure,
);

export default enhance(({
  todos,
}) => (
  <div className="list-wrapper">
    { todos.length === 0 &&
      <div>There is nothing to show.</div>
    }
    { todos.length > 0 &&
      todos.map(todo => (
        <TodoItem key={uniqueId()} item={todo} />
      ))
    }
  </div>
));
