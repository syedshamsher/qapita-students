import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from '../pages/landingPage/LandingPage';

export const Routes = () => {
    return (
        <div>
            <Route path="/" render={ () => <LandingPage/> } />
        </div>
    )
}
