import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header'
import Footer from '../../../../components/Layout/Footer';
import Menu from '../../../../components/Layout/Menu';
import logo from '../../../../components/Layout/img/logo.png';
import EditAdmin from '../../../../components/Admin Components/EditAdmin';



export class UpdateAdmin extends Component {
  render() {
    let links = [
        { label: 'Home', link: '/AdminHome' },
        { label: 'Staff', link: '/Staff' },
        { label: 'Register new Admin', link: '/AdminHome/CreateAdmin' },
        { label: 'View Admins', link: '/AdminHome/Admins' },
  
        { label: 'logout', link: '/AdmLoggedout' }

      ];
    return (
      <div>
           <Router>
                  <div style={{backgroundColor: "#80d8ff"}}>
              <div className="Header">
                <div className="container">
                <Menu links={links} logo={logo} />
             <Header name="Editing Admin" />
                
                </div>  
              </div>
              
              
    
           <EditAdmin />
    
          
           
      <footer className="Footer">
      <Footer/>
      </footer>
    
              </div>
              
          
            </Router>
        
      </div>
    )
  }
}

export default UpdateAdmin
