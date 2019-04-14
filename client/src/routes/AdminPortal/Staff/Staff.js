import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Menu from '../../../components/Layout/Menu';
import logo from '../../../components/Layout/img/logo.png';



export class Staff extends Component {


    
    render(){
      let links = [
        { label: 'Home', link: '/AdminHome' },
        { label: 'Register new Admin', link: '/AdminHome/CreateAdmin' },
        { label: 'View Admins', link: '/AdminHome/Admins' },
        { label: 'Assign Tasks', link: '#portfolio' },
        { label: 'Review Forms', link: '#contact-us' },
      ];
        return(
            <Router>
                
            <div className="Header">
              <div className="container">
              <Menu links={links} logo={logo} />
           <Header name="Staff" />
                <Route path="/Staff" />
              </div>  
            </div>
            <div>

            <label style={{width:"50px" ,height:"50px",backgroundColor:"red"}}>
           

              </label>

            </div>
            <footer className="Footer">
            <Footer/>
            </footer>
        
          </Router>
        
        )
                }
}export default Staff