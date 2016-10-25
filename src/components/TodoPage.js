import React from 'react'
import Card from './Card'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoTable from './TodoTable'

let TodoPage = () => (
	<div>
		<Card title="Redux Example - Todo List">
			<AddTodo />
			<TodoTable />
			<Footer />
		</Card>
	</div>
)

export default TodoPage