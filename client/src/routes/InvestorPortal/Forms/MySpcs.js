import React from 'react';
import axios from 'axios';

export default class MySpcs extends React.Component {

  companies = [];

componentDidMount() {
  console.log('state', this.state)
axios.get('http://localhost:5000/api/forms/')
  .then(response => { 
    this.companies = response;
  })
  .catch(error => {
      console.log(error.response)
  });
}

create() {
  let x = [];
  for(let company of this.companies){
    x.push(<li>
      <h1>Spcs</h1>
      <h3>companyName: </h3>{company.companyName}<br></br> 
      <h3>companyNameInArabic: </h3>{company.companyNameInArabic}<br></br> 
      <h3>governorate: </h3>{company.governorate}<br></br> 
      <h3>city: </h3>{company.city}<br></br> 
      <h3>district: </h3>{company.district}<br></br> 
      <h3>telephone: </h3>{company.telephone}<br></br> 
      <h3>fax: </h3>{company.fax}<br></br> 
      <h3>currency: </h3>{company.currency}<br></br> 
      <h3>name: </h3>{company.name}<br></br> 
      <h3>investorId: </h3>{company.investorId}<br></br> 
      <h3>gender: </h3>{company.gender}<br></br> 
      <h3>nationality: </h3>{company.nationality}<br></br> 
      <h3>idType: </h3>{company.idType}<br></br> 
      <h3>idNumber: </h3>{company.idNumber}<br></br>
      <h3>capital: </h3>{company.capital}<br></br>
      <h3>birthdate: </h3>{company.birthdate}<br></br>
      <h3>address: </h3>{company.address}<br></br>
      <h3>email: </h3>{company.email}<br></br>
      </li>
      )
  }
}

  render() {
    return (<span>{this.create()}</span>);
  }
}