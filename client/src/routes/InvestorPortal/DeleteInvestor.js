import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import axios from 'axios';


export class DeleteInvestor extends Component {
        state = {
            userName : '',
        }

    handleInputChange2= event => {this.setState({userName:event.target.value});}


    //handleSubmit(e){
        handleSubmit= event =>{
        event.preventDefault();
       
        axios({
            method: 'delete',
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json'
            },
            url: 'http://localhost:5000/api/investors/'+this.state.userName,
        }).then(response => { 
            console.log(response)
            alert('successful deletion')
          })
          .catch(error => {
              console.log(error.response)
              alert('investor not found')
          });
          }



    render(){
        return(
            <Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Delete Investor" />
      </div>  
    </div>

          <div className="container" style={{marginTop: '200px',marginLeft: '100px', width: '1525px'}}>
            <form onSubmit= {this.handleSubmit}>
           
            <div className="form-group">
            <input
            type="text"
            placeholder="userName"
            className="form-control"
            name="userName"
            onChange={ this.handleInputChange2}
            //value= {this.state.userName}
            />
            </div>

            <div className="form-group">
            <button type="submit" className= "btn btn-primary" style={{color: '#1fc1a9'}}>
            delete investor
            </button>
            </div>
            </form>
            </div>
          <footer className="Footer">
    <Footer/>
    </footer>
      </Router>
      
        )
    }
}
export default DeleteInvestor;
//            <h2 style={{marginTop: '40px',color: '#1fc1a9'}}>delete investor</h2>
