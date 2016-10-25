import React from 'react'
import { Link } from 'react-router'

const Navigation = ({ className }) => (
	<nav className={className}>
		<Link className="mdl-navigation__link" to="/">Home</Link>
		<Link className="mdl-navigation__link" to="passwordCommon">Common</Link>
		<Link className="mdl-navigation__link" to="">Link</Link>
		<Link className="mdl-navigation__link" to="">Link</Link>
	</nav>
)

Navigation.defaultProps = {
	className: 'mdl-navigation'
}

export default Navigation