import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header'
import Footer from '../../../../components/Layout/Footer'

const axios = require('axios')


export class UpdateSuccess extends Component {

    render(){
        return(
          <Router>
                
          <div className="Header">
            <div className="container">
            <Header name="Reviewer Deleted Successfully!" />
              <Route path="/Staff" />
            </div>  
          </div>
          <a style={{ fontSize:"30px"}} href="/handleReviewer" class="btn btn-default">Back</a>
          <footer className="Footer">
          <Footer/>
          </footer>
      
        </Router>
        )



    }

}
export default UpdateSuccess