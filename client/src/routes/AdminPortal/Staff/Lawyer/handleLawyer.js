import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header'
import Footer from '../../../../components/Layout/Footer';
import '../Staff.css'


export class handleLawyer extends Component {


    
    render(){
        return(
            <Router>
                
            <div className="Header">
              <div className="container">
              <Header name="Handle Lawyers"/>
                <Route path="/Staff" />
              </div>  
            </div> 
            <body>
              
            <a href="/CreateLawyer">Add Lawyer To the System</a><br></br>
            <a href="/GetLawyer">View/Delete Lawyer's Data </a><br></br>
            <a href="/UpdateLawyer">Update Lawyer's Data </a>
   </body>
            <footer className="Footer">
            <Footer/>
            </footer>
        
          </Router>
        
        )
                }
}export default handleLawyer