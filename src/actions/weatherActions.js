import weatherApi from '../services/weatherApi'

export const showWeather = response => ({
  type: 'WEATHER_SHOW_WEATHER',
  response
})

export const loadWeather = () => ({
  type: 'WEATHER_SHOW_LOADING'
})

export const getWeather = () => async dispatch => {
  dispatch(loadWeather())
  const request = {
    city: 'taipei',
    search_type: 'yql',
    env: 'store://datatables.org/alltableswithkeys'
  }
  try {
    const response = await weatherApi.getWeather(request)
    dispatch(showWeather(response))
  } catch(e) {
    console.error(e)
  }
}
