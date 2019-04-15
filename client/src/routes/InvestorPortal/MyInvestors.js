import React from 'react';

export default class MyInvestors extends React.Component {


  render() {
    return (
      <div style={{backgroundColor: "#047A80"}}>
      <ul>
       <h1>Investors</h1>
       <h3>name: </h3>{this.props.MyInvestors.name}<br></br> 
       <h3>userName: </h3>{this.props.MyInvestors.userName}<br></br> 
       <h3>gender: </h3>{this.props.MyInvestors.gender}<br></br> 
       <h3>nationality: </h3>{this.props.MyInvestors.nationality}<br></br> 
       <h3>birthDate: </h3>{this.props.MyInvestors.birthDate}<br></br> 
       <h3>age: </h3>{this.props.MyInvestors.age}<br></br> 
       <h3>egID: </h3>{this.props.MyInvestors.egID}<br></br> 
       <h3>address: </h3>{this.props.MyInvestors.address}<br></br> 
       <h3>egID: </h3>{this.props.MyInvestors.egID}<br></br> 
       <h3>mobilePhone: </h3>{this.props.MyInvestors.mobilePhone}<br></br> 
       <h3>fax: </h3>{this.props.MyInvestors.fax}<br></br> 
       <h3>email: </h3>{this.props.MyInvestors.email}<br></br> 
       <h3>capital: </h3>{this.props.MyInvestors.capital}<br></br> 
       <h3>currency: </h3>{this.props.MyInvestors.currency}<br></br>
       <h3>Companies: </h3>{this.props.MyInvestors.Companies}<br></br>
       <h3>SSC: </h3>{this.props.MyInvestors.SSC}<br></br>
       <h3>password: </h3>{this.props.MyInvestors.password}<br></br>
      </ul>
      </div>
    )
  }
}