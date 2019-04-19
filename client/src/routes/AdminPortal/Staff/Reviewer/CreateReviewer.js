import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header';
import Menu from '../../../../components/Layout/Menu';
import Footer from '../../../../components/Layout/Footer';
import logo from '../../../../components/Layout/img/logo.png';
const axios = require('axios')

export class CreateReviewer extends Component {
  state = {
                firstname:'' ,
                middlename:'',
                lastname:'',
                email:'',
                username:'',
                birthDate:'',
                gender:'',
                address:'',
                phone:'',
                ssn:'',
                salary:'' ,
                yearsOfExperience:'',

  }



handlefirstnameChange = event => {this.setState({firstname: event.target.value })};
handlemiddlenameChange = event => {this.setState( {middlename: event.target.value})};
handlelastnameChange = event => {this.setState({lastname: event.target.value})};
handleEmailChange = event => {this.setState( { email: event.target.value })};
handleusernameChange = event => {this.setState( { username: event.target.value })};
handlebirthDateChange = event => {this.setState({ birthDate: event.target.value })};
handlegenderChange = event => {this.setState( {gender: event.target.value})};
handleaddressChange = event => {this.setState({address: event.target.value})};
handlephoneChange = event => {this.setState( { phone: event.target.value })};
handlessnChange = event => {this.setState({ssn: event.target.value})};
handlesalaryChange = event => {this.setState({salary: event.target.value})};
handleYOEChange = event => {this.setState({yearsOfExperience: event.target.value})};

handleSubmit = event => {
    event.preventDefault();

    axios({
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/reviewers/',
      data: {
        firstname: this.state.firstname,
        middlename:this.state.middlename,
        lastname:this.state.lastname,
        email:this.state.email,
        birthDate:this.state.birthDate,
        username:this.state.username,
        gender:this.state.gender,
        address:this.state.address,
        phone:this.state.phone,
        ssn:this.state.ssn,
        salary:this.state.salary,
        yearsOfExperience:this.state.yearsOfExperience,

      }
    }).then(response => {
      console.log(response)
      window.location = "/CreationSuccess"
    })
    .catch(error => {
        console.log(error.response)
    });
    }

  render() {
    let links = [
      { label: 'Home', link: '/AdminHome' },
      { label: 'Staff', link: '/Staff' },
      { label: 'Assign Tasks', link: '#portfolio' },
      { label: 'Review Forms', link: '#contact-us' },
    ];
    return (
      <Router>
         <body>
            <a href="/handleReviewer">Back</a>
   </body>
    <div className="container">
      <div className="container2">
      <Menu links={links} logo={logo} />
        <body>
       <Header name = "Add new Reviewer"/></body> </div>  </div>
        <div className="container center">
       < div>< div>
          
      </div>
      </div>  
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>

      <div style={{fontSize:"25px" , backgroundColor:"#047A80"}}>
      <center>
        <form onSubmit={this.handleSubmit}>
          <label>
             firstname:
            <input type="text" firstname="firstname" onChange={this.handlefirstnameChange} />
          </label>
          <br></br>
          <label>
            middlename:
            <input type="text" middlename="firstname" onChange={this.handlemiddlenameChange} />
          </label>
          <br></br>
          <label>
            lastname:
            <input type="text" lastname="lastname" onChange={this.handlelastnameChange} />
          </label>
          <br></br>
          <label>
            email:
            <input type="text" email="email" onChange={this.handleEmailChange} />
          </label>
          <br></br>
          <label>
            birthDate:
            <input type="date" birthDate="birthDate" onChange={this.handlebirthDateChange} />
          </label>
          <br></br>
          <label>
            username:
            <input type="text" username="username" onChange={this.handleusernameChange} />
          </label>
          <br></br>
          <label>
            gender:
            <input type="text" gender="gender" onChange={this.handlegenderChange} />
          </label>
          <br></br>
          <label>
            address:
            <input type="text" address="address" onChange={this.handleaddressChange} />
          </label>
          <br></br>
          <label>
            phone:
            <input type="text" phone="phone" onChange={this.handlephoneChange} />
          </label>
          <br></br>
          <label>
            ssn:
            <input type="text" ssn="ssn" onChange={this.handlessnChange} />
          </label>
          <br></br>
          <label>
            salary:
            <input type="text" salary="salary" onChange={this.handlesalaryChange} />
          </label>
          <br></br>
          <label>
            yearsOfExperience:
            <input type="text" yearsOfExperience="yearsOfExperience" onChange={this.handleYOEChange} />
          </label>
          <br></br>
          <button style={{height:"30px",fontSize:"25px"}} type="submit" onClick={this.handleSubmit}>submit </button>
        </form>
        </center>
      </div>
      
  </Router>
    )
  }
}
export default CreateReviewer
