import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import axios from 'axios';


export class Register extends Component {
        state = {
            name : '',
            userName : '',
            gender : '',
            nationality : '' ,
            birthDate : '' ,
            age : '' ,
            egID : '',
            address : '',
            mobilePhone : '' ,
            fax : '',
            email : '',
            capital : '',
            currency : '',
            Companies : [],
            SSC : '',
            password : '',
        }

    handleInputChange= event => {this.setState({name:event.target.value});}
    handleInputChange2= event => {this.setState({userName:event.target.value});}
    handleInputChange3= event => {this.setState({gender:event.target.value});}
    handleInputChange4= event => {this.setState({nationality:event.target.value});}
    handleInputChange5= event => {this.setState({birthDate:event.target.value});}
    handleInputChange6= event => {this.setState({age:event.target.value});}
    handleInputChange7= event => {this.setState({egID:event.target.value});}
    handleInputChange8= event => {this.setState({address:event.target.value});}
    handleInputChange9= event => {this.setState({mobilePhone:event.target.value});}
    handleInputChange10= event => {this.setState({fax:event.target.value});}
    handleInputChange11= event => {this.setState({email:event.target.value});}
    handleInputChange12= event => {this.setState({capital:event.target.value});}
    handleInputChange13= event => {this.setState({currency:event.target.value});}
    handleInputChange14= event => {this.setState({Companies:event.target.value});}
    handleInputChange15= event => {this.setState({SSC:event.target.value});}
    handleInputChange16= event => {this.setState({password:event.target.value});}
   // handleInputChange16=(e)=>this.setState({[e.target.password]:e.target.value});


    //handleSubmit(e){
        handleSubmit= event =>{
        event.preventDefault();
       
        axios({
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, /',
              'Content-Type': 'application/json'
            },
            url: 'http://localhost:5000/api/investors/register/',
            data: {
                name :this.state.name,
            userName :this.state.userName,
            gender :this.state.gender ,
            nationality :this.state.nationality,
            birthDate  : this.state.birthDate,
            age :this.state.age,
            egID :this.state.egID ,
            address :this.state.address,
            mobilePhone :this.state.mobilePhone,
            fax :this.state.fax,
            email :this.state.email,
            capital :this.state.capital,
            currency :this.state.currency,
            Companies :this.state.Companies,
            SSC :this.state.SSC,
            password :this.state.password }
        }).then(response => { 
            console.log(response)
            this.props.history.push('/Login');
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
      <Header name="Register as Investor" />
      </div>  
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>
    
    <div className="container" style={{marginTop: '100px', marginLeft: '100px',width: '525px'}}>
            <form onSubmit= {this.handleSubmit}>
           
            <div className="form-group"  >
            <input
            type="text"
            placeholder="name"
            className="form-control"
            name="name"
            onChange={ this.handleInputChange}
            //value= {this.state.name}
            />
            </div>
            
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
            <input
            type="text"
            placeholder="gender"
            className="form-control"
            name="gender"
            onChange={ this.handleInputChange3}
            //value= {this.state.gender}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="nationality"
            className="form-control"
            name="nationality"
            onChange={ this.handleInputChange4}
            //value= {this.state.nationality}
            />
            </div>

            <div className="form-group">
            <input
            type="date"
            placeholder="birthDate"
            className="form-control"
            name="birthDate"
            onChange={ this.handleInputChange5}
            //value= {this.state.birthDate}
            />
            </div>

            <div className="form-group">
            <input
            type="number"
            placeholder="age"
            className="form-control"
            name="age"
            onChange={ this.handleInputChange6}
            //value= {this.state.age}
            />
            </div>

            <div className="form-group">
            <input
            type="number"
            placeholder="egID"
            className="form-control"
            name="egID"
            onChange={ this.handleInputChange7}
            //value= {this.state.egID}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="address"
            className="form-control"
            name="address"
            onChange={ this.handleInputChange8}
            //value= {this.state.address}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="mobilePhone"
            className="form-control"
            name="mobilePhone"
            onChange={ this.handleInputChange9}
            //value= {this.state.mobilePhone}
            />
            </div>

            <div className="form-group">
            <input
            type="number"
            placeholder="fax"
            className="form-control"
            name="fax"
            onChange={ this.handleInputChange10}
            //value= {this.state.fax}
            />
            </div>

            <div className="form-group">
            <input
            type="email"
            placeholder="email"
            className="form-control"
            name="email"
            onChange={ this.handleInputChange11}
            //value= {this.state.email}
            />
            </div>

            <div className="form-group">
            <input
            type="number"
            placeholder="capital"
            className="form-control"
            name="capital"
            onChange={ this.handleInputChange12}
            //value= {this.state.capital}
            />
            </div>

            <div className="form-group">
            <input
            type="text"
            placeholder="currency"
            className="form-control"
            name="currency"
            onChange={ this.handleInputChange13}
            //value= {this.state.currency}
            />
            </div>

            <div className="form-group">
            <input
            type="array"
            placeholder="Companies"
            className="form-control"
            name="Companies"
            onChange={ this.handleInputChange14}
            //value= {this.state.Companies}
            />
            </div>


            <div className="form-group">
            <input
            type="boolean"
            placeholder="SSC"
            className="form-control"
            name="SSC"
            onChange={ this.handleInputChange15}
            //value= {this.state.SSC}
            />
            </div>

            <div className="form-group">
            <input
            type="password"
            placeholder="password"
            className="form-control"
            name="password"
            onChange={ this.handleInputChange16}
            //value= {this.state.password}
            />
            </div>

            <div className="form-group">

            <button type="submit" className="btn btn-primary" style={{color: '#1fc1a9'}}>
            register investor
            </button>           
            </div>
            </form>
            </div>  
      </Router>

        )
    }
}
export default Register;