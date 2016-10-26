import React from 'react'

const Card = ({ title, children }) => (
	<div className="demo-card-wide mdl-card mdl-shadow--2dp">
		<div className="mdl-card__title">
			<h2 className="mdl-card__title-text">{title}</h2>
		</div>
		<div className="mdl-card__supporting-text">
			{children}
		</div>
	</div>
)

Card.defaultProps = {
	title: 'Default'
}

export default Card;
