import React from 'react'
import { Route, Switch } from 'react-router'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { EditPage } from '../pages/EditPage/EditPage'
import { LandingPage } from '../pages/landingPage/LandingPage'
import { StudentDetails } from '../pages/StudentDetails/StudentDetails'

export const Routes = () => {
    return (
        <div>
            <Switch>

            {/* <Route path="/" exact render={()=> <LandingPage/>} />
            <Route path="/details" exact render={()=> <StudentDetails/>}/> */}
            <Route path="/" exact render={()=> <EditPage/>}/>
            <Route path="/dashboard" render={()=> <Dashboard/>} />
            </Switch>
        </div>
    )
}
