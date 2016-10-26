import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/HomePage'
import TodoPage from './components/TodoPage'
import WeatherPage from './components/WeatherPage'

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="home" component={HomePage}/>
		<Route path="todo" component={TodoPage}/>
		<Route path="weather" component={WeatherPage}/>
	</Route>
)

export default routes
