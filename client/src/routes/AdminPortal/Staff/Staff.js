import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';


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
            <footer className="Footer">
            <Footer/>
            </footer>
        
          </Router>
        
        )
                }
}export default Staff