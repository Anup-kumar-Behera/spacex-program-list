import React from 'react'
import {Link, useHistory, withRouter, BrowserRouter as Router} from 'react-router-dom'

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color:"#red"}
    }else{
        return {color:"#black"}
    }
} 
const Navbar = ({history}) => {

    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link 
                            style={currentTab(history, '/')}
                            className="nav-link text-white"  to="/"
                        >All_Programs</Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            style={currentTab(history, '/successful_launch')}
                            className="nav-link text-white" to="/successful_launch" 
                        >Successful_Launches</Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            style={currentTab(history, '/successful_land')}
                            className="nav-link text-white" to="/successful_land"
                        >Successful_Landings</Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            style={currentTab(history, '/launch_year')}
                            className="nav-link text-white" to="/launch_year" 
                        >Search_by_Year</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </div>
    )
}

export default withRouter(Navbar)