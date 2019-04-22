import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import EditAdmin from './EditAdmin'


export default class Admin extends React.Component {
  componentDidMount() {
    var token = JSON.parse(localStorage.getItem('admintoken'))
if(!token){
alert("ACCESS DENIED!!!");
window.location.href = "http://localhost:3000/AdminLogin";


}
  }
 
  
  deleteAdmin(event){
    event.preventDefault();
    var token = JSON.parse(localStorage.getItem('admintoken'))
    let decoded = jwt_decode(token);
   
    if(decoded.fullAccess===false){
      alert("ACCESS DENIED!!! Restricted Area, You need to have full access ");
   //   window.location.href = "http://localhost:3000/AdminHome/Admins";
    }else{
    let userName=this.props.Admin.userName;
    axios.delete('http://localhost:5000/api/Admins/'+userName)
    .then(res=>{
      console.log(res);
      console.log(res.data);

      alert(res.data.msg)
 //     this.rerender();
      document.location.reload(true);
  }
  ).catch(error => {
   alert("Error!!")
         })
        }
  }
  editAdmin(event){
    event.preventDefault();
    var token = JSON.parse(localStorage.getItem('admintoken'))
    let decoded = jwt_decode(token);
   
    if(decoded.fullAccess===false){
      alert("ACCESS DENIED!!! Restricted Area, You need to have full access ");
   //   window.location.href = "http://localhost:3000/AdminHome/Admins";
    }else{
    window.location.href = "http://localhost:3000/AdminHome/EditAdmin?username="+this.props.Admin.userName;
    }



  }

  render() {
    return (
      <div style={{backgroundColor: "#00B1E1" }}>
      <ul>
       <h1>Admin</h1> <h3>userName: </h3>{this.props.Admin.userName}<br></br> <h3>email: </h3>{this.props.Admin.email}<br></br> <h3>firstName: </h3>{this.props.Admin.firstName}<br></br> 
       <h3>lastName: </h3>{this.props.Admin.lastName}<br></br> <h3>SSN: </h3>{this.props.Admin.ssn}<br></br> <h3>age: </h3>{this.props.Admin.age}<br></br> <h3>phoneNumber: </h3>{this.props.Admin.phoneNumber}<br></br>
        
      
       <br></br>
      
       { <button type="Edit" onClick={this.editAdmin.bind(this)} style={{textAlign:'center', borderColor:'black', height:'50px',width:"200px",fontSize:'20px',backgroundColor:'#01579b'}}>
               Edit
              </button>
        }
      
       {
              <button type="delete" onClick={this.deleteAdmin.bind(this)} style={{textAlign:'center', borderColor:'black', height:'50px',width:"200px",fontSize:'20px',backgroundColor:'red'}}>
               Delete
              </button>
       }
       
      </ul>
      </div>
    )
  }
}
//React.render(<EditAdmin contacts={contacts}/>);
