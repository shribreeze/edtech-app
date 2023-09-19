import React from 'react'
import "./App.css"
import Header from './components/common/header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/home/Home'
import About from './components/about/About'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </>
  )hh
}

export default App