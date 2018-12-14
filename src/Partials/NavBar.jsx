import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Home} from '../Home/Home';
import {About} from '../About/About';

export class NavBar extends Component{
    render(){
        return(
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <div className="container">
                            <a className="navbar-brand" href="/">Bookstore</a>
                            <button 
                                className="navbar-toggler" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarResponsive" 
                                aria-controls="navbarResponsive" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">            
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/"> Home </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <hr />
                    <Route exact path='/' component={Home} />
                    <Route  path='/about' component={About} />
                </div>
            </Router>
        )
    }
}