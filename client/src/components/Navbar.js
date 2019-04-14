import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style= {{marginTop: '100px', marginLeft: '100px'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" >
                            <Link className="nav-link" to="/register">register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SearchInvestor">Search Investor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/UpdateInvestor">Update Investor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/DeleteInvestor">Delete Investor</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;