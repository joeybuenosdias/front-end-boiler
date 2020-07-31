import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

/** components */
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';

export const App = () => {
    return (
        <div>
            <NavLink to={'/dashboard'}>Dashboard</NavLink>
            <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/dashboard" component={Dashboard} />
                <Route component={Dashboard} />
            </Switch>
        </div>
    )
}

export default App;