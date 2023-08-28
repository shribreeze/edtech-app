import React from 'react'
import "./App.css"
import Header from './components/common/header/Header'
import { BrowserRouter as Router, Switch } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default App