import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { withRouter } from "react-router";
import Menu from '../../components/Layout/Menu';
import logo from '../../components/Layout/img/logo.png';

class InvestorHome extends Component { 

  render() {
    let user = JSON.parse(localStorage.getItem('user'));
    let name = user.name
    let links = [
      { label: name , link: '/Profile', active: true },
      { label: 'search' , link: '/SearchInvestor', active: true },
      { label: 'edit' , link: '/UpdateInvestor', active: true },
      { label: 'delete' , link: '/deleteInvestor', active: true },
      { label: 'show Companies' , link: '/CompanyViewer', active: true },
      { label: 'Logout', link: '/LogoutInv', active: true },
      { label: 'Get My Forms', link: '/getMyForms', active: true }
    ];
    return (
      <div>
        <Router>
          <div className="NavigationBar">
            <div className="container">
            <Menu links={links} logo={logo} />
              <Header name="Home" />
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <li>
                      <a href="default.asp">Home</a>
                    </li>
                    <li>
                      <a href="news.asp">News</a>
                    </li>
                    <li>
                      <a href="contact.asp">Contact</a>
                    </li>
                    <li>
                      <a href="about.asp">About</a>
                    </li>
                  </React.Fragment>
                )}
              />
              <Route path="/about" />
            </div>
          </div>
          <footer className="Footer">
            <Footer />
          </footer>
          <a href="/Investor/SpcCreate">Create Form</a><br/>
          <a href="/FormUpdateInv">Update Form</a><br/>
          <a href="/Formdeleteinv">delete Form</a><br/>
        </Router>
      </div>
    );
  }
}
export default withRouter(InvestorHome);
