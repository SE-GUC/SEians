import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Menu from '../../../components/Layout/Menu';
import logo from '../../../components/Layout/img/logo.png';
const axios = require('axios')

export class Companies extends Component {

  componentDidMount() {
    var token = JSON.parse(localStorage.getItem('admintoken'))
if(!token){
alert("ACCESS DENIED!!!");
window.location.href = "http://localhost:3000/AdminLogin";


}
  }

    render(){

      let links = [
        { label: 'Home', link: '/AdminHome' },
        { label: 'Staff', link: '/Staff' },
        { label: 'Companies', link: '/Companies' },
        { label: 'Assign Tasks', link: '#portfolio' },
        { label: 'Review Forms', link: '#contact-us' },
      ];
        return(
            <Router>
              <div>
                <Menu links={links} logo={logo}/>
                </div>


              <Header name="Companies" />
              <Route path="/Companies" />
              <center>
              <a style={{ fontSize:"30px"}} href="/CreateCompany" class="btn btn-default">Create a Company</a>
              <br/>
              <br/>
              <a style={{ fontSize:"30px"}} href="/GetCompany" class="btn btn-default">Manage Companies</a>
              <br/>
              <br/>
              <a style={{ fontSize:"30px"}} href="/UpdateCompany" class="btn btn-default">Update Company</a>

              </center>
            <footer className="Footer">
            <Footer/>
            </footer>

          </Router>

        )
                }

              }

export default Companies
