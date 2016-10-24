import React from 'react'

const Card = ({title, children}) => (
	<div className="demo-card-wide mdl-card mdl-shadow--2dp">
		<div className="mdl-card__title">
			<h2 className="mdl-card__title-text">{title}</h2>
		</div>
		<div className="mdl-card__supporting-text">
			Lorem orsum dolor sit amet, consectetur adipiscing elit.
			Mauris sagittis pellentesque lacus eleifend lacinia...
			{children}
		</div>
	</div>
)

export default Card;
