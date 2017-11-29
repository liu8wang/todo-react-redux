
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
    handleDelete: props => (idx) => {
      props.deleteTodo(idx);
    },
    handleComplete: props => (idx) => {
      props.completeTodo(idx);
    },
  }),
);

export default enhance(({
  idx,
  item: { completed, title },
  handleDelete,
  handleComplete,
}) => (
  <div className={cn('todo-item', { completed })}>
    <div>
      { completed
        ? <div><i className="fa fa-check-circle-o" /></div>
        :
        <Link onClick={() => handleComplete(idx)}><i className="fa fa-circle-o" /></Link>
      }
    </div>
    <div className="title">{ title }</div>
    <Link onClick={() => handleDelete(idx)}>
      <i className="fa fa-close" />
    </Link>
  </div>
));
