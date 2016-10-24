import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoTable = () => (
	<div className="mdl-grid">
		<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp mdl-cell mdl-cell--12-col">
			<thead>
			<tr>
				<th className="mdl-data-table__cell--non-numeric">Todo List</th>
			</tr>
			</thead>
			<VisibleTodoList />
		</table>
	</div>
)

export default TodoTable