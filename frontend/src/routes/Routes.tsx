import React from 'react'
import { Route, Switch } from 'react-router'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { EditPage } from '../pages/EditPage/EditPage'
import { LandingPage } from '../pages/landingPage/LandingPage'
import { StudentDetails } from '../pages/StudentDetails/StudentDetails'
s
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
