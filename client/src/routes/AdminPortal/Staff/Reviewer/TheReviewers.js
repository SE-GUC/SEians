import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios')
export default class Reviewer extends React.Component {
 

  handledeleteSubmit = event => {
    console.log('clicked')
    event.preventDefault();
    axios({
      method: 'delete',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/reviewers/'+this.props.Reviewer.username,
      
    }).then(response => {
      console.log(response)
      window.location = "/DeletionSuccess"
    })
    .catch(error => {
        console.log(error.response)
    });
    }

    handleupdateSubmit = event => {

      event.preventDefault();
      axios({
        url: 'http://localhost:5000/api/reviewers/'+this.props.Reviewer.username,
        method: 'put',
        data:
        {
          email:this.props.Reviewer.email,
          address:this.props.Reviewer.address,
          phone:this.props.Reviewer.phone,
          salary:this.props.Reviewer.salary,
          yearsOfExperience:this.props.Reviewer.yearsOfExperience,
        }
      }).then(response => {
        console.log(response)
       window.location = "/UpdateSuccess"
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

   <h1>Reviewer</h1>
   <tr>
   <td>FirstName: </td>
   <td>{this.props.Reviewer.firstname}</td>
   </tr>
   <tr>
    <td>MiddleName:  </td>
    <td>{this.props.Reviewer.middlename}</td> 
    </tr>
    <tr>
    <td>LastName:</td>
    <td>{this.props.Reviewer.lastname}</td>
    </tr>
    <tr>
    <td>E-mail:</td>
    <td contentEditable="true">{this.props.Reviewer.email} </td>
    </tr>
    <tr>
    <td>Birthdate:  </td>
    <td>{this.props.Reviewer.birthDate}</td>  
    </tr>
    <tr>
    <td>UserName:</td>
    <td>{this.props.Reviewer.username}</td>  
    </tr>
    <tr>
    <td>Gender:</td>
    <td>{this.props.Reviewer.gender}</td>  
    </tr>
    <tr>
    <td>Address:</td>
    <td contentEditable="true" >{this.props.Reviewer.address}</td>  
    </tr>
    <tr>
    <td>Phone:</td>
    <td contentEditable="true">{this.props.Reviewer.phone}</td>  
    </tr>
    <tr>
    <td>SSN:</td>
    <td >{this.props.Reviewer.ssn}</td>  
    </tr>
    <tr>
    <td>Salary:</td>
    <td contentEditable="true">{this.props.Reviewer.salary}</td>

    </tr>
    <tr>
    <td>YearsOfExperience:</td>
    <td contentEditable="true">{this.props.Reviewer.yearsOfExperience}</td>  
    </tr>

    
    <button type="button" onClick={this.handledeleteSubmit} >Delete Reviewer's data</button><br></br>
  </ul>
  </div>,document.getElementById('root'))
}


  

  render() {
    return (
      <div style={{backgroundColor: "#047A80"}}>
      <ul>
       <h1>Reviewer</h1>
       <h3>firstname: </h3>{this.props.Reviewer.firstname}<br></br>
       <h3>middlename: </h3>{this.props.Reviewer.middlename}<br></br>
       <h3>lastname: </h3>{this.props.Reviewer.lastname}<br></br>
       <h3>email: </h3>{this.props.Reviewer.email}<br></br>
       <h3>birthDate: </h3>{this.props.Reviewer.birthDate}<br></br>
       <h3>username: </h3>{this.props.Reviewer.username}<br></br>
       <h3>gender: </h3>{this.props.Reviewer.gender}<br></br>
       <h3>address: </h3>{this.props.Reviewer.address}<br></br>
       <h3>phone: </h3>{this.props.Reviewer.phone}<br></br>
       <h3>ssn: </h3>{this.props.Reviewer.ssn}<br></br>
       <h3>salary: </h3>{this.props.Reviewer.salary}<br></br>
       <h3>yearsOfExperience: </h3>{this.props.Reviewer.yearsOfExperience}<br></br>
       <button type="button" onClick={this.handleSubmit}>View Profile</button>

      </ul>
      </div>
    )
  }
}
