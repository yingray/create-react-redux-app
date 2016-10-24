import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
	<li className="mdl-list__item"
	    onClick={onClick}
	    style={{
		    textDecoration: completed ? 'line-through' : 'none'
	    }}
	>
		<span className="mdl-list__item-primary-content">
            {text}
        </span>
	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo