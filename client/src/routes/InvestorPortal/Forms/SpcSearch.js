import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from '../../../components/Layout/Footer'
import Header from '../../../components/Layout/Header'
import axios from 'axios';
import MySpcs from './MySpcs';

export class SpcSearch extends Component {
  state = {
    Spcs: [],
    search: ''
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/Forms/`)
      .then(res => {
        const Spcs = res.data.data;
        this.setState({ Spcs });
      })
  }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,30)});
    
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.MySpcs.Spcs.companyName)}
  render() {
   
    let filteredUN = this.state.Spcs.filter((MySpcs)=>{
      return MySpcs.companyName.indexOf(this.state.search) !== -1;
    })
    /*let filteredFN = this.state.Spcs.filter((MySpcs)=>{
      return MySpcs.companyNameInArabic.indexOf(this.state.search) !== -1;
    }) */
   
    return (
      <Router>
        
        <div>
            <body>
           <Header name = "Search for Spc"/></body> 
          </div>
        <div className="container" >
>
       <ul>
           {
             <input type="text"
             placeholder="Filter by companyName"

             value={this.state.search}
             onChange={this.updateSearch.bind(this)}
             style={{ marginTop: '100px' ,width: "500px" ,height:"50px",fontSize:"20px" ,backgroundColor:"white",borderColor: 'gray', borderWidth: 5}}
             />
           }
           {
             filteredUN.map((Spcss)=>{
               return <MySpcs MySpcs={Spcss} key={MySpcs.companyName}/>
             })
           }
         
           {
             /*filteredFN.map((Spcss)=>{
               return <MySpcs MySpcs={Spcss} key={MySpcs.companyNameInArabic}/>
             }) */
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

export default SpcSearch