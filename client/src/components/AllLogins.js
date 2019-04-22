import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import axios from 'axios';


export class AllLogins extends Component {
    render(){
        return(
            <Router>
        
        <div className="container">
            <body>
           <Header name = "Login"/></body> 
            <div className="container center">

              
          </div>
        </div>
        <a href="/AdminLogin">Admin Login</a><br/>
        <a href="/Login">Login as Investor</a><br/>
        <footer className="Footer">
        <Footer/>
        </footer>
    
      </Router>
           
        )
    }
}
export default AllLogins;
