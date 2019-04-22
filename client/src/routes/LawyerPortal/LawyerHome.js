import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Menu from '../../components/Layout/Menu';
import logo from '../../components/Layout/img/logo.png';

import './LawyerHome.css'
export class LawyerHome extends Component {



render(){
  
  let links = [
    { label: 'Home', link: '#home', active: true },
    { label: 'About', link: '#about' },
    { label: 'Review Forms', link: '/SscCase' },
    { label: 'Log Out', link: '#log-out' },
  ];
return(
    <Router>
        
    <div className="NavigationBar">
      <div className="container">
      <Menu links={links} logo={logo} />
        <body>
       <Header name = "Lawyer Portal"/></body>
        <Route exact path="/" render={props => (
          <React.Fragment>
           <li><a href="default.asp">Home</a></li>
           <li><a href="news.asp">News</a></li>
           <li><a href="contact.asp">Contact</a></li>
           <li><a href="about.asp">About</a></li>
          </React.Fragment>
        )} />
        <Route path="/about" />
      </div>  
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>
    <a href="/SpcCreate">Create Form</a><br/>
    <a href="/SpcSearch"> search in forms </a><br/>
  </Router>
)
}
}

export default LawyerHome
