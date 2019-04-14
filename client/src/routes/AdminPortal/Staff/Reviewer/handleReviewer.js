import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header'
import Footer from '../../../../components/Layout/Footer';
import '../Staff.css'


export class handleReviewer extends Component {


    
    render(){
        return(
            <Router>
                
            <div className="Header">
              <div className="container">
              <Header name="Handle Reviewers"/>
                <Route path="/Staff" />
              </div>  
            </div> 
            <body>
            <a href="/CreateReviewer">Add Reviewer To the System</a><br></br>
            <a href="/GetReviewer">View/Delete Reviewer's Data </a><br></br>
            <a href="/UpdateReviewer">Update Reviewer's Data </a>
   </body>
            <footer className="Footer">
            <Footer/>
            </footer>
        
          </Router>
        
        )
                }
}export default handleReviewer