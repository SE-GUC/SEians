import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default ()=><div>
  <Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Home" />
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
      </Router>

      <div style= {{marginTop: '100px', marginLeft: '500px'}}>
      <li className="nav-item">
      <a href="/Register">Register as investor</a>
      </li>
      <li className="nav-item">
      <a href="/Login">login as investor</a>     
      </li>
      <li className="nav-item">
      <a href="/SearchInvestor">searchINInvestor</a>
      </li>
      <li className="nav-item">
      <a href="/UpdateInvestor">UpdateInvestor</a>
      </li>
      <li className="nav-item">
      <a href="/DeleteInvestor">deleteInvestor</a>
      </li>
    </div>
</div>;


/*export class InvestorHome extends Component {
    render(){
return(

<Router>
<div className="NavigationBar">
      <div className="container">
      <Header name="Home" />
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
    
          <div >
            <Navbar />
              <div className="container" >
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/SearchInvestor" component={ SearchInvestor } />
                <Route exact path="/UpdateInvestor" component={ UpdateInvestor } />
                <Route exact path="/DeleteInvestor" component={ DeleteInvestor } />
              </div>
          </div>      
          <footer className="Footer">
    <Footer/>
    </footer>
      </Router>
      
)
        }
    }*/
