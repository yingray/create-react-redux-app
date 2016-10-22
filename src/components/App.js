import React from 'react'
import logo from '../images/logo.svg';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Welcome to React-Redux</h2>
		</div>
		<p className="App-intro">
			To get started, edit <code>src/containers/App.js</code> and save to reload.
			<AddTodo />
			<VisibleTodoList />
			<Footer />
		</p>
	</div>
)

export default App
