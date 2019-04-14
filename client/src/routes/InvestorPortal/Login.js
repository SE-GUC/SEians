import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import axios from 'axios';

class Login extends Component {

    state = {
        userName : '',
        email : '',
        password : '',
    }



        handleInputChange1= event => {this.setState({userName:event.target.value});}
        handleInputChange2= event => {this.setState({email:event.target.value});}
        handleInputChange3= event => {this.setState({password:event.target.value});}

        handleSubmit= event =>{
            event.preventDefault();
            console.log("successful")
            this.context.router.transitionTo('/InvestorHome');

           
        axios({
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json'
            },
            url: 'http://localhost:5000/api/investors/login/',
            data: {
            userName :this.state.userName,
            email :this.state.email,
            password :this.state.password }
        }).then(response => { 
            console.log(response)
          })
          .catch(error => {
              console.log(error.response)
          });

          }


    render() {
        return(
            <Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Login as investor" />
      </div>  
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>
    <div className="container" style={{ marginTop: '100px',marginLeft: '100px', width: '1525px'}}>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="userName"
                    className="form-control"
                    name="userName"
                    onChange={ this.handleInputChange1 }
                    value={ this.state.userName }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputChange2 }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange3 }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" style={{color: '#1fc1a9'}}>
                        Login investor
                    </button>
                </div>
            </form>
        </div>
      </Router>

        
        )
    }
}

export default Login;