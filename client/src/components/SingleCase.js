import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios')


export class SingleCase extends React.Component {
   
    render() {
      return (
        <div id="root" >
        <ul>
        <table style={{border:"1px solid black"}}>
         <h1>SSC FORM</h1>
         <tr>
         <td>Company Name: </td>
         <td>{this.state.SingleCase.companyName}</td>
         </tr>
         <tr>
          <td>Company Name InArabic:  </td>
          <td>{this.props.SingleCase.companyNameInArabic}</td> 
          </tr>
          <tr>
          <td>Governorate:</td>
          <td>{this.props.SingleCase.governorate}</td>
          </tr>
          <tr>
          <td>City:</td>
          <td>{this.props.SingleCase.city} </td>
          </tr>
          <tr>
          <td>District:  </td>
          <td>{this.props.SingleCase.district}</td>  
          </tr>
          <tr>
          <td>Telephone:  </td>
          <td>{this.props.SingleCase.telephone} </td>
          </tr>
          <tr>
          <td>Fax:  </td>
          <td>{this.props.SingleCase.fax}</td>
          </tr>
          <tr>
          <td>Currency:</td>
          <td>{this.props.SingleCase.currency}</td>  
          
          </tr>
          <tr>
          <td>Name:  </td>
          <td>{this.props.SingleCase.name}</td>  
          </tr>
          <tr>
          <td>InvestorId:  </td>
          <td>{this.props.SingleCase.investorId}</td>  
          </tr>
          <tr>
          <td>Gender:  </td>
          <td>{this.props.SingleCase.gender}</td>
          </tr>
          <tr>
          <td>Nationality:  </td>
          <td>{this.props.SingleCase.nationality}</td>  
          </tr>
          <tr>
          <td>Id Type:  </td>
          <td>{this.props.SingleCase.idType}</td>
          </tr>
          <tr>
          <td>Id Number:  </td>
          <td>{this.props.SingleCase.idNumber}</td>
          </tr>
          <tr>
          <td>Capital:  </td>
          <td>{this.props.SingleCase.capital}</td>
          </tr>
          <tr>
          <td>Birthdate:  </td>
               <td>{this.props.SingleCase.birthDate}</td>
          </tr>
          <tr>
          <td>Address:  </td>
         <td>{this.props.SingleCase.address} </td>
          </tr>
          <tr>
          </tr>
          <td>Email: <td>{this.props.SingleCase.email} </td> </td>
          </table>
        </ul>
        </div>
      )
    }
  }

  export default SingleCase