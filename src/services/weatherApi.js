import ApiBook from 'api-book'
const headers = {
  'Content-Type': 'text/plain;charset=UTF-8'
}
const options = {}
const book = {
  getWeather: {
    url: '/v1/public/{{search_type}}',
    method: 'GET',
    payload: {
      query: {
        q:
          'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="{{city}}, ak")',
        format: 'json',
        env: '{{env}}'
      }
    },
    headers: headers,
    options: options
  }
}
function statusMiddleware(response) {
  if (response.status > 399) {
    throw response
  }
  return response
}
function toJsonMiddleware(response) {
  return response.json()
}
const Apis = new ApiBook.ApiCreator(book, {
  host: 'https://query.yahooapis.com',
  fetchAndThen: [statusMiddleware, toJsonMiddleware]
})
export default Apis
