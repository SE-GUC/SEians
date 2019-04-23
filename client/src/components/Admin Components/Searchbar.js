import React, { Component } from 'react'
import axios from 'axios';
import Admin from './Admin';

export class Searchbar extends Component {
 /* constructor(){
    super();
    this.state={
      search:''
    }
  }*/
  state = {
    admins: [],
    search: ''
  }

  

  componentDidMount() {
    var token = JSON.parse(localStorage.getItem('admintoken'))
    if(!token){
    alert("ACCESS DENIED!!!");
    window.location.href = "http://localhost:3000/AdminLogin";
    
    
    }else{
    axios.get(`http://localhost:5000/api/Admins/all/`)
      .then(res => {
        const admins = res.data.data;
        this.setState({ admins });
      })
  }
}
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
  }
  render() {
   
    let filteredAdminsUN = this.state.admins.filter((Admin)=>{
      return Admin.userName.indexOf(this.state.search) !== -1 || Admin.email.indexOf(this.state.search) !== -1 ||Admin.firstName.indexOf(this.state.search) !== -1;
      
      
    })
 
  
    return (
      <div>
       <ul>
           {
             <input type="text"
             placeholder="Filter by userName / Email / firstName"

             value={this.state.search}
             onChange={this.updateSearch.bind(this)}
             style={{ width: "500px" ,height:"50px",fontSize:"20px" ,backgroundColor:"#fff59d",borderColor: 'red'}}
             />
            
           }
           
           
           {
             filteredAdminsUN.map((admin)=>{
               return <Admin Admin={admin} key={admin.userName}/>
             })
           }
         
          
         
          
      
        </ul>
     
      </div>
    )
  }
}

export default Searchbar
