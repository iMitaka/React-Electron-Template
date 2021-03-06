import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/home/home'
import Action from '../components/action/action'
import RedeemCode from '../components/redeem-code/redeem-code'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/action/:currency/:symbol' component={Action} />
        <Route exact path='/redeem-code' component={RedeemCode} />
        <Route path='/' component={Home} />
    </Switch>
)

export default Routes