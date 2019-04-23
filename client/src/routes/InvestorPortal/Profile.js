import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import axios from 'axios';


export class Profile extends Component {
        
        constructor(props){
            super(props);
            this.state = {
                investors: [],
            }

        }

           componentDidMount(){
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user'));
            if(!user){
              return  this.props.history.push('/Login');
            }
            const name = user.userName
            if(!token){
               console.log('no token');
               return;
            }
            axios({
                method: 'get',
                headers: {
                  'Accept': 'application/json, text/plain, /',
                  'Content-Type': 'application/json',
                  'x-access-token': token
    
                },
                url: 'http://localhost:5000/api/investors/'+name
            }).then(response => {
                const investors = response.data.data;
                this.setState({ investors:investors }); 
                console.log(response)
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
      <Header name="Profile" />
      </div>  
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>
      <ul>
       <h1>Investors</h1>
       <h3>name: </h3>{this.state.investors.name}<br></br> 
       <h3>userName: </h3>{this.state.investors.userName}<br></br> 
       <h3>gender: </h3>{this.state.investors.gender}<br></br> 
       <h3>nationality: </h3>{this.state.investors.nationality}<br></br> 
       <h3>birthDate: </h3>{this.state.investors.birthDate}<br></br> 
       <h3>age: </h3>{this.state.investors.age}<br></br> 
       <h3>egID: </h3>{this.state.investors.egID}<br></br> 
       <h3>address: </h3>{this.state.investors.address}<br></br> 
       <h3>egID: </h3>{this.state.investors.egID}<br></br> 
       <h3>mobilePhone: </h3>{this.state.investors.mobilePhone}<br></br> 
       <h3>fax: </h3>{this.state.investors.fax}<br></br> 
       <h3>email: </h3>{this.state.investors.email}<br></br> 
       <h3>capital: </h3>{this.state.investors.capital}<br></br> 
       <h3>currency: </h3>{this.state.investors.currency}<br></br>
       <h3>Companies: </h3>{this.state.investors.Companies}<br></br>
       <h3>SSC: </h3>{this.state.investors.SSC}<br></br>
       <h3>password: </h3>{this.state.investors.password}<br></br>
      </ul>
      </Router>

       
        )
    }
}
export default Profile;