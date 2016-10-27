import React from 'react'
import Card from './Card'
import TodoFooter from './TodoFooter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

let TodoPage = () => (
	<div>
		<Card title="Redux Example - Todo List">
			<AddTodo />
			<VisibleTodoList />
			<TodoFooter />
		</Card>
	</div>
)

export default TodoPage