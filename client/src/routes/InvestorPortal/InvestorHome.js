import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Navbar from '../../components/Navbar';


export class InvestorHome extends Component {


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

)
        }
    }

export default InvestorHome
/* <Router>
        
    <div className="NavigationBar">
    <div>
      <Navbar />
      <div className="container">
      <Header name="Home" />
      <Route exact path="/SpcCreate" component={ SpcCreate } />
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
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>

  </Router>

)
        }
    }*/