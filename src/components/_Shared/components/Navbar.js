import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to='/' exact>react-traning</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink className="nav-link" to='/' exact>Home</NavLink></li>
                        <li><NavLink className="nav-link" to='/product' exact>Product</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;