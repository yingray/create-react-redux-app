import ApiBook from 'api-book'
const headers = {
  'Content-Type': 'text/plain;charset=UTF-8'
}
const options = {}
const book = {
  getWeather: {
    url: 'https://query.yahooapis.com/v1/public/yql',
    method: 'GET',
    payload: {
      query: {
        q:
          'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="{{city}}, ak")',
        format: 'json',
        env: 'store://datatables.org/alltableswithkeys'
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
  fetchAndThen: [statusMiddleware, toJsonMiddleware]
})
export default Apis
