import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Menu from '../../components/Layout/Menu';
import logo from '../../components/Layout/img/logo.png';

export class ReviewerHome extends Component {



render(){
  let links = [
    { label: 'Home', link: '#home', active: true },
    { label: 'About', link: '#about' },
    { label: 'View SSC Tasks', link: '/SscCase' },
    { label: 'View SPC Tasks', link: '/SpcSearch' },
    { label: 'Log Out', link: '#log-out' }

  ];

return(
  <Router>

  <div className="NavigationBar">
    <div className="container">
    <Menu links={links} logo={logo} />
      <body>
     <Header name = "Reviewer Portal"/></body>
      <Route exact path="/" render={props => (
        <React.Fragment>
         <li><a href="default.asp">Home</a></li>
         <li><a href="news.asp">News</a></li>
         <li><a href="contact.asp">Contact</a></li>
         <li><a href="about.asp">About</a></li><br></br>


        </React.Fragment>
      )} />
      <Route path="/about" />
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>
    <a href="/SpcUpdate"> update forms </a><br/>
    <a href="/SpcDelete"> delete forms </a><br/>
  </div>

</Router>
)
}
}

export default ReviewerHome
