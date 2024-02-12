import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/registration">New User Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/customer">Existing Customer</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default NavigationBar;