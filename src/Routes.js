import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import AllData from './components/AllData'
import Successful_launch from './components/Successful_launch'
import Successful_Land from'./components/Successful_Land'
import Launch_year from './components/Launch_year'
 const Routers = () => {
    return (
        <Router>
                <Switch>
                    <Route path='/' exact component={AllData}/>
                    <Route path='/successful_launch' component={Successful_launch}  />
                    <Route path='/successful_land' component={Successful_Land}  />
                    <Route path='/launch_year' component={Launch_year}  />
                </Switch>
        </Router>
    )
}
export default Routers