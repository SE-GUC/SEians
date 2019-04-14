import React from 'react';

import axios from 'axios';

export default class Admin extends React.Component {


  render() {
    return (
      <div style={{backgroundColor: "#00B1E1"}}>
      <ul>
       <h1>Admin</h1> <h3>userName: </h3>{this.props.Admin.userName}<br></br> <h3>email: </h3>{this.props.Admin.email}<br></br> <h3>firstName: </h3>{this.props.Admin.firstName}<br></br> 
       <h3>lastName: </h3>{this.props.Admin.lastName}<br></br> <h3>SSN: </h3>{this.props.Admin.ssn}<br></br> <h3>age: </h3>{this.props.Admin.age}<br></br> <h3>phoneNumber: </h3>{this.props.Admin.phoneNumber}<br></br>
       <h3>isLoggedIN: </h3>{this.props.Admin.islogged}<br></br>
      </ul>
      </div>
    )
  }
}