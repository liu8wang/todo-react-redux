import * as cx from './constants';

export function getTodos() {
  return { type: cx.GET_TODOS };
}

export function addTodo(payload) {
  return { type: cx.DELETE_TODO, payload };
}

export function deleteTodo(payload) {
  return { type: cx.DELETE_TODO, payload };
}

export function completeTodo(payload) {
  return { type: cx.COMPLETE_TODO, payload };
}
