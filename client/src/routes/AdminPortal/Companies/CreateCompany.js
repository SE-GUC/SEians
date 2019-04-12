import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Menu from '../../../components/Layout/Menu';
import logo from '../../../components/Layout/img/logo.png';


const axios = require('axios')


export class CreateCompany extends Component {
  state = {
                name:'',
                companyStatus:'',
                type:'',
                owner:''
  }



handleNameChange = event => {this.setState({ name: event.target.value });}
handleCompanyStatusChange = event => {this.setState( {companyStatus: event.target.value})};
handleTypeChange = event => {this.setState({type: event.target.value})};
handleOwnerChange = event => {this.setState( { owner: event.target.value })};

handleSubmit = event => {
    event.preventDefault();

    axios({
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/Companies/',
      data: {
        name: this.state.name,
        companyStatus:this.state.companyStatus,
        type:this.state.type,
        owner:this.state.owner,


      }
    }).then(response => {
      console.log(response)
      window.location = "/CreatedSuccessfully"
    })
    .catch(error => {
        console.log(error.response)
    });
    }

    render(){

      let links = [
        { label: 'Home', link: '/AdminHome' },
        { label: 'Staff', link: '/Staff' },
        { label: 'Companies', link: '/Companies' },
        { label: 'Assign Tasks', link: '#portfolio' },
        { label: 'Review Forms', link: '#contact-us' },
      ];
        return(
            <Router>
              <div>
                <Menu links={links} logo={logo}/>
                </div>

              <Header name="Creating a company" />
              <Route path="/Companies" />

            <footer className="Footer">
            <Footer/>
            </footer>




      <div style={{ fontSize:"30px" ,backgroundColor: "#047A80"}}>
      <center>
        <form onSubmit={this.handleSubmit}>
          <label>
            Company Name:
            <input type="text" name="name" onChange={this.handleNameChange} />
          </label><br></br>
          <label>
            Company Status:
            <input type="text" companyStatus="name" onChange={this.handleCompanyStatusChange} />
          </label><br></br>
          <label>
            Type:
            <input type="text" type="name" onChange={this.handleTypeChange} />
          </label><br></br>
          <label>
            Owner:
            <input type="text" owner="name" onChange={this.handleOwnerChange} />
          </label><br></br>

          <button style={{height:"50px",fontSize:"30px"}} type="submit" onClick={this.handleSubmit}>submit </button>

        </form>
        </center>
      </div>
    </Router>
  )
  }
}
export default CreateCompany
