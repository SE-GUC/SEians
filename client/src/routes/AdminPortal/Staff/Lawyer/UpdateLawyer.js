import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header';
import Footer from '../../../../components/Layout/Footer';
import axios from 'axios';


export class UpdateLawyer extends Component {
        state = {
            username : '',
        }

    handleInputChange1= event => {this.setState({username:event.target.value});}
    handleInputChange2= event => {this.setState({email:event.target.value});}
    handleInputChange3= event => {this.setState({address:event.target.value});}
    handleInputChange4= event => {this.setState({phone:event.target.value});}
    handleInputChange5= event => {this.setState({salary:event.target.value});}
    handleInputChange6= event => {this.setState({yearsOfExperience:event.target.value});}
    handleInputChange7= event => {this.setState({password:event.target.value});}

    //handleSubmit(e){
        handleSubmit= event =>{
        event.preventDefault();
        console.log("successful")
       
        axios({
            method: 'put',
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json'
            },
            url: 'http://localhost:5000/api/lawyers/'+this.state.username,
            data: {
            email :this.state.email,
            address :this.state.address,
            phone :this.state.phone ,
            salary :this.state.salary,
            yearsOfExperience  : this.state.yearsOfExperience,
           }
        }).then(response => { 
            console.log(response)
            window.location = "/UpdateSuccess1"
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
      <Header name="Update Lawyer" />
      </div>  
    </div>
   
    <div className="container" style={{marginTop: '100px',marginLeft: '100px', width: '1525px'}}>
            <form onSubmit= {this.handleSubmit}>
            <div className="form-group">
            <input
            type="text"
            placeholder="username"
            className="form-control"
            name="username"
            onChange={ this.handleInputChange1}
            />
            </div>
            <div className="form-group">
            <input
            type="text"
            placeholder="email"
            className="form-control"
            name="email"
            onChange={ this.handleInputChange2}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="address"
            className="form-control"
            name="address"
            onChange={ this.handleInputChange3}
            />
            </div>

            <div className="form-group">
            <input
            type="number"
            placeholder="phone"
            className="form-control"
            name="phone"
            onChange={ this.handleInputChange4}
            />
            </div>


            <div className="form-group">
            <input
            type="number"
            placeholder="salary"
            className="form-control"
            name="salary"
            onChange={ this.handleInputChange5}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="yearsOfExperience"
            className="form-control"
            name="yearsOfExperience"
            onChange={ this.handleInputChange6}
            />
            </div>
            <div className="form-group">
            <input
            type="text"
            placeholder="password"
            className="form-control"
            name="password"
            onChange={ this.handleInputChange7}
            />
            </div>

            <div className="form-group">
            <button type="submit" className= "btn btn-primary" style={{color: '#1fc1a9'}}>
            Update Lawyer
            </button>
            </div>
            </form>
            </div>
            <footer className="Footer">
    <Footer/>
    </footer>
            <a style={{ fontSize:"30px"}} href="/handleLawyer" class="btn btn-default">Back</a>
      </Router>

       
        )
    }
}
export default UpdateLawyer;