import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Inicio from '../Inicio'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Inicio}/>
        <Route path='/login' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
