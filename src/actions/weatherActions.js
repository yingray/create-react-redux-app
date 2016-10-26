import * as apis from '../apis/apis'

export const showWeather = response => ({
	type: 'WEATHER_SHOW_WEATHER',
	response
})

export const getWeather = () => {
	return dispatch => {
		const success = response => {
			console.log('success fetch')
			console.log(response)
			dispatch(showWeather(response))
		}
		const fail = error => {}
		return apis.getWeather(success, fail)
	}
}