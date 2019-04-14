import React from 'react';

export default class MySpcs extends React.Component {


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
       <h3>birthdate: </h3>{this.props.MySpcs.birthdate}<br></br>
       <h3>address: </h3>{this.props.MySpcs.address}<br></br>
       <h3>email: </h3>{this.props.MySpcs.email}<br></br>
       

      </ul>
      </div>
    )
  }
}