import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import AddTodo from './AddTodo'
import TodoTable from '../components/TodoTable'

import { connect } from 'react-redux'
import { addTodo } from '../actions'

let TodoPage = () => (
	<div>
		<Card title="Redux Example - Todo List">
			<AddTodo />
			{/*<TodoTable />*/}
			<Footer />
		</Card>
	</div>
)

TodoPage = connect()(TodoPage)

export default TodoPage