import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

const Navbar = () => {

    return(
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-dark" >
            <div className="container-fluid">
                <Link to="/" style={{marginRight:'20px', }}><h6><strong>SPACEX</strong></h6></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{backgroundColor:'#212529', paddingLeft:'20px'}} id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                        <Link 
                            className="nav-link text-white" to="/successful_launch" 
                        >Launches</Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            className="nav-link text-white" to="/successful_land"
                        >Landings</Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            className="nav-link text-white" to="/launch_year" 
                        >Year</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </div>
    )
}

export default Navbar