import React, { Component } from 'react'
import {Link} from 'react-router-dom'

 class Landing extends Component {
  render() {
    return (
        <div className="landing">
        <div >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 style ={color}className="display-3 mb-4">Sumerge Homepage
                </h1>
                <p style ={color} className="lead"> Finish your documents faster</p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                <Link to="/lawyer/register" className="btn btn-lg btn-info mr-2">LawyerSignUp</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const color={
    color: "white"
}

export default Landing;
