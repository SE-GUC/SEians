import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../../components/Layout/Header'
import Footer from '../../../components/Layout/Footer';
import axios from 'axios';

export class adminLawyers extends Component {
    
    state = {
        lawyers: []
      }
  
      componentDidMount() {
        axios.get(`http://localhost:5000/api/lawyers`)
          .then(res => {
            const lawyers = res.lawyers;
            this.setState({ lawyers });
          })
      }
      createRows(){
          let x = [];
          for(let i = 0; i < this.lawyers.length;i++){
              x.push(<div>
                  {this.lawyers[i].name}, {this.lawyers[i].username}, <button onClick={
                      (e) => this.deleteLawyer(this.lawyers[i].username)
                      }>DELETE</button>
              </div>)
          }
          return x;
      }

    render(){
        return(
            <Router>
                
            <div className="Header">
              <div className="container">
              <Header name="Lawyers" />
                <Route path="/AdminHome/lawyers" />
              </div>  
            </div>
            <div>
            <br/><br/><br/><br/><br/><br/>
                {this.createRows()}
            </div>
            <footer className="Footer">
            <Footer/>
            </footer>
        
          </Router>
        
        )
                }

    deleteLawyer(username){
        axios.delete(`http://localhost:5000/api/lawyers`,{username})
          .then(res => {
            const lawyers = res.lawyers;
            this.setState({ lawyers });
          })
    }
    
}export default adminLawyers