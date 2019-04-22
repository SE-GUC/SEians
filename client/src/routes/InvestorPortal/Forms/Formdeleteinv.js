import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import axios from 'axios';


export class Formdeleteinv extends Component {
        
           componentDidMount(){
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user'));
            if(!user){
              return  this.props.history.push('/Login');
            }
            const egID = user.egID
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
                    url: 'http://localhost:5000/api/Forms/delete/'+egID,
                }).then(response => { 
                    console.log(response)
                    alert(response.data.msg)
                    if(response.data.msg == "Pending forms cant be deleted"){
                      window.location = "/InvestorHome"
                    }

                  })
                  .catch(error => {
                      console.log(error.response)
                  });
              } 
            

    

    render(){
        return(
            <Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Deleting" />
      </div>  
    </div>
          <footer className="Footer">
    <Footer/>
    </footer>
      </Router>
        );
    }
}
export default Formdeleteinv;