
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import cn from 'classnames';
import { compose, withHandlers } from 'recompose';

import { deleteTodo, completeTodo } from '../actions';

import './todo.css';

const enhance = compose(
  connect(null, {
    deleteTodo,
    completeTodo,
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
  handleDelete,
  handleComplete,
}) => (
  <div className={cn('todo-item', { completed })}>
    <Link onClick={() => handleDelete(id)}>Complete</Link>
    <div>{ name }</div>
    <Link onClick={() => handleComplete(id)}>Delete</Link>
  </div>
));
