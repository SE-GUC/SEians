import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from '../../../components/Layout/Footer'
import Header from '../../../components/Layout/Header'
import axios from 'axios';


export class SpcDelete extends Component {
        state = {
            companyName : '',
        }

    handleInputChange2= event => {this.setState({companyName:event.target.value});}


    //handleSubmit(e){
        handleSubmit= event =>{
        event.preventDefault();
       
        axios({
            method: 'delete',
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json'
            },
            url: 'http://localhost:5000/api/Forms/'+this.state.companyName,
        }).then(response => { 
            console.log(response)
            alert('successful deletion')
          })
          .catch(error => {
              console.log(error.response)
              alert('Form not found')
          });
          }



    render(){
        return(
            <Router>
        
        <div className="container">
            <body>
           <Header name = "Delete SPC Form"/></body> 
            <div className="container center">

              
          </div>
        </div>
        <div className="container" style={{marginTop: '100px',marginLeft: '100px', width: '1525px'}}>
            <form onSubmit= {this.handleSubmit}>
           
            <div className="form-group">
            <input
            type="text"
            placeholder="Company Name"
            className="form-control"
            name="Company Name"
            onChange={ this.handleInputChange2}
           
            />
            </div>

            <div className="form-group">
            <button type="submit" className= "btn btn-primary">
            delete form
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
export default SpcDelete;