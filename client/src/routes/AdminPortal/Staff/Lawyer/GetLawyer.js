import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../../components/Layout/Header';
import Menu from '../../../../components/Layout/Menu';
import Footer from '../../../../components/Layout/Footer';
import logo from '../../../../components/Layout/img/logo.png';
import axios from 'axios';
import Lawyer from './TheLawyers';
import ReactDOM from 'react-dom'

export class GetLawyer extends Component {
  state = {
    Lawyers: [],
    search: ''
  }

  
handleSubmit = event => {
  event.preventDefault();
  console.log('clicked')
  ReactDOM.render( <div id="root" >
  <ul>
  <table style={{border:"1px solid black"}}>
   <h1>Lawyer</h1>
   <tr>
   <td>FirstName: </td>
   <td>{this.props.Lawyer.firstname}</td>
   </tr>
   <tr>
    <td>MiddleName:  </td>
    <td>{this.props.Lawyer.middlename}</td> 
    </tr>
    <tr>
    <td>LastName:</td>
    <td>{this.props.Lawyer.lastname}</td>
    </tr>
    <tr>
    <td>E-mail:</td>
    <td>{this.props.Lawyer.email} </td>
    </tr>
    <tr>
    <td>Birthdate:  </td>
    <td>{this.props.Lawyer.birthDate}</td>  
    </tr>
    <tr>
    <td>UserName:</td>
    <td>{this.props.Lawyer.username}</td>  
    </tr>
    <tr>
    <td>Gender:</td>
    <td>{this.props.Lawyer.gender}</td>  
    </tr>
    <tr>
    <td>Address:</td>
    <td>{this.props.Lawyer.address}</td>  
    </tr>
    <tr>
    <td>Phone:</td>
    <td>{this.props.Lawyer.phone}</td>  
    </tr>
    <tr>
    <td>SSN:</td>
    <td>{this.props.Lawyer.ssn}</td>  
    </tr>
    <tr>
    <td>Salary:</td>
    <td>{this.props.Lawyer.salary}</td>  
    </tr>
    <tr>
    <td>YearsOfExperience:</td>
    <td>{this.props.Lawyer.yearsOfExperience}</td>  
    </tr>

    </table>
    <button type="button" onClick={this.handleAcceptSubmit} >Approve</button><br></br>
    <button type="button" onClick={this.handleRejectSubmit} >Disapprove</button><br></br>
  </ul>
  </div>,document.getElementById('root'))

}


  

  componentDidMount() {
    axios.get(`http://localhost:5000/api/lawyers/`)
      .then(res => {
        const Lawyers = res.data.data;
        this.setState({ Lawyers });

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

    let filteredUN = this.state.Lawyers.filter((Lawyers)=>{
      return Lawyers.username.indexOf(this.state.search) !== -1;
    })


    return (
      <Router>
            <body>
            <a href="/handleLawyer">Back</a>
   </body>
      <div className="container">
        <div className="container2">
        <Menu links={links} logo={logo} />
          <body>
         <Header name = "Get Lawyer"/></body> </div>  </div>
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
             filteredUN.map((Lawyerss)=>{
               return <Lawyer Lawyer={Lawyerss} key={Lawyer.username}/>
             })
           }
           

        </ul>

      </div>
      
      <footer className="Footer" style={{  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",

}}>
      <Footer/>
      </footer>
      </Router>
    )
  }
}

export default GetLawyer


