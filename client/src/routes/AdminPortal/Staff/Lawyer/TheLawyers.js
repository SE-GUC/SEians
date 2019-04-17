import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios')
export default class Lawyer extends React.Component {
 

  handledeleteSubmit = event => {
    console.log('clicked')
    event.preventDefault();
    axios({
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/lawyers/'+this.props.Lawyer.username,
      
    }).then(response => {
      console.log(response)
      window.location = "/DeletionSuccess1"
    })
    .catch(error => {
        console.log(error.response)
    });
    }

    handleupdateSubmit = event => {

      event.preventDefault();
      axios({
        url: 'http://localhost:5000/api/lawyers/'+this.props.Lawyer.username,
        method: 'put',
        data:
        {
          email:this.props.Lawyer.email,
          address:this.props.Lawyer.address,
          phone:this.props.Lawyer.phone,
          salary:this.props.Lawyer.salary,
          yearsOfExperience:this.props.Lawyer.yearsOfExperience,
        }
      }).then(response => {
        console.log(response)
       window.location = "/UpdateSuccess1"
      })
      .catch(error => {
          console.log(error.response)
      });
      }

handleSubmit = event => {
  console.log('clicked')
  event.preventDefault();

  ReactDOM.render( <div id="root" >
  <ul>

   <h1>Lawyer</h1>
   <tr>
   <td>FirstName: </td>
   <td>{this.props.Lawyer.firstname}</td>
   </tr>
   <tr>
    <td>MiddleName:  </td>
    <td>{this.props.Lawyer.middlename}</td> 
    </tr>
    <tr>
    <td>LastName:</td>
    <td>{this.props.Lawyer.lastname}</td>
    </tr>
    <tr>
    <td>E-mail:</td>
    <td contentEditable="true">{this.props.Lawyer.email} </td>
    </tr>
    <tr>
    <td>Birthdate:  </td>
    <td>{this.props.Lawyer.birthDate}</td>  
    </tr>
    <tr>
    <td>Username:</td>
    <td>{this.props.Lawyer.username}</td>  
    </tr>
    <tr>
    <td>Gender:</td>
    <td>{this.props.Lawyer.gender}</td>  
    </tr>
    <tr>
    <td>Address:</td>
    <td contentEditable="true" >{this.props.Lawyer.address}</td>  
    </tr>
    <tr>
    <td>Phone:</td>
    <td contentEditable="true">{this.props.Lawyer.phone}</td>  
    </tr>
    <tr>
    <td>SSN:</td>
    <td >{this.props.Lawyer.ssn}</td>  
    </tr>
    <tr>
    <td>Salary:</td>
    <td contentEditable="true">{this.props.Lawyer.salary}</td>

    </tr>
    <tr>
    <td>YearsOfExperience:</td>
    <td contentEditable="true">{this.props.Lawyer.yearsOfExperience}</td>  
    </tr>

    
    <button type="button" onClick={this.handledeleteSubmit} >Delete Lawyer's data</button><br></br>
  </ul>
  </div>,document.getElementById('root'))
}


  

  render() {
    return (
      <div style={{backgroundColor: "#047A80"}}>
      <ul>
       <h1>Lawyer</h1>
       <h3>firstname: </h3>{this.props.Lawyer.firstname}<br></br>
       <h3>middlename: </h3>{this.props.Lawyer.middlename}<br></br>
       <h3>lastname: </h3>{this.props.Lawyer.lastname}<br></br>
       <h3>email: </h3>{this.props.Lawyer.email}<br></br>
       <h3>birthDate: </h3>{this.props.Lawyer.birthDate}<br></br>
       <h3>username: </h3>{this.props.Lawyer.username}<br></br>
       <h3>gender: </h3>{this.props.Lawyer.gender}<br></br>
       <h3>address: </h3>{this.props.Lawyer.address}<br></br>
       <h3>phone: </h3>{this.props.Lawyer.phone}<br></br>
       <h3>ssn: </h3>{this.props.Lawyer.ssn}<br></br>
       <h3>salary: </h3>{this.props.Lawyer.salary}<br></br>
       <h3>yearsOfExperience: </h3>{this.props.Lawyer.yearsOfExperience}<br></br>
       <button type="button" onClick={this.handleSubmit}>View Profile</button>

      </ul>
      </div>
    )
  }
}
