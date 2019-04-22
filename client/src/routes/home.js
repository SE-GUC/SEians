import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Menu from '../components/Layout/Menu';
import logo from '../components/Layout/img/logo.png';
import { Link } from 'react-router-dom';


let links = [
    { label: 'Login', link: '/AllLogins' },
    { label: 'Register as Investor', link: '/Register' },

  ];

export default ()=><div>
    <Router>
        <div className="NavigationBar">
          <div className="container">
          <Menu links={links} logo={logo} />
             <Header name="Welcome to Summerge" />
          </div>  
        </div>
        <footer className="Footer">
        <Footer/>
        </footer>
    
      </Router>
    <a href="/ReviewerHome">ReviewerHome</a><br/>
    <a href="/LawyerHome">LawyerHome</a><br/>
</div>;