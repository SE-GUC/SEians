import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import './Staff.css'


export class Staff extends Component {


    
    render(){
        return(
            <Router>
                
            <div className="Header">
              <div className="container">
              <Header name="Staff" />
                <Route path="/Staff" />
              </div>  
            </div> 
            <body>
            <a href="/handleReviewer">Reviewers</a>
   </body>
            <footer className="Footer">
            <Footer/>
            </footer>
        
          </Router>
        
        )
                }
}export default Staff