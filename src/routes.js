import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/HomePage'
import TodoPage from './components/TodoPage'

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="home" component={HomePage}/>
		<Route path="todo" component={TodoPage}/>
	</Route>
)

export default routes
