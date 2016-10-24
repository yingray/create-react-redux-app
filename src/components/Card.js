import React from 'react'

const Card = ({ title, children }) => (
	<div className="demo-card-wide mdl-card mdl-shadow--2dp">
		<div className="mdl-card__title">
			<h2 className="mdl-card__title-text">{title}</h2>
		</div>
		<div className="mdl-card__supporting-text">
			<strong>Material Design Lite</strong> lets you add a Material Design look and feel to your websites. It doesn’t rely on any
			JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and
			offer an experience that is immediately accessible. Get started now.
			{children}
		</div>
	</div>
)

export default Card;
