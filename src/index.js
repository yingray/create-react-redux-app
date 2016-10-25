import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// If your server supports server rendering, use browserHistory replace with hashHistory.
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './store'
import routes from './routes'
import './styles/index.css'

const state = window.__initialState__ || undefined;
const store = configureStore(hashHistory, state);
const history = syncHistoryWithStore(hashHistory, store);

render(
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>,
	document.getElementById('root')
)
