import React from 'react'
import Header from './Header'

const App = ({ children }) =>
  <div className="App">
    <Header />
    <div>
      {children}
    </div>
  </div>

export default App
