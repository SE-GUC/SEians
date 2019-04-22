import React from 'react';

export default class Myinvestor extends React.Component {


  render() {
    return (
      <div style={{backgroundColor: "#047A80"}}>
      <ul>
       <h1>Investors</h1>
       <h3>name: </h3>{this.props.Myinvestor.name}<br></br> 
       <h3>userName: </h3>{this.props.Myinvestor.userName}<br></br> 
       <h3>gender: </h3>{this.props.Myinvestor.gender}<br></br> 
       <h3>nationality: </h3>{this.props.Myinvestor.nationality}<br></br> 
       <h3>birthDate: </h3>{this.props.Myinvestor.birthDate}<br></br> 
       <h3>age: </h3>{this.props.Myinvestor.age}<br></br> 
       <h3>egID: </h3>{this.props.Myinvestor.egID}<br></br> 
       <h3>address: </h3>{this.props.Myinvestor.address}<br></br> 
       <h3>egID: </h3>{this.props.Myinvestor.egID}<br></br> 
       <h3>mobilePhone: </h3>{this.props.Myinvestor.mobilePhone}<br></br> 
       <h3>fax: </h3>{this.props.Myinvestor.fax}<br></br> 
       <h3>email: </h3>{this.props.Myinvestor.email}<br></br> 
       <h3>capital: </h3>{this.props.Myinvestor.capital}<br></br> 
       <h3>currency: </h3>{this.props.Myinvestor.currency}<br></br>
       <h3>Companies: </h3>{this.props.Myinvestor.Companies}<br></br>
       <h3>SSC: </h3>{this.props.Myinvestor.SSC}<br></br>
       <h3>password: </h3>{this.props.Myinvestor.password}<br></br>
      </ul>
      </div>
    )
  }
}