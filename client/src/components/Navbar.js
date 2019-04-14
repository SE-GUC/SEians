import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style= {{marginTop: '100px', marginLeft: '100px'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/SpcCreate">SpcCreate</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SpcSearch">Spc Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SpcDelete">Spc Delete</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SpcUpdate">SpcUpdate</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar