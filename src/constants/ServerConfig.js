const mode = "dev"

const config = {
	url: {
		dev: 'https://query.yahooapis.com/v1/public/',
		stg: 'https://query.yahooapis.com/v1/public/',
		prod: 'https://query.yahooapis.com/v1/public/'
	},
	key: {
		dev: 'AbcdEfg',
		stg: 'AbcdEfg',
		prod: 'AbcdEfg'
	}
}

export const host_url = () => config.url[mode]
export const api_key = () => config.key[mode]



