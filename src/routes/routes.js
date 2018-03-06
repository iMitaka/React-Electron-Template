import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/home/home'
import Action from '../components/action/action'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/action/:currency/:symbol' component={Action} />
    </Switch>
)

export default Routes