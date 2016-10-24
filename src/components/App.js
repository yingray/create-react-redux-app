import React from 'react'
import logo from '../images/logo.svg'
import Card from './Card'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoTable from '../components/TodoTable'

const App = () => (
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo"/>
			<h2>Create React Redux App</h2>
			<h6>- Yingray Lu -</h6>
			<p>Github: <a href="https://github.com/yingray/create-react-redux-app">https://github.com/yingray/create-react-redux-app</a>
			</p>
		</div>

		<br/>

		<Card title="Redux Example - Todo List">
			<AddTodo />
			<TodoTable />
			<Footer />
		</Card>

		<br/>

		<Card title="Weather"/>

		<br/>

	</div>
)

export default App
