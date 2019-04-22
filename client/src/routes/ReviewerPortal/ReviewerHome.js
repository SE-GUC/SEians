import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export class ReviewerHome extends Component {



render(){
return(
    <Router>
        
    <div className="NavigationBar">
      <div className="container">
         <Header name="Reviewer Portal" />
        <Route exact path="/" render={props => (
          <React.Fragment>
           <li><a href="default.asp">Home</a></li>
           <li><a href="news.asp">News</a></li>
           <li><a href="contact.asp">Contact</a></li>
           <li><a href="about.asp">About</a></li>
          </React.Fragment>
        )} />
        <Route path="/about" />
      </div>  
    </div>
    <footer className="Footer">
    <Footer/>
    </footer>
    <a href="/SpcUpdate"> update forms </a><br/>
    <a href="/SpcDelete"> delete forms </a><br/>
  </Router>
)
}
}

export default ReviewerHome
