import expect from 'expect'
import reducer from '../../src/reducers/weatherReducer'

describe('weather reducer:', () => {

	const initialState = {
		loading: false,
		city: 'Initial',
		date: "Initial",
		temp: "Initial",
		text: "Initial",
	}

	it('initial', () => {
		const expectedInitState = initialState
		expect(
			reducer(undefined, {})
		).toEqual(expectedInitState)
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

})