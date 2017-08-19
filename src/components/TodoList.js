import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) =>
  <table className="c-todo__list">
    <thead />
    <tbody>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
    </tbody>
  </table>

export default TodoList
