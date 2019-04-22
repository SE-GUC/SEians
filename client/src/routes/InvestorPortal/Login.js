import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import axios from 'axios';


class Login extends Component {

    state = {
        email : '',
        password : '',
    }

        handleInputChange2= event => {this.setState({email:event.target.value});}
        handleInputChange3= event => {this.setState({password:event.target.value});}

        handleSubmit= event =>{
            event.preventDefault();
           
        axios({
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json'
            },
            url: 'http://localhost:5000/api/investors/login/',
            data: {
            email :this.state.email,
            password :this.state.password }
        }).then(response => {
            console.log(response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user)); 
            this.props.history.push('/InvestorHome');
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
    <div className="container" style={{ marginTop: '100px', width: '1500px'}}>
            <form onSubmit={ this.handleSubmit }>
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
