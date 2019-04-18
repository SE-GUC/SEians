import React, { Component } from 'react'
import axios from 'axios';
import {createSsc} from 'redux'
import CaseViewer from '../components/CaseViewer'
export class SscCase extends Component {
    state = {

      SScs:[],
      search:''
    }



    
  componentDidMount() {
    axios.get(`http://localhost:5000/api/Forms/`)
      .then(res => {
        const SScs = res.data.data;
        this.setState({ SScs });
      })
  }

  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.CaseViewer.SScs.companyName)
  /*  axios({
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, *
        /
        *',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/SscFormController/'+this.state.CaseViewer.SScs.companyName,
      params: {
        companyName:this.state.companyName
      }
    }).then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    }*/
  }
  
  
  render() {
   
    let filteredUN = this.state.SScs.filter((CaseViewer)=>{
      return CaseViewer.companyName.indexOf(this.state.search) !== -1;
    })
    return (
      <div>
       <ul>
           {
             <input type="text"
             placeholder="Enter Company Name "

             value={this.state.search}
             onChange={this.updateSearch.bind(this)}
             style={{ width: "500px" ,height:"50px",fontSize:"20px" ,backgroundColor:"white",borderColor: 'gray', borderWidth: 5}}
             />
           }
             {
             filteredUN.map((SScss)=>{
               return <CaseViewer CaseViewer={SScss} key={CaseViewer.companyName}/>
             })
           }
          
          
        </ul>
     
      </div>
    )
  }
}
export default SscCase