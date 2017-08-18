import weatherApi from '../services/weatherApi'

export const showWeather = response => ({
  type: 'WEATHER_SHOW_WEATHER',
  response
})

export const loadWeather = () => ({
  type: 'WEATHER_SHOW_LOADING'
})

export const getWeather = () => dispatch => {
  dispatch(loadWeather())
  const request = { city: 'taipei' }
  weatherApi
    .getWeather(request)
    .then(response => dispatch(showWeather(response)))
    .catch(error => {})
}
