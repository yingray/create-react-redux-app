import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'

const Header = props =>
  <div className="App-header">
    <img src={logo} className="App-logo" alt="create-react-redux-app-logo" />
    <h2>Create React Redux App</h2>
    <p>
      <i className="material-icons">account_balance</i>
      Github:&nbsp;
      <a href="https://github.com/yingray/create-react-redux-app">
        https://github.com/yingray/create-react-redux-app
      </a>
    </p>
    <Navigation />
  </div>

export default Header
