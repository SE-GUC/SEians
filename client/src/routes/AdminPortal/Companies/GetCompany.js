import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import CompanyViewer from './CompanyViewer';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import Menu from '../../../components/Layout/Menu';
import logo from '../../../components/Layout/img/logo.png';


export class GetCompany extends Component {
  state = {
    companies: [],
    search: ''
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/Companies/`)
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

    let links = [
      { label: 'Home', link: '/AdminHome' },
      { label: 'Staff', link: '/Staff' },
      { label: 'Companies', link: '/Companies' },
      { label: 'Assign Tasks', link: '#portfolio' },
      { label: 'Review Forms', link: '#contact-us' },
    ];
    return(
        <Router>
          <div>
            <Menu links={links} logo={logo}/>
            </div>

          <Header name="Search for a company" />
          <Route path="/Companies" />





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
        <br/>

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

export default GetCompany
