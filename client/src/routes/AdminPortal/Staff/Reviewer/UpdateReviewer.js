import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header';
import Footer from '../../../../components/Layout/Footer';
import axios from 'axios';


export class UpdateReviewer extends Component {
        state = {
            username : '',
        }

        handleInputChange11= event => {this.setState({username:event.target.value});}
    handleInputChange12= event => {this.setState({email:event.target.value});}
    handleInputChange13= event => {this.setState({address:event.target.value});}
    handleInputChange14= event => {this.setState({phone:event.target.value});}
    handleInputChange15= event => {this.setState({salary:event.target.value});}
    handleInputChange16= event => {this.setState({yearsOfExperience:event.target.value});}


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
            url: 'http://localhost:5000/api/reviewers/'+this.state.username,
            data: {
                email :this.state.email,
            address :this.state.address,
            phone :this.state.phone ,
            salary :this.state.salary,
            yearsOfExperience  : this.state.yearsOfExperience,
           }
        }).then(response => { 
            console.log(response)
            window.location = "/UpdateSuccess"
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
      <Header name="Update Reviewer" />
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
            onChange={ this.handleInputChange11}
            />
            </div>
            <div className="form-group">
            <input
            type="text"
            placeholder="email"
            className="form-control"
            name="email"
            onChange={ this.handleInputChange12}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="address"
            className="form-control"
            name="address"
            onChange={ this.handleInputChange13}
            />
            </div>

            <div className="form-group">
            <input
            type="number"
            placeholder="phone"
            className="form-control"
            name="phone"
            onChange={ this.handleInputChange14}
            />
            </div>


            <div className="form-group">
            <input
            type="number"
            placeholder="salary"
            className="form-control"
            name="salary"
            onChange={ this.handleInputChange15}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="yearsOfExperience"
            className="form-control"
            name="yearsOfExperience"
            onChange={ this.handleInputChange16}
            />
            </div>

            <div className="form-group">
            <button type="submit" className= "btn btn-primary" style={{color: '#1fc1a9'}}>
            Update Reviewer
            </button>
            </div>
            </form>
            </div>
            <footer className="Footer">
    <Footer/>
    </footer>
            <a style={{ fontSize:"30px"}} href="/handleReviewer" class="btn btn-default">Back</a>
      </Router>

       
        )
    }
}
export default UpdateReviewer;