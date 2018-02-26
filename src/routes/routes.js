import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/home/home'
import Contact from '../components/contact/contact'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
)

export default Routes