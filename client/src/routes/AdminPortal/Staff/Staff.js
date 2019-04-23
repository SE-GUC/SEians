import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';

import './Staff.css'

import Menu from '../../../components/Layout/Menu';
import logo from '../../../components/Layout/img/logo.png';


export class Staff extends Component {

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
        { label: 'Admins', link: '/Staff/Admins' },
        { label: 'Lawyers', link: '/Staff/Lawyers' },
        { label: 'Reviewers', link: 'handleReviewer' },
        { label: 'Forms', link: '/Staff/Forms' },
        { label: 'Companies', link: '/Companies' },


        { label: 'logout', link: '/AdmLoggedout' },


      ];
      const labelstyle1={
        position:'absolute',
        //textalign:'center',
        up:200,
        right:890,
        backgroundColor:'red',
        borderStyle:'outset',
        width:990,
        height:300


      }
      const labelstyle2={
        position:'absolute',
        //textalign:'center',
        up:200,
        left:890,
        backgroundColor:'red',
        borderStyle:'outset',
        width:990,
        height:300


      }
      const labelstyle3={
        position:'absolute',
        //textalign:'center',
        down:200,
        right:890,
        backgroundColor:'red',
     //   borderStyle:'outset',
        width:990,
        height:300


      }
      const labelstyle4={
        position:'absolute',
        //textalign:'center',
        down:200,
        left:890,
        backgroundColor:'red',
      //  borderStyle:'outset',
        width:990,
        height:300


      }
        return(
            <Router>

            <div className="Header">
              <div className="container">
              <Menu links={links} logo={logo} />
           <Header name="Staff" />
                <Route path="/Staff" />
              </div>

            </div>
            <body>


   </body>


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
