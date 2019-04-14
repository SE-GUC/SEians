import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';

import logo from '../../../components/Layout/img/logo.png';

export class CreatedSuccessfully extends Component {


  render() {

  return (

    <Router>



      <Header name="Companies" />
      <Route path="/Companies" />
      <center>

    <p style={{fontSize:"50px"}}>Company created successfully!</p>
    <br/>
    <br/>
    <br/>
    <a style={{ fontSize:"30px"}} href="/Companies" class="btn btn-default">Back to Companies</a>

      </center>
    <footer className="Footer">
    <Footer/>
    </footer>

  </Router>

  )
}



  }
  export default CreatedSuccessfully
