import { createJsonpFetch, createQuery } from './fetchCreators'

const host_url = 'https://query.yahooapis.com/v1/public/';

const config = {
	get_weather: {
		url: `${host_url}yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
		method: 'GET'
	}
}

export const getWeather = (success, fail) =>
	createJsonpFetch(config.get_weather.url, createQuery(config.get_weather.method), success, fail)