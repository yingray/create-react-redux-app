import 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'

const checkStatus = response => {
	if (response.status < 300) {
		return response
	} else {
		throw response
	}
}

function createQuery(method, body) {
	const query = {
		"method": method,
		"headers": {
			"Accept": "application/json",
			"Content-type": "application/json;charset=UTF-8"
		},
		"credentials": "include"
	}
	if (body) {
		query.body = JSON.stringify(body);
	}
	return query
}

export const createFetch = (param, successCallback, failCallback) => {
	fetch(param.url, createQuery(param.method, param.body))
		.then(checkStatus)
		.then(res => res.json())
		.then(res => {
			if (successCallback) {
				successCallback(res)
			}
		})
		.catch(error => {
			console.log(error)
			if (failCallback) {
				failCallback(error)
			}
		})
}

const checkJsonpStatus = response => {
	if (response.ok) {
		return response
	} else {
		throw response
	}
}

export const createJsonpFetch = (param, successCallback, failCallback) => {
	fetchJsonp(param.url, createQuery(param.method, param.body))
		.then(checkJsonpStatus)
		.then(res => res.json())
		.then(res => {
			if (successCallback) {
				successCallback(res)
			}
		})
		.catch(error => {
			console.log(error)
			if (failCallback) {
				failCallback(error)
			}
		})
}