import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header';
import Menu from '../../../components/Layout/Menu';
import Footer from '../../../components/Layout/Footer';
import logo from '../../../components/Layout/img/logo.png';

export class StaffRev extends Component {

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
    { label: 'logout', link: '/AdmLoggedout' }

  ];

return(

    <Router>

    <div className="container">
      <div className="container2">
      <Menu links={links} logo={logo} />
        <body>
       <Header name = "Reviewers"/></body> </div>  </div>
        <div className="container center">
       < div>< div>
          
       <div style= {{marginTop: '100px', marginLeft: '500px'}}>
       <a href="/handleReviewer">Reviewers</a>

 </div>

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

export default StaffRev

