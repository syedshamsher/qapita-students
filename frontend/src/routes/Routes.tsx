
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { LandingPage } from '../pages/landingPage/LandingPage';
import { StudentDetails } from '../pages/StudentDetails/StudentDetails';

export const Routes = () => {
    return (
        <div>
                <Route path="/" exact render={ () => <LandingPage/> } />
            <Switch>
                <Route path="/dashboard" exact render={ () => <Dashboard/> } />
                <Route path="/details" exact render={ () => <StudentDetails/> }/>
            </Switch>
        </div>
    )
}
