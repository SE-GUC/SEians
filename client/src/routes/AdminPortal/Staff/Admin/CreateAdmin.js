import React, { Component } from 'react'
import CreateADM from '../../../../components/Admin Components/CreatingAdmin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header'
import Footer from '../../../../components/Layout/Footer';
import Menu from '../../../../components/Layout/Menu';
import logo from '../../../../components/Layout/img/logo.png';



export default class CreateAdmin extends Component {
 
    render(){
        let links = [
          { label: 'Home', link: '/AdminHome' },
          { label: 'Staff', link: '/Staff' },
          { label: 'Register new Admin', link: '/AdminHome/CreateAdmin' },
          { label: 'View Admins', link: '/AdminHome/Admins' },
          { label: 'Assign Tasks', link: '#portfolio' },
          { label: 'Review Forms', link: '#contact-us' },
        ];
          return(
              <Router>
                  <div style={{backgroundColor: "#80d8ff"}}>
              <div className="Header">
                <div className="container">
                <Menu links={links} logo={logo} />
             <Header name="New Admin" />
                
                </div>  
              </div>
              
              
    
           <CreateADM />
    
          
           
      <footer className="Footer">
      <Footer/>
      </footer>
    
              </div>
              
          
            </Router>
          
          )
                  }
                }

