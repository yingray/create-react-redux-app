import React from 'react'
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

export default TodoList