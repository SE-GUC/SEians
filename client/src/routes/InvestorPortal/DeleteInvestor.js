import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import axios from 'axios';


export class DeleteInvestor extends Component {

    componentDidMount(){
      const user = JSON.parse(localStorage.getItem('user'));
      if(!user){
        return  this.props.history.push('/Login');
      }
      const name = user.userName
        const token = localStorage.getItem('token');
        if(!token){
           console.log('no token');
           return;
        }
        axios({
            method: 'delete',
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json',
              'x-access-token': token
            },
            url: 'http://localhost:5000/api/investors/'+name,
        }).then(response => { 
            console.log(response)
            alert('successful deletion')
          })
          .catch(error => {
              console.log(error.response)
              alert('investor not found')
          });
          localStorage.removeItem('token')
            localStorage.removeItem('user'); 
            this.props.history.push('/');
          }



    render(){
        return(
            <Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Delete Investor" />
      </div>  
    </div>
          <footer className="Footer">
    <Footer/>
    </footer>
      </Router>
      
        )
    }
}
export default DeleteInvestor;
