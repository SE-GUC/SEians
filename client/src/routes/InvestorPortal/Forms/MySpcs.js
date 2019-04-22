import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SpcSearch from './SpcSearch'
export default class MySpcs extends React.Component {
  handleAcceptSubmit = event => {
    event.preventDefault();

    axios({
      method: 'put',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      url: 'http://localhost:5000/api/Forms/'+ this.props.MySpcs.companyName,
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
      url: 'http://localhost:5000/api/Forms/'+ this.props.MySpcs.companyName,
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
   <td>{this.props.MySpcs.companyName}</td>
   </tr>
   <tr>
    <td>Company Name InArabic:  </td>
    <td>{this.props.MySpcs.companyNameInArabic}</td> 
    </tr>
    <tr>
    <td>Governorate:</td>
    <td>{this.props.MySpcs.governorate}</td>
    </tr>
    <tr>
    <td>City:</td>
    <td>{this.props.MySpcs.city} </td>
    </tr>
    <tr>
    <td>District:  </td>
    <td>{this.props.MySpcs.district}</td>  
    </tr>
    <tr>
    <td>Telephone:  </td>
    <td>{this.props.MySpcs.telephone} </td>
    </tr>
    <tr>
    <td>Fax:  </td>
    <td>{this.props.MySpcs.fax}</td>
    </tr>
    <tr>
    <td>Currency:</td>
    <td>{this.props.MySpcs.currency}</td>  
    
    </tr>
    <tr>
    <td>Name:  </td>
    <td>{this.props.MySpcs.name}</td>  
    </tr>
    <tr>
    <td>InvestorId:  </td>
    <td>{this.props.MySpcs.investorId}</td>  
    </tr>
    <tr>
    <td>Gender:  </td>
    <td>{this.props.MySpcs.gender}</td>
    </tr>
    <tr>
    <td>Nationality:  </td>
    <td>{this.props.MySpcs.nationality}</td>  
    </tr>
    <tr>
    <td>Id Type:  </td>
    <td>{this.props.MySpcs.idType}</td>
    </tr>
    <tr>
    <td>Id Number:  </td>
    <td>{this.props.MySpcs.idNumber}</td>
    </tr>
    <tr>
    <td>Capital:  </td>
    <td>{this.props.MySpcs.capital}</td>
    </tr>
    <tr>
    <td>Birthdate:  </td>
         <td>{this.props.MySpcs.birthdate}</td>
    </tr>
    <tr>
    <td>Address:  </td>
   <td>{this.props.MySpcs.address} </td>
    </tr>
    <tr>
    </tr>
    <td>Email: <td>{this.props.MySpcs.email} </td> </td>
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
       <h1>Spcs</h1>
       <h3>companyName: </h3>{this.props.MySpcs.companyName}<br></br> 
       <h3>companyNameInArabic: </h3>{this.props.MySpcs.companyNameInArabic}<br></br> 
       <h3>governorate: </h3>{this.props.MySpcs.governorate}<br></br> 
       <h3>city: </h3>{this.props.MySpcs.city}<br></br> 
       <h3>district: </h3>{this.props.MySpcs.district}<br></br> 
       <h3>telephone: </h3>{this.props.MySpcs.telephone}<br></br> 
       <h3>fax: </h3>{this.props.MySpcs.fax}<br></br> 
       <h3>currency: </h3>{this.props.MySpcs.currency}<br></br> 
       <h3>name: </h3>{this.props.MySpcs.name}<br></br> 
       <h3>investorId: </h3>{this.props.MySpcs.investorId}<br></br> 
       <h3>gender: </h3>{this.props.MySpcs.gender}<br></br> 
       <h3>nationality: </h3>{this.props.MySpcs.nationality}<br></br> 
       <h3>idType: </h3>{this.props.MySpcs.idType}<br></br> 
       <h3>idNumber: </h3>{this.props.MySpcs.idNumber}<br></br>
       <h3>capital: </h3>{this.props.MySpcs.capital}<br></br>
       <h3>requestState: </h3>{this.props.MySpcs.requestState}<br></br>
       <h3>birthdate: </h3>{this.props.MySpcs.birthdate}<br></br>
       <h3>address: </h3>{this.props.MySpcs.address}<br></br>
       <h3>email: </h3>{this.props.MySpcs.email}<br></br>
       <button type="button" onClick={this.handleSubmit}  >View</button><br></br>
      </ul>
      </div>
    )
  }
}