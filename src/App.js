import React from 'react'
import "./App.css"
import Header from './components/common/header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/home/Home'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App