import React from 'react'
import logo from '../images/logo.svg'
import Card from './Card'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo"/>
			<h2>Welcome to React-Redux</h2>
		</div>
		<div className="App-intro">
			<br/>

			<Card title="Todo">
				<AddTodo />
				<VisibleTodoList />
				<Footer />
			</Card>

			<br/>

			<Card title="Weather"/>

			<br/>
		</div>
	</div>
)

export default App
