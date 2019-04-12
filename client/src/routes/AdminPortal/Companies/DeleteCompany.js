import React, { Component } from 'react'
import axios from 'axios';
import CompanyViewer from './CompanyViewer';

export class DeleteCompany extends Component {
  state = {
    companies: [],
    search: ''
  }

  componentDidMount() {
    axios.delete(`http://localhost:5000/api/Companies/`)
      .then(res => {
        const companies = res.data.data;
        this.setState({ companies });
      })
  }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
  }
  render() {
    let filteredUN = this.state.companies.filter((CompanyViewer)=>{
      return CompanyViewer.name.indexOf(this.state.search) !== -1;
    })

    return (
      <div>
       <ul>
           {
             <input type="text"
             placeholder="Filter by Company name"

             value={this.state.search}
             onChange={this.updateSearch.bind(this)}
             style={{ width: "500px" ,height:"50px",fontSize:"20px" ,backgroundColor:"white",borderColor: 'gray', borderWidth: 5}}
             />
           }
           {
             filteredUN.map((Companies)=>{
               return <CompanyViewer CompanyViewer={Companies} key={CompanyViewer.name}/>
             })
           }


        </ul>

      </div>
    )
  }
}

export default DeleteCompany
