import React from 'react'
import TodoFooter from '../components/TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoPage = () =>
  <main className="p-todo">
    <h3 className="p-todo__title">Todo List - Sample Practice!</h3>
    <AddTodo />
    <VisibleTodoList />
    <TodoFooter />
  </main>

export default TodoPage
