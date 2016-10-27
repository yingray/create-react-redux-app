import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
	<div className="mdl-grid">
		<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--12-col">
			<thead>
			<tr>
				<th className="mdl-data-table__cell--non-numeric">Todo List</th>
			</tr>
			</thead>
			<tbody>
			{todos.map(todo =>
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
				/>
			)}
			</tbody>
		</table>
	</div>

)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList