import React from 'react'
import Header from './Header'

const App = ({ children }) =>
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>

export default App
