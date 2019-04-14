import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Navbar';

export default ()=><div>
  <Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Home" />
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
      </Router>

      <div style= {{marginTop: '100px', marginLeft: '500px'}}>
      <li className="nav-item">
      <a href="/Register">Register as investor</a>
      </li>
      <li className="nav-item">
      <a href="/Login">login as investor</a>     
      </li>
      <li className="nav-item">
      <a href="/SearchInvestor">searchINInvestor</a>
      </li>
      <li className="nav-item">
      <a href="/UpdateInvestor">UpdateInvestor</a>
      </li>
      <li className="nav-item">
      <a href="/DeleteInvestor">deleteInvestor</a>
      </li>
    </div>
</div>;

