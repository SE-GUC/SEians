import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios')


export default class CompanyViewer1 extends React.Component {

        handleUpdateSubmit = event => {
      console.log(this.props)
      event.preventDefault();
      axios({
        method: 'put',
        headers: {
          'Accept': 'application/json, text/plain, /',
          'Content-Type': 'application/json'
        },
        url: 'http://localhost:5000/api/Companies/'+this.props.CompanyViewer.name,
        data:{
          name:this.props.CompanyViewer.name,
          companyStatus:this.props.CompanyViewer.companyStatus,
          type:this.props.CompanyViewer.type,
          owner:this.props.CompanyViewer.owner

        }
      }).then(response => {
        console.log(response)
       window.location = "/Companies"
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
      <table style={{border:"1px solid black"}}>
       <h1 >Company Info</h1>
       <tr>
       <td>Name: </td>
       <td contenteditable="true" >{this.props.CompanyViewer.name}</td>
       </tr>
       <tr>
        <td>Company Status:  </td>
        <td contenteditable="true">{this.props.CompanyViewer.companyStatus}</td>
        </tr>
        <tr>
        <td>Company Type:</td>
        <td contenteditable="true">{this.props.CompanyViewer.type}</td>
        </tr>
        <tr>
        <td>Owner:</td>
        <td contenteditable="true">{this.props.CompanyViewer.owner} </td>
        </tr>


        </table>
      </ul>
      </div>,document.getElementById('root'))
}
  render() {
    return (
      <div style={{backgroundColor: "#047A80"}}>
      <ul>
       <h1>Company stored as:</h1>
       <h3>name: </h3>{this.props.CompanyViewer1.name}<br></br>
       <h3>companyStatus: </h3>{this.props.CompanyViewer1.companyStatus}<br></br>
       <h3>type: </h3>{this.props.CompanyViewer1.type}<br></br>
       <h3>owner: </h3>{this.props.CompanyViewer1.owner}<br></br>

      </ul>
      </div>
    )
  }
}
