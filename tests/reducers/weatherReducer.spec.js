import expect from 'expect'
import reducer from '../../src/reducers/weatherReducer'

describe('weather reducer:', () => {
  const initialState = {
    loading: false,
    city: 'Initial',
    date: 'Initial',
    temp: 'Initial',
    text: 'Initial'
  }

  it('initial', () => {
    const expectedInitState = initialState
    expect(reducer(undefined, {})).toEqual(expectedInitState)
  })

  it('show loading', () => {
    const expectedInitState = Object.assign(initialState, {
      loading: true
    })
    expect(
      reducer(initialState, {
        type: 'WEATHER_SHOW_LOADING'
      })
    ).toEqual(expectedInitState)
  })

  it('show weather', () => {
    const expectedInitState = Object.assign(initialState, {
      loading: false,
      city: 'Taipei City',
      date: 'Fri, 28 Oct 2016 05:00 PM CST',
      temp: '80',
      text: 'Sunny'
    })

    const apiResponse = {
      query: {
        results: {
          channel: {
            location: {
              city: 'Taipei City'
            },
            item: {
              condition: {
                date: 'Fri, 28 Oct 2016 05:00 PM CST',
                temp: '80',
                text: 'Sunny'
              }
            }
          }
        }
      }
    }

    expect(
      reducer(initialState, {
        type: 'WEATHER_SHOW_WEATHER',
        response: apiResponse
      })
    ).toEqual(expectedInitState)
  })
})
