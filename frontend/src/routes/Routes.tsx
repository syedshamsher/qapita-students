import React from 'react'
import { Route, Switch } from 'react-router'
import { LandingPage } from '../pages/landingPage/LandingPage'
import { StudentDetails } from '../pages/StudentDetails/StudentDetails'

export const Routes = () => {
    return (
        <div>
            <Switch>

            <Route path="/" exact render={()=> <LandingPage/>} />
            <Route path="/details" exact render={()=> <StudentDetails/>}/>
            </Switch>
        </div>
    )
}
