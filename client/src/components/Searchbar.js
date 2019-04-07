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
    axios.get(`http://localhost:5000/api/Admins/all/`)
      .then(res => {
        const admins = res.data.data;
        this.setState({ admins });
      })
  }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
  }
  render() {
   
    let filteredAdminsUN = this.state.admins.filter((Admin)=>{
      return Admin.userName.indexOf(this.state.search) !== -1;
    })
    let filteredAdminsEM = this.state.admins.filter((Admin)=>{
      return Admin.email.indexOf(this.state.search) !== -1;
    })
    let filteredAdminsFN = this.state.admins.filter((Admin)=>{
      return Admin.firstName.indexOf(this.state.search) !== -1;
    })
    
    /*let filteredAdminsMN = this.state.admins.filter((Admin)=>{
      return Admin.phoneNumber.indexOf(this.state.search) !== -1;
    })*/
    return (
      <div>
       <ul>
           {
             <input type="text"
             placeholder="Filter by userName / Email / firstName"

             value={this.state.search}
             onChange={this.updateSearch.bind(this)}
             style={{ width: "500px" ,height:"50px",fontSize:"20px" ,backgroundColor:"cyan",borderColor: 'gray', borderWidth: 5}}
             />
           }
           {
             filteredAdminsUN.map((admin)=>{
               return <Admin Admin={admin} key={Admin.userName}/>
             })
           }
         
           {
             filteredAdminsEM.map((admin)=>{
               return <Admin Admin={admin} key={Admin.userName}/>
             })
           }
          
           {
             filteredAdminsFN.map((admin)=>{
               return <Admin Admin={admin} key={Admin.userName}/>
             })
           }
         
          
      
        </ul>
     
      </div>
    )
  }
}

export default Searchbar
