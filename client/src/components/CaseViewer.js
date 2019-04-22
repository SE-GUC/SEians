
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SingleCase from './SingleCase'







export class CaseViewer extends React.Component {

  
  handleAcceptSubmit = event => {
    event.preventDefault();

    axios({
      method: 'put',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/Forms/'+ this.props.CaseViewer.companyName,
      data: {
        lawyerApproval:true,
        requestState:'Accepted by Lawyer & Awating Review by Reviewer'
      }
    }).then(response => { 
  //    this.props.dispatch(ApplyForForm())
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    }


    
  handleRejectSubmit = event => {
    event.preventDefault();

    axios({
      method: 'put',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/Forms/'+ this.props.CaseViewer.companyName,
      data: {
        requestState:'Rejected By Lawyer'
      }
    }).then(response => { 
  //    this.props.dispatch(ApplyForForm())
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
    }

  

handleSubmit = event => {
  event.preventDefault();






  
  ReactDOM.render( <div id="root" >
  <ul>
  <table style={{border:"1px solid black"}}>
   <h1> FORM</h1>
   <tr>
   <td>Company Name: </td>
   <td>{this.props.CaseViewer.companyName}</td>
   </tr>
   <tr>
    <td>Company Name InArabic:  </td>
    <td>{this.props.CaseViewer.companyNameInArabic}</td> 
    </tr>
    <tr>
    <td>Governorate:</td>
    <td>{this.props.CaseViewer.governorate}</td>
    </tr>
    <tr>
    <td>City:</td>
    <td>{this.props.CaseViewer.city} </td>
    </tr>
    <tr>
    <td>District:  </td>
    <td>{this.props.CaseViewer.district}</td>  
    </tr>
    <tr>
    <td>Telephone:  </td>
    <td>{this.props.CaseViewer.telephone} </td>
    </tr>
    <tr>
    <td>Fax:  </td>
    <td>{this.props.CaseViewer.fax}</td>
    </tr>
    <tr>
    <td>Currency:</td>
    <td>{this.props.CaseViewer.currency}</td>  
    
    </tr>
    <tr>
    <td>Name:  </td>
    <td>{this.props.CaseViewer.name}</td>  
    </tr>
    <tr>
    <td>InvestorId:  </td>
    <td>{this.props.CaseViewer.investorId}</td>  
    </tr>
    <tr>
    <td>Gender:  </td>
    <td>{this.props.CaseViewer.gender}</td>
    </tr>
    <tr>
    <td>Nationality:  </td>
    <td>{this.props.CaseViewer.nationality}</td>  
    </tr>
    <tr>
    <td>Id Type:  </td>
    <td>{this.props.CaseViewer.idType}</td>
    </tr>
    <tr>
    <td>Id Number:  </td>
    <td>{this.props.CaseViewer.idNumber}</td>
    </tr>
    <tr>
    <td>Capital:  </td>
    <td>{this.props.CaseViewer.capital}</td>
    </tr>
    <tr>
    <td>Birthdate:  </td>
         <td>{this.props.CaseViewer.birthdate}</td>
    </tr>
    <tr>
    <td>Address:  </td>
   <td>{this.props.CaseViewer.address} </td>
    </tr>
    <tr>
    </tr>
    <td>Email: <td>{this.props.CaseViewer.email} </td> </td>
    </table>
    <button type="button" onClick={this.handleAcceptSubmit}  >Approve</button><br></br>
    <button type="button" onClick={this.handleRejectSubmit}  >Disapprove</button><br></br>
  </ul>
  </div>,document.getElementById('root'))

}



   render() {
      return (
        <div style={{backgroundColor: "#047A80"}}>
        <ul>
         <h1>{this.props.CaseViewer.type}</h1>
         <h3>Company Name: </h3><td>{this.props.CaseViewer.companyName}</td> <br></br> 
         <h3>Company Name InArabic: </h3>{this.props.CaseViewer.companyNameInArabic}<br></br> 
         <h3>Governorate: </h3>{this.props.CaseViewer.governorate}<br></br> 
         <h3>City: </h3>{this.props.CaseViewer.city}<br></br> 
         <h3>District: </h3>{this.props.CaseViewer.district}<br></br> 
         <h3>Telephone: </h3>{this.props.CaseViewer.telephone}<br></br> 
         <h3>Fax: </h3>{this.props.CaseViewer.fax}<br></br> 
         <h3>Currency: </h3>{this.props.CaseViewer.currency}<br></br> 
         <h3>Name: </h3>{this.props.CaseViewer.name}<br></br> 
         <h3>Gender: </h3>{this.props.CaseViewer.gender}<br></br> 
         <h3>Nationality: </h3>{this.props.CaseViewer.nationality}<br></br> 
         <h3>Id Type: </h3>{this.props.CaseViewer.idType}<br></br> 
         <h3>Id Number: </h3>{this.props.CaseViewer.idNumber}<br></br>
         <h3>Capital: </h3>{this.props.CaseViewer.capital}<br></br>
         <h3>requestState: </h3>{this.props.CaseViewer.requestState}<br></br>
         <h3>Birthdate: </h3>{this.props.CaseViewer.birthdate}<br></br>
         <h3>Address: </h3>{this.props.CaseViewer.address}<br></br>
         <h3>Email: </h3>{this.props.CaseViewer.email}<br></br>
         <button type="button" onClick={this.handleSubmit}  >View</button><br></br>
        </ul>
        </div>
      )
    }
  }

  export default CaseViewer