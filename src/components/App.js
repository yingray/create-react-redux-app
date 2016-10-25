import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'

const App = ({ children }) => (
	<div className="App">
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo"/>
			<h2>Create React Redux App</h2>
			<h6>- Yingray Lu -</h6>
			<p>
				<i className="material-icons">account_balance</i> Github: <a href="https://github.com/yingray/create-react-redux-app">https://github.com/yingray/create-react-redux-app</a>
			</p>
			<Navigation />
		</div>
		<br/><br/>
		<div>
			{children}
		</div>
	</div>
)

export default App
