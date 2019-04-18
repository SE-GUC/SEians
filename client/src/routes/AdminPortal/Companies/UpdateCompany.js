import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import axios from 'axios';


export class UpdateCompany extends Component {
        state = {
            name : ''
        }

        handleInputChange1= event => {this.setState({name:event.target.value});}
    handleInputChange2= event => {this.setState({companyStatus:event.target.value});}
    handleInputChange3= event => {this.setState({type:event.target.value});}
    handleInputChange4= event => {this.setState({owner:event.target.value});}


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
            url: 'http://localhost:5000/api/Companies/'+this.state.name,
            data: {
      
            companyStatus :this.state.companyStatus,
            type :this.state.type ,
            owner :this.state.owner

           }
        }).then(response => {
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
      <Header name="Update Company" />
      </div>
    </div>

    <div className="container" style={{marginTop: '100px',marginLeft: '100px', width: '1525px'}}>
            <form onSubmit= {this.handleSubmit}>
            <div className="form-group">
            <input
            type="text"
            placeholder="name"
            className="form-control"
            name="name"
            onChange={ this.handleInputChange1}
            />
            </div>
            <div className="form-group">
            <input
            type="text"
            placeholder="companyStatus"
            className="form-control"
            name="companyStatus"
            onChange={ this.handleInputChange2}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="type"
            className="form-control"
            name="type"
            onChange={ this.handleInputChange3}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="owner"
            className="form-control"
            name="owner"
            onChange={ this.handleInputChange4}
            />
            </div>

            <div className="form-group">
            <button type="submit" className= "btn btn-primary" style={{color: '#1fc1a9'}}>
            Update Company
            </button>
            </div>
            </form>
            </div>
            <footer className="Footer">
    <Footer/>
    </footer>
            <a style={{ fontSize:"30px"}} href="/CompanyViewer" class="btn btn-default">Back</a>
      </Router>


        )
    }
}
export default UpdateCompany;
