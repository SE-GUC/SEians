import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Menu from '../../components/Layout/Menu';
import logo from '../../components/Layout/img/logo.png';


export class InvestorHome extends Component{
render(){
  let links = [
    { label: 'Home', link: '#home', active: true },
    { label: 'About', link: '#about' },
    { label: 'View Company', link: '/GetCompany1' },
    { label: 'Log Out', link: '#log-out' }

  ];

return(
<div>
  <Router>
<div className="NavigationBar">
      <div className="container">
      <Menu links={links} logo={logo} />
        <body>
      <Header name="Home" /></body>
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
</div>
);
}
}
export default InvestorHome
