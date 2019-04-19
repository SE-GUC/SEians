import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header'
import Footer from '../../../../components/Layout/Footer'

const axios = require('axios')


export class UpdateSuccess1 extends Component {

    render(){
        return(
          <Router>
                
          <div className="Header">
            <div className="container">
            <Header name="Lawyer Updated Successfully!" />
              <Route path="/Staff" />
            </div>  
          </div>
          <a style={{ fontSize:"30px"}} href="/handleLawyer" class="btn btn-default">Back to Lawyer</a>
          <footer className="Footer">
          <Footer/>
          </footer>
      
        </Router>
        )



    }

}
export default UpdateSuccess1