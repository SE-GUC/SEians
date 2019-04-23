import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import axios from 'axios';


export class getMyForm extends Component {
        
        constructor(props){
            super(props);
            this.state = {
                Forms: [],
            }

        }

           componentDidMount(){
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user'));
            if(!user){
              return  this.props.history.push('/Login');
            }
            const egID = user.egID
            if(!token){
               console.log('no token');
               return;
            }
            axios({
              method: 'get',
              headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json',
                'x-access-token': token
  
              },
              url: 'http://localhost:5000/api/Forms/get/'+egID
          }).then(response => {
             // const Forms = response.data.data;
              this.setState({ Forms:response.data.data }); 
              console.log("res "+response)
              console.log("aaaa"+response.data.data.requestState)
            })
            .catch(error => {
                console.log(error.response)
            });
            console.log("form") 

          }

    render(){
        return(
            <Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Profile" />
      </div>  
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>
      <ul>
       <h1>My Form</h1>
       <h3>companyName: </h3>{this.state.Forms.companyName}<br></br> 
       <h3>companyNameInArabic: </h3>{this.state.Forms.companyNameInArabic}<br></br> 
       <h3>governorate: </h3>{this.state.Forms.governorate}<br></br> 
       <h3>city: </h3>{this.state.Forms.city}<br></br> 
       <h3>district: </h3>{this.state.Forms.district}<br></br> 
       <h3>telephone: </h3>{this.state.Forms.telephone}<br></br> 
       <h3>fax: </h3>{this.state.Forms.fax}<br></br> 
       <h3>currency: </h3>{this.state.Forms.currency}<br></br> 
       <h3>name: </h3>{this.state.Forms.name}<br></br> 
       <h3>investorId: </h3>{this.state.Forms.investorId}<br></br> 
       <h3>gender: </h3>{this.state.Forms.gender}<br></br> 
       <h3>nationality: </h3>{this.state.Forms.nationality}<br></br> 
       <h3>idType: </h3>{this.state.Forms.idType}<br></br> 
       <h3>idNumber: </h3>{this.state.Forms.idNumber}<br></br>
       <h3>capital: </h3>{this.state.Forms.capital}<br></br>
       <h3>birthdate: </h3>{this.state.Forms.birthdate}<br></br>
       <h3>address: </h3>{this.state.Forms.address}<br></br>
       <h3>email: </h3>{this.state.Forms.email}<br></br>
      </ul>
      </Router>

       
        )
    }
}
export default getMyForm;