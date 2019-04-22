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
        
        handleNameChange = event => {this.setState({ name: event.target.value });}
        handleinvestorIdChange = event => {this.setState({ investorId: event.target.value });}
        handlecompanyNameChange = event => {this.setState( {companyName: event.target.value})};
        handlecompanyNameInArabicChange = event => {this.setState({companyNameInArabic: event.target.value})};
        handleGovChange = event => {this.setState( { governorate: event.target.value })};     
        handleDistrictChange = event => {this.setState( { district: event.target.value })};       
        handleCityChange = event => {this.setState({ city: event.target.value });}
        handleTelChange = event => {this.setState( {telephone: event.target.value})};
        handleFaxChange = event => {this.setState({fax: event.target.value})};
        handleCurChange = event => {this.setState( { currency: event.target.value })};                
        handleGenderChange = event => {this.setState({gender: event.target.value})};
        handleNationChange = event => {this.setState({nationality: event.target.value})};
        handleIdTypeChange = event => {this.setState({idType: event.target.value})};
        handleIdNumberChange = event => {this.setState( {idNumber: event.target.value})};
        handleCapitalChange = event => {this.setState({capital: event.target.value})};
        handleAddressChange = event => {this.setState( {address: event.target.value})};
        handlebirthdateChange = event => {this.setState({birthdate: event.target.value})};
        handleEmailChange = event => {this.setState({email: event.target.value})};

           componentDidMount(){
               const foorm = {};
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

        //    axios.get(`http://localhost:5000/api/Forms/get/`+egID)
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
              
///////
              if(this.state.Forms.requestState == 'LawyerPending' || this.state.Forms.requestState =='ReviewerPending'){
                console.log("Pending forms cant be updated")
              }
         /*     else{
                axios({
                    method: 'put',
                    headers: {
                      'Accept': 'application/json, text/plain, /',
                      'Content-Type': 'application/json',
                      'x-access-token': token

                    },
                    url: 'http://localhost:5000/api/Forms/invEdit/'+egID,
                    data: {
                        name: this.state.name,
                        investorId: this.state.investorId,
                        companyName:this.state.companyName,
                        companyNameInArabic:this.state.companyNameInArabic,
                        governorate:this.state.governorate,
                        city:this.state.city,
                        district:this.state.district,
                        telephone:this.state.telephone,
                        fax:this.state.fax,
                        currency:this.state.currency,
                        gender:this.state.gender,
                        nationality:this.state.nationality,
                        idType:this.state.idType,
                        idNumber:this.state.idNumber,
                        capital:this.state.capital,
                        birthdate :this.state.birthdate,
                        address:this.state.address,
                        email:this.state.email}
                }).then(response => { 
                    console.log(response)
                    alert('successful update')
                  })
                  .catch(error => {
                      console.log(error.response)
                  });
              } 
              
              */


          }

    

    render(){
        return(
            <Router>
          
          <div className="container">
              <body>
             <Header name = "update SPC Form"/></body> </div>  
              <div className="container center"> 
          </div>
          <footer className="Footer">
          <Footer/>
          </footer>
          <div className="container" style={{marginTop: '100px',marginLeft: '100px', width: '1525px'}}>>
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input type="text" name="name" onChange={this.handleNameChange} />
            </label>
  
            <label>
              investor id:
              <input type="text" name="investorId" onChange={this.handleinvestorIdChange} />
            </label>
  
  
            <label>
              companyName:
              <input type="text" name="companyName" onChange={this.handlecompanyNameChange} />
            </label>
            <label>
              companyNameInArabic:
              <input type="text" name="companyNameInArabic" onChange={this.handlecompanyNameInArabicChange} />
            </label>
            <label>
              governorate:
              <input type="text" name="governorate" onChange={this.handleGovChange} />
            </label>
            <label>
              city:
              <input type="text" name="city" onChange={this.handleCityChange} />
            </label>
            <label>
              district:
              <input type="text" name="district" onChange={this.handleDistrictChange} />
            </label>
            <label>
              telephone:
              <input type="text" name="telephone" onChange={this.handleTelChange} />
            </label>
            <label>
              fax:
              <input type="text" name="fax" onChange={this.handleFaxChange} />
            </label>
            <label>
              currency:
              <input type="text" name="currency" onChange={this.handleCurChange} />
            </label>
            <label>
              gender:
              <input type="text" name="gender" onChange={this.handleGenderChange} />
            </label>
            <label>
              nationality:
              <input type="text" name="nationality" onChange={this.handleNationChange} />
            </label>
            <label>
              idType:
              <input type="text" name="idType" onChange={this.handleIdTypeChange} />
            </label>
            <label>
              idNumber:
              <input type="text" name="IdNumber" onChange={this.handleIdNumberChange} />
            </label>
            <label>
              capital:
              <input type="text" name="capital" onChange={this.handleCapitalChange} />
            </label>
            <label>
              birthDate:
              <input type="date" name="birthdate" onChange={this.handlebirthdateChange} />
            </label>
            <label>
              address:
              <input type="text" name="address" onChange={this.handleAddressChange} />
            </label>
            <label>
              email:
              <input type="text" name="email" onChange={this.handleEmailChange} />
            </label>
           
  
            <button type="submit" onClick={this.handleSubmit}>submit</button>
          </form>
        </div>
        </Router>
            
          )
    }
}
export default getMyForm;