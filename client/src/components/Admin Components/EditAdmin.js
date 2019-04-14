import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../../components/Layout/Footer';

export default class EditAdmin extends Component {
  constructor(props){
    super(props);
    this.state={
      admin:{},
      username:{}
    }
  }
  componentDidMount() {
    const username=this.getUSERNAME();
    axios.get(`http://localhost:5000/api/Admins/`+username)
      .then(res => {
        const admin = res.data.data;
        this.setState({ admin });
        console.log(admin);
        console.log(this.state.admin.userName)

      })
  }
  
  updateAdmin(event){
event.preventDefault();
const userName=this.state.admin.userName;

      let firstName=this.refs.firstName.value;
      let lastName=this.refs.lastName.value;
      let email=this.refs.email.value;
      let gender=this.refs.gender.value;
      let password=this.refs.password.value;
      let address=this.refs.address.value;
      let workLocation=this.refs.workLocation.value;

const att={
  "firstName": firstName,
  "lastName": lastName,
  "email": email,
  "age": this.refs.age.value,
  "ssn": this.refs.ssn.value,
  "gender": gender,
  "password": password,
  "address": address,
  "salary": this.refs.salary.value,
  "phoneNumber": this.refs.phoneNumber.value,
  "fax": this.refs.fax.value,
  "workLocation":workLocation 
}

axios.put('http://localhost:5000/api/Admins/'+userName, att)
.then(res=>{
  console.log(res);
  console.log(res.data);
  alert(res.data.msg)
  window.location.href = "http://localhost:3000/AdminHome/Admins";

}
).catch(error => {
alert("Error!!")
     })

  }
  action(event){
    event.preventDefault();
    console.log(test)
  }

   getUSERNAME(){
//event.preventDefault();
var url_string = window.location.href
var url = new URL(url_string);
var user = url.searchParams.get("username");
return user
  }
 
  render() {

 
 

    
    return (
      <div>

       <form onSubmit={this.updateAdmin.bind(this)}>

       <br/><h3>UserName</h3>
            <button type="text" defaultValue={this.state.admin.userName}  style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}>{this.state.admin.userName}</button><br/>
        <br/><h3>firstName</h3>
            <input type="text" defaultValue={this.state.admin.firstName} ref="firstName" placeholder="firstName" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/><br/>
        <br/><h3>lastName</h3>
            <input type="text" defaultValue={this.state.admin.lastName} ref="lastName" placeholder="lastName" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/><br/>
        <br/><h3>Email</h3>
            <input type="text" defaultValue={this.state.admin.email} ref="email" placeholder="email" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/><br/>
        <br/><h3>password</h3>
            <input type="text" defaultValue={this.state.admin.password} ref="password" placeholder="password" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
        <br/><h3>age</h3>
            <input type="text" defaultValue={this.state.admin.age} ref="age" placeholder="age" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/><br/>
        <br/><h3>SSN</h3>
           <input type="text" defaultValue={this.state.admin.ssn} ref="ssn" placeholder="ssn" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/><br/>
        <br/><h3>gender</h3>
            <input type="text" defaultValue={this.state.admin.gender} ref="gender" placeholder="gender" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
        <br/><h3>phoneNumber</h3>
            <input type="text" defaultValue={this.state.admin.phoneNumber} ref="phoneNumber" placeholder="phoneNumber" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/><br/>
        <br/><h3>salary</h3>
            <input type="number" defaultValue={this.state.admin.salary} ref="salary" placeholder="salary" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
        <br/><h3>Address</h3>
            <input type="text" defaultValue={this.state.admin.address} ref="address" placeholder="address" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/><br/>
        <br/><h3>workLocation</h3>
            <input type="text" defaultValue={this.state.admin.workLocation} ref="workLocation" placeholder="workLocation" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
        <br/><h3>fax</h3>
            <input type="number" defaultValue={this.state.admin.fax} ref="fax" placeholder="fax" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
        <button type="submit"  style={{textAlign:'center', borderColor:'blue', height:'50px',width:"500px",fontSize:'20px',backgroundColor:'#01579b'}}>Update Values</button>

        </form>

        
    
      </div>
    )
  }
}
