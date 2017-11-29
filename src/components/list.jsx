
import React from 'react';
import { uniqueId } from 'lodash';
import { TodoItem } from 'components';

import './todo.css';

export default ({
  todos
}) => (
  <div className='list-wrapper'>
    { todos.length == 0 && 
      <div>There's nothing to show</div>
    }
    { todos.length > 0 && 
      todos.map((todo) => (
        <TodoItem key={uniqueId()} item={todo} />
      ))
    }
  </div>
)
