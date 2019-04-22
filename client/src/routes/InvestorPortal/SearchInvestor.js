import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import MyInvestors from './MyInvestors';

export class SearchInvestor extends Component {
  state = {
    investors: [],
    search: ''
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/investors/`)
      .then(res => {
        const investors = res.data.data;
        this.setState({ investors });
      })
  }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
  }
  render() {
   
    let filteredinvestorsUN = this.state.investors.filter((MyInvestors)=>{
      return MyInvestors.userName.indexOf(this.state.search) !== -1;
    })
   /* let filteredinvestorsFN = this.state.investors.filter((MyInvestors)=>{
      return MyInvestors.name.indexOf(this.state.search) !== -1;
    })*/
   
    return (
      <Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Search for investors" />
      </div>  
    </div>
    <div>
       <ul>
           {
             <input type="text"
             placeholder="Filter by userName / Name"

             value={this.state.search}
             onChange={this.updateSearch.bind(this)}
             style={{ marginTop: '100px', width: "500px" ,height:"50px",fontSize:"20px" ,backgroundColor:"white",borderColor: 'gray', borderWidth: 5}}
             />
           }
           {
             filteredinvestorsUN.map((investorss)=>{
               return <MyInvestors MyInvestors={investorss} key={MyInvestors.userName}/>
             })
           }
         
           {
             /*filteredinvestorsFN.map((investorss)=>{
               return <MyInvestors MyInvestors={investorss} key={MyInvestors.name}/>
             })*/
           }
          
        </ul>
     
      </div>
      </Router>

      
    )
  }
}

export default SearchInvestor
