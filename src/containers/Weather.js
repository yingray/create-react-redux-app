import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as weatherActions from '../actions/weatherActions';

const Weather = ({ weatherState, actions }) => (
	<div className="demo-card-square mdl-card mdl-shadow--2dp">
		<div className="mdl-card__title mdl-card--expand">
			<h2 className="mdl-card__title-text">{weatherState.city} - {weatherState.temp}&#8457;</h2>
		</div>
		<div className="mdl-card__supporting-text">
			{weatherState.date}
			<br/>
			{weatherState.text}
		</div>
		<div className="mdl-card__actions mdl-card--border">
			<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
			   onClick={actions.getWeather}>
				View Updates&nbsp;
				{weatherState.loading ? <i className="material-icons" style={{"animation": "App-logo-spin infinite 2s linear"}}>rotate_right</i> : ''}
			</a>
		</div>
	</div>
)

export default connect(
	state => ({
		weatherState: state.weatherReducer
	}),
	dispatch => ({
		actions: bindActionCreators(weatherActions, dispatch)
	})
)(Weather)