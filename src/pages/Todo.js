import React from 'react'
import Card from '../components/Card'
import TodoFooter from '../components/TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoPage = () =>
  <div>
    <Card title="Redux Example - Todo List">
      <AddTodo />
      <VisibleTodoList />
      <TodoFooter />
    </Card>
  </div>

export default TodoPage
