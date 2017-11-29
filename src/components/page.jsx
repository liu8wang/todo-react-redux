
import React from 'react';
import { connect } from 'react-redux';

import { compose, lifecycle } from 'recompose';
import { TodoList } from 'components';

import { GET_TODOS } from '../actions/constants';
import { getTodos } from '../actions';

import './todo.css';

const enhance = compose(
  connect(({
    todos,
    async,
  }) => ({
    todos,
    status: async.statuses[GET_TODOS]
  }), {
    getTodos,
  }),
  lifecycle({
    componentWillMount() {
      this.props.getTodos();
    },
  }),
);

export default enhance(({
  todos,
  status
}) => (
  <div id="todo-container" className='container'>
    <h2>Todos</h2>
    <div className='todo-list'>
      { status === 'pending' && <div className='text-center'>Loading...</div> }
      { status === 'success' && 
        <TodoList 
          todos={todos}
        />
      }
    </div>
  </div>
));
