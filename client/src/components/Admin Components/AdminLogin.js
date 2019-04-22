import React, { Component } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';



export default class AdminLogin extends Component {

  componentDidMount() {
    var token = JSON.parse(localStorage.getItem('admintoken'))
if(token){
alert("You are  already logged in!");
window.location.href = "http://localhost:3000/AdminHome";


}
  }
  
  loginAdmin(event){
        event.preventDefault();
        let email=this.refs.email.value;
        let password=this.refs.password.value;

        const att={
            "email": email,
            "password": password
        }
        axios.post('http://localhost:5000/api/Admins/login',att)
        .then(res=>{
           
            let token = res.data.token;
            localStorage.setItem('admintoken', JSON.stringify(token));
            let decoded = jwt_decode(token);
         
            alert("Welcome "+decoded.userName);

           window.location.href = "http://localhost:3000/AdminHome";

        }
        ).catch(error => {
         alert("Error!!")
               })

               
       
    }
  
    render() {
    
    return (
      <div>
              <form onSubmit={this.loginAdmin.bind(this)}>

            <input type="text" ref="email" placeholder="email" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
            <input type="password" ref="password" placeholder="password" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
            <br/>
            <button  type="submit"  style={{textAlign:'center', borderColor:'blue', height:'50px',width:"500px",fontSize:'20px',backgroundColor:'#01579b'}}>   Login  </button>

                </form>
      </div>
    )
  }
}
