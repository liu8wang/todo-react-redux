
import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { compose, withHandlers } from 'recompose';
import { map, uniqueId } from 'lodash';

import Item from './item';

import { deleteTodo, updateTodo } from '../actions';

import './todo.css';

const enhance = compose(
  connect(null, {
    deleteTodo, completeTodo
  }),
  withHandlers({
    handleDelete: props => (id) => {
      props.deleteCollection(id);
    },
    handleComplete: props => (id) => {
      props.completeTodo(id);
    },
  }),
);

export default enhance(({
  todo: { completed, name, id },
}) => (
  <div className={ cn('todo-item', { completed }) }>
    <div onClick={() => {}}>Complete</div>
    <div>{ name }</div>
    <div onClick={() => {}}>Delete</div>
  </div>
));
