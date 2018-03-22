import React from 'react'
import { Helmet } from 'react-helmet'
import TodoFooter from '../components/TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoPage = () => [
  <Helmet>
    <meta
      name="description"
      content="React Redux example demonstrates how to implement todo list!"
    />
  </Helmet>,
  <main className="p-todo">
    <h3 className="p-todo__title">Todo List - Sample Practice!</h3>
    <AddTodo />
    <VisibleTodoList />
    <TodoFooter />
  </main>
]
export default TodoPage
