import React from 'react';

export default class CompanyViewer extends React.Component {


  render() {
    return (
      <div style={{backgroundColor: "#047A80"}}>
      <ul>
       <h1>Company stored as:</h1>
       <h3>name: </h3>{this.props.CompanyViewer.name}<br></br>
       <h3>companyStatus: </h3>{this.props.CompanyViewer.companyStatus}<br></br>
       <h3>type: </h3>{this.props.CompanyViewer.type}<br></br>
       <h3>owner: </h3>{this.props.CompanyViewer.owner}<br></br>

      </ul>
      </div>
    )
  }
}
