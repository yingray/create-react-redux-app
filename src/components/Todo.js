import React from 'react'

const Todo = ({ onClick, completed, text }) => (
	<tr>
		<td className="mdl-data-table__cell--non-numeric"
		    onClick={onClick}
		    style={{
			    textDecoration: completed ? 'line-through' : 'none'
		    }}
		>
		<span className="mdl-list__item-primary-content">
            {text}
        </span>
		</td>
	</tr>
)

export default Todo