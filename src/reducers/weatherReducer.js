import _ from 'lodash'

const initialState = {
	loading: false,
	city: 'Initial',
	date: "Initial",
	temp: "Initial",
	text: "Initial",
}

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'WEATHER_SHOW_LOADING':
			state.loading = true
			return _.merge({}, state)

		case 'WEATHER_SHOW_WEATHER':
			const location = action.response.query.results.channel.location
			const condition = action.response.query.results.channel.item.condition
			state.loading = false
			state.city = location.city
			state.date = condition.date
			state.temp = condition.temp
			state.text = condition.text
			return _.merge({}, state)

		default:
			return _.merge({}, state)
	}
}

export default weatherReducer