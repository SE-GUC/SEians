import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header';
import Menu from '../../../../components/Layout/Menu';
import Footer from '../../../../components/Layout/Footer';
import logo from '../../../../components/Layout/img/logo.png';
import axios from 'axios';
import Reviewer from './TheReviewers';
import ReactDOM from 'react-dom'

export class GetReviewer extends Component {
  state = {
    Reviewers: [],
    search: ''
  }

  
handleSubmit = event => {
  event.preventDefault();
  console.log('clicked')
  ReactDOM.render( <div id="root" >
  <ul>
  <table style={{border:"1px solid black"}}>
   <h1>Reviewer</h1>
   <tr>
   <td>FirstName: </td>
   <td>{this.props.Reviewer.firstname}</td>
   </tr>
   <tr>
    <td>MiddleName:  </td>
    <td>{this.props.Reviewer.middlename}</td> 
    </tr>
    <tr>
    <td>LastName:</td>
    <td>{this.props.Reviewer.lastname}</td>
    </tr>
    <tr>
    <td>E-mail:</td>
    <td>{this.props.Reviewer.email} </td>
    </tr>
    <tr>
    <td>Birthdate:  </td>
    <td>{this.props.Reviewer.birthDate}</td>  
    </tr>
    <tr>
    <td>UserName:</td>
    <td>{this.props.Reviewer.username}</td>  
    </tr>
    <tr>
    <td>Gender:</td>
    <td>{this.props.Reviewer.gender}</td>  
    </tr>
    <tr>
    <td>Address:</td>
    <td>{this.props.Reviewer.address}</td>  
    </tr>
    <tr>
    <td>Phone:</td>
    <td>{this.props.Reviewer.phone}</td>  
    </tr>
    <tr>
    <td>SSN:</td>
    <td>{this.props.Reviewer.ssn}</td>  
    </tr>
    <tr>
    <td>Salary:</td>
    <td>{this.props.Reviewer.salary}</td>  
    </tr>
    <tr>
    <td>YearsOfExperience:</td>
    <td>{this.props.Reviewer.yearsOfExperience}</td>  
    </tr>

    </table>
    <button type="button" onClick={this.handleAcceptSubmit} >Approve</button><br></br>
    <button type="button" onClick={this.handleRejectSubmit} >Disapprove</button><br></br>
  </ul>
  </div>,document.getElementById('root'))

}


  

  componentDidMount() {
    axios.get(`http://localhost:5000/api/reviewers/`)
      .then(res => {
        const Reviewers = res.data.data;
        this.setState({ Reviewers });

      })
  }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
  }
  
  render() {
    let links = [
      { label: 'Home', link: '/AdminHome' },
      { label: 'Staff', link: '/Staff' },
      { label: 'Assign Tasks', link: '#portfolio' },
      { label: 'Review Forms', link: '#contact-us' },
    ];

    let filteredUN = this.state.Reviewers.filter((Reviewers)=>{
      return Reviewers.username.indexOf(this.state.search) !== -1;
    })


    return (
      <Router>
            <body>
            <a href="/handleReviewer">Back</a>
   </body>
      <div className="container">
        <div className="container2">
        <Menu links={links} logo={logo} />
          <body>
         <Header name = "Get Reviewer"/></body> </div>  </div>
          <div className="container center">
         < div>< div>
            
        </div>
        </div>  
      </div>
     
      <div>
       <ul>
           {
             <input type="text"
             placeholder="Search by username"

             value={this.state.search}
             onChange={this.updateSearch.bind(this)}
             style={{ width: "500px" ,height:"50px",fontSize:"20px" ,backgroundColor:"white",borderColor: 'gray', borderWidth: 5}}
             />
           }
           {
             filteredUN.map((Reviewerss)=>{
               return <Reviewer Reviewer={Reviewerss} key={Reviewer.username}/>
             })
           }
           

        </ul>

      </div>
      </Router>
    )
  }
}

export default GetReviewer


