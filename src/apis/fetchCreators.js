import 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'

const checkStatus = response => {
	if (response.status < 300) {
		return response
	} else {
		throw response
	}
}

export const createFetch = (url, query, successCallback, failCallback) => {
	fetch(url, query)
		.then(checkStatus)
		// .then(res => res.json())
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

export const createJsonpFetch = (url, query, successCallback, failCallback) => {
	fetchJsonp(url, query)
		.then(res => {
			if (res.ok) {
				return res
			} else {
				throw res
			}
		})
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

export function createQuery(method, body, cookie) {
	const query = {
		"method": method,
		"headers": {
			"Accept": "application/json",
			"Content-type": "application/json;charset=UTF-8"
		},
		"credentials": `${cookie ? 'include' : ''}`,
		"mode": 'no-cors'
	}
	if (body) {
		query.body = JSON.stringify(body);
	}
	return query
}