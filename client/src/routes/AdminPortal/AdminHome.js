import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Menu from '../../components/Layout/Menu';
import Footer from '../../components/Layout/Footer';
import logo from '../../components/Layout/img/logo.png';

export class AdminHome extends Component {



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

    <div className="container">
      <div className="container2">
      <Menu links={links} logo={logo} />
        <body>
       <Header name = "Admin Portal"/></body> </div>  </div>
        <div className="container center">
       < div>< div>

      </div>
      </div>
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>

  </Router>
)
}
}

export default AdminHome
