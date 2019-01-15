import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Launches from './Components/Launches'
import Launch from './Components/Launch'
import React from 'react'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Launches}></Route>
            <Route exact path="/launch/:flight_number" component={Launch}></Route>
        </Switch>
    </BrowserRouter>
)