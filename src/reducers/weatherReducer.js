import _ from 'lodash'

const initialState = {
	city: 'Taipei City',
	date: "Wed, 26 Oct 2016 08:00 AM CST",
	temp: "80",
	text: "Mostly Sunny",
}

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'WEATHER_SHOW_WEATHER':
			const location = action.response.query.results.channel.location
			const condition = action.response.query.results.channel.item.condition
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