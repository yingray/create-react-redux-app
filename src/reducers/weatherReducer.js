const initialState = {
  loading: false,
  city: 'Initial',
  date: 'Initial',
  temp: 'Initial',
  text: 'Initial'
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WEATHER_SHOW_LOADING':
      return Object.assign({}, state, {
        loading: true
      })

    case 'WEATHER_SHOW_WEATHER':
      const location = action.response.query.results.channel.location
      const condition = action.response.query.results.channel.item.condition
      return Object.assign({}, state, {
        loading: false,
        city: location.city,
        date: condition.date,
        temp: condition.temp,
        text: condition.text
      })

    default:
      return Object.assign({}, state, initialState)
  }
}

export default weatherReducer
