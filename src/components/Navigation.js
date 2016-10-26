import React from 'react'
import { Link } from 'react-router'

const Navigation = ({ className, buttonClassName }) => (
	<nav className={className}>
		<Link className={buttonClassName} to="/">Home</Link>
		<Link className={buttonClassName} to="todo">Todo</Link>
		<Link className={buttonClassName} to="weather">Weather</Link>
	</nav>
)

Navigation.defaultProps = {
	className: '',
	buttonClassName: 'mdl-button mdl-js-button mdl-button--primary'
}

export default Navigation