import React, { Component } from 'react'
import Admin from './Admin'
export default class UpdateAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
          admins:props.admins,
          fullAccesss:false,
          userName:this.props.userName
        }
      }
     
      handleFullAccessChange(event){
    
        this.setState({ fullAccesss: !this.state.fullAccesss});
      
      }
      updateAdmin(event){
          event.preventDefault();
          console.log('"'+this.refs.userName.value+'"') 
          console.log(this.refs.userName.value) 
       
      
         let userName=this.refs.userName.value;
          let firstName=this.refs.firstName.value;
          let lastName=this.refs.lastName.value;
          let email=this.refs.email.value;
          let gender=this.refs.gender.value;
          let password=this.refs.password.value;
          let address=this.refs.address.value;
          let workLocation=this.refs.workLocation.value;
          let fullAccess=this.state.fullAccesss;
    
    
          const att={
            "userName": userName,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "age": this.refs.age.value,
            "ssn": this.refs.ssn.value,
            "gender": gender,
            "isLogged": false,
            "password": password,
            "address": address,
            "salary": this.refs.salary.value,
            "phoneNumber": this.refs.phoneNumber.value,
            "fax": this.refs.fax.value,
            "fullAccess": fullAccess,
            "workLocation":workLocation 
            ////////////////////
          }
    console.log(att)
            
          
             
            axios.post('http://localhost:5000/api/Admins',att)
             .then(res=>{
                 console.log(res);
                 console.log(res.data);
                 alert(res.msg)
             }
             ).catch(error => {
              alert("Error!!")
                    })
            
            
           
    
    
    
      }
      componentDidMount() {
          var token = JSON.parse(localStorage.getItem('admintoken'))
          if(!token){
          alert("ACCESS DENIED!!!");
          window.location.href = "http://localhost:3000/AdminLogin";
          
          
          }else{
            let decoded = jwt_decode(token);
            console.log('helllooooo')
            console.log(decoded)
            console.log(decoded.fullAccess)
            if(decoded.fullAccess===false){
              alert("ACCESS DENIED!!! Restricted Area, You need to have full access ");
              window.location.href = "http://localhost:3000/AdminLogin/Admins";
            }else{
        axios.get(`http://localhost:5000/api/Admins/all/`)
          .then(res => {
            const admins = res.data.data;
            this.setState({ admins });
          })
        }
      }
    }
        render() {
            let selectedAdmin = this.state.admins.filter((Admin)=>{
                return Admin.userName.indexOf(this.state.search) !== -1;
              }) 
    
        return (
          <div>
    <ul>
            <form onSubmit={this.updateAdmin.bind(this)}>
    
            
                <h3>Username</h3>
                <input type="text" ref="userName" placeholder="UserName" value={ }style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>firstName</h3>
                <input type="text" ref="firstName" placeholder="firstName" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>lastName</h3>
                <input type="text" ref="lastName" placeholder="lastName" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>email</h3>
                <input type="text" ref="email" placeholder="email" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>age</h3>
                <input type="number" ref="age" placeholder="age" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>ssn</h3>
                <input type="number" ref="ssn" placeholder="SSN" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>gender</h3>
                <input type="text" ref="gender" placeholder="gender" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>password</h3>
                <input type="text" ref="password" placeholder="password" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>address</h3>
                <input type="text" ref="address" placeholder="address" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>salary</h3>
                <input type="number" ref="salary" placeholder="salary" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>phoneNumber</h3>
                <input type="number" ref="phoneNumber" placeholder="phoneNumber" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>fax</h3>
                <input type="number" ref="fax" placeholder="fax" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>fullAccess</h3>
                <input type="checkbox" ref="fullAccess" placeholder="fullAccess"      onChange={this.handleFullAccessChange.bind(this)} style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/><h3>workLocation</h3>
                <input type="text" ref="workLocation" placeholder="workLocation" style={{textAlign:'center', borderColor:'red', height:'50px',width:"500px",fontSize:'20px'}}/>
                <br/>
                <button  type="submit"  style={{textAlign:'center', borderColor:'blue', height:'50px',width:"500px",fontSize:'20px',backgroundColor:'#01579b'}}>   Create  </button>
                
              
            </form>
          
            
    
    
            </ul>
          </div>
        )
      }
    }