import React from 'react'
import Card from '../components/Card'
import TodoFooter from '../components/TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoPage = () =>
  <main className="p-todo">
    <h3 className="p-todo__title">CRRS - Todo List</h3>
    <AddTodo />
    <VisibleTodoList />
    <TodoFooter />
  </main>

export default TodoPage
