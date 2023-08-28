import React from 'react'
import Header from './components/common/header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {
            /*<About />*/
          }
        </Switch>
      </Router>
    </>
  )
}

export default App