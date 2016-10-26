import { apis } from '../apis/apis'

export const showWeather = response => ({
	type: 'WEATHER_SHOW_WEATHER',
	response
})

export const loadWeather = () => ({
	type: 'WEATHER_SHOW_LOADING'
})

export const getWeather = () => dispatch => {
	dispatch(loadWeather())
	const success = response => {
		console.log('getWeather!!')
		console.log(response)
		dispatch(showWeather(response))
	}
	const fail = error => {}
	return apis.getWeather(success, fail)
}