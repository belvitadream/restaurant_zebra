import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Reviews from './pages/Reviews'
import Error from './pages/Error'
import Events from './pages/Events'
import Event from './pages/Event'
// navbar
import Navbar from './components/Navbar'

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/reviews'>
          <Reviews />
        </Route>
        <Route path='/events'>
          <Events />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        {/* home / page should be the last one. cause matches everything. Or we can place "exact" word */}
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/event/:id' children={<Event />}></Route>
        {/* SHOULD BE LAST route.
        if any wrong adress is entered we are going to error page, thanks to the * star, cause start matches every character */}
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default ReactRouterSetup
