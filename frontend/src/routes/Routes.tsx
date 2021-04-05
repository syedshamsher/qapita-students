
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from '../pages/landingPage/LandingPage';
import { StudentDetails } from '../pages/StudentDetails';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={ () => <LandingPage/> } />
                <Route path="/details" exact render={ () => <StudentDetails/> }/>
            </Switch>
        </div>
    )
}
