import React, { Component } from 'react';
import {connect} from 'react-redux'
import Header from '../../../components/Layout/Header'
const axios = require('axios')

/** 
connect((SscApp)=>{
  return{
  form:SscApp.form.form,
  created:SscApp.form.approval
};
})
*/

export class SscApplication extends Component {
  state = {
                name:'',
                companyName:'' ,
                companyNameInArabic:'',
                governorate:'',
                city:'',
                district:'',
                telephone:'',
                fax:'',
                currency:'',
                gender:'',
                nationality:'',
                idType:'' ,
                idNumber:'',
                capital:'',
                birthdate :'',
                address:'',
                email:'',
                manager_name:''
                ,
                manager_id:''
                ,
                manager_nat:''
  }
  
  

handleNameChange = event => {this.setState({ name: event.target.value });}
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
handleBirthDateChange = event => {this.setState({birthdate: event.target.value})};
handleEmailChange = event => {this.setState({email: event.target.value})};
handleManagersChange = event => {this.setState({managers: event.target.value})};
handleM_NameChange = event => {this.setState({manager_name: event.target.value})};
handleM_IDChange = event => {this.setState({manager_id: event.target.value})};
handleM_natsChange = event => {this.setState({manager_nat: event.target.value})};

handleSubmit = event => {
    event.preventDefault();
    var manager_name =this.state.manager_name
    var manager_id=this.state.manager_id
    var manager_nat =this.state.manager_id
    var m = [[manager_name,manager_id,manager_nat]]
    const ssc = {
     
    };
    console.log(ssc)
    axios({
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/Forms/createSsc',
      data: {
        name: this.state.name,
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
        email:this.state.email,
        managers:m

      }
    }).then(response => { 
  //    this.props.dispatch(ApplyForForm())
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <Header name="SSC Application"/>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleNameChange} />
          </label><br></br>
          <label>
            companyName:
            <input type="text" companyName="name" onChange={this.handlecompanyNameChange} />
          </label><br></br>
          <label>
            companyNameInArabic:
            <input type="text" companyNameInArabic="name" onChange={this.handlecompanyNameInArabicChange} />
          </label><br></br>
          <label>
            governorate:
            <input type="text" governorate="governorate" onChange={this.handleGovChange} />
          </label><br></br>
          <label>
            city:
            <input type="text" city="city" onChange={this.handleCityChange} />
          </label><br></br>
          <label>
            district:
            <input type="text" district="district" onChange={this.handleDistrictChange} />
          </label><br></br>
          <label>
            telephone:
            <input type="text" telephone="telephone" onChange={this.handleTelChange} />
          </label><br></br>
          <label>
            fax:
            <input type="text" fax="fax" onChange={this.handleFaxChange} />
          </label><br></br>
          <label>
            currency:
            <input type="text" currency="currency" onChange={this.handleCurChange} />
          </label><br></br>
          <label>
            gender:
            <input type="text" gender="gender" onChange={this.handleGenderChange} />
          </label><br></br>
          <label>
            nationality:
            <input type="text" nationality="nationality" onChange={this.handleNationChange} />
          </label><br></br>
          <label>
            idType:
            <input type="text" idType="idType" onChange={this.handleIdTypeChange} />
          </label><br></br>
          <label>
            idNumber:
            <input type="text" name="name" onChange={this.handleIdNumberChange} />
          </label><br></br>
          <label>
            capital:
            <input type="text" capital="capital" onChange={this.handleCapitalChange} />
          </label><br></br>
          <label>
            birthDate:
            <input type="date" birthdate="birthDate" onChange={this.handleBirthDateChange} />
          </label><br></br>
          <label>
            address:
            <input type="text" address="address" onChange={this.handleAddressChange} />
          </label><br></br>
          <label>
            email:
            <input type="text" email="email" onChange={this.handleEmailChange} />
          </label><br></br>
          <label>
            manager name:
            <input type="text" name="name" onChange={this.handleM_NameChange} />
          </label><br></br>
          <label>
            manager id:
            <input type="text" name="name" onChange={this.handleM_IDChange} />
          </label><br></br>
          <label>
            manager nat:
            <input type="text" name="name" onChange={this.handleM_natsChange} />
          </label><br></br>

          <button type="submit" onClick={this.handleSubmit}>submit </button>
        </form>
      </div>
    )
  }
}
export default SscApplication