/*import React, { Component } from 'react';


export class UpdateReviewer extends Component {

  state = {
    reviewer:'',
    firstname:'' ,
    middlename:'',
    lastname:'',
    email:'',
    address:'',
    phone:'',
    ssn:'',
    salary:'' ,
    yearsOfExperience:'',
  } 
  /*componentDidMount() {
    axios.put(`http://localhost:5000/api/reviewers/:username`)
      .then(res => {
        const Reviewers = res.data.data;
        this.setState({ Reviewers });
      })
  }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
  }*/

 /* onChange = e => this.setState({ [e.target.name]: e.target.value });
  
    
  render() {
    return (
        <div>
        <input
          type="text"
          name="firstname"
          placeholder={this.props.reviewer.firstname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="middlename"
          placeholder={this.props.reviewer.middlename}
          onChange={this.onChange}
        />
         <input
          type="text"
          name="lastname"
          placeholder={this.props.reviewer.lastname}
          onChange={this.onChange}
        />
         <input
          type="text"
          name="email"
          placeholder={this.props.reviewer.email}
          onChange={this.onChange}
        />
         <input
          type="text"
          name="address"
          placeholder={this.props.reviewer.address}
          onChange={this.onChange}
        />
         <input
          type="text"
          name="phone"
          placeholder={this.props.reviewer.phone}
          onChange={this.onChange}
        />
         <input
          type="text"
          name="ssn"
          placeholder={this.props.reviewer.ssn}
          onChange={this.onChange}
        />
         <input
          type="text"
          name="salary"
          placeholder={this.props.reviewer.salary}
          onChange={this.onChange}
        />
         <input
          type="text"
          name="yearsOfExperience"
          placeholder={this.props.reviewer.yearsOfExperience}
          onChange={this.onChange}
        />
        
        <button onClick={this.props.UpdateReviewer.bind(this, {username: this.props.reviewer.username,
           firstname:this.state.firstname,
           middlename: this.state.middlename,
           lastname:this.state.lastname,
           email:this.state.email,
           address:this.state.address,
           phone:this.state.phone,
           ssn:this.state.ssn,
           salary:this.state.salary,
           yearsOfExperience:this.state.yearsOfExperience,
          })}>
        UPDATE
        </button>
        </div>
    )
  }
}*/

//export default UpdateReviewer