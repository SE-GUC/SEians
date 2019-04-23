import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Menu from "../../components/Layout/Menu";
import Footer from "../../components/Layout/Footer";
import logo from "../../components/Layout/img/logo.png";
const axios = require("axios");

export class generateContract extends Component {
  state = {
    investorName: "",
    investorId: "",
    investorSSN: "",
    lawyerName: "",
    lawyerId: "",
    lawyerSSN: "",
    date: "",
    companyName: "",
    companyId: ""
  };

  handleinvestorNameChange = event => {
    this.setState({ investorName: event.target.value });
  };
  handleinvestorIdChange = event => {
    this.setState({ investorId: event.target.value });
  };
  handleinvestorSSNChange = event => {
    this.setState({ investorSSN: event.target.value });
  };
  handlelawyerNameChange = event => {
    this.setState({ lawyerName: event.target.value });
  };
  handlelawyerIdChange = event => {
    this.setState({ lawyerId: event.target.value });
  };
  handlelawyerSSNChange = event => {
    this.setState({ lawyerSSN: event.target.value });
  };
  handledateChange = event => {
    this.setState({ date: event.target.value });
  };
  handlecompanyNameChange = event => {
    this.setState({ companyName: event.target.value });
  };
  handlecompanyIdChange = event => {
    this.setState({ companyId: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    window.alert("Success!");
    axios({
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      url: "http://localhost:5000/api/contracts/",
      data: {
        investorName: this.state.investorName,
        investorId: this.state.investorId,
        investorSSN: this.state.investorSSN,
        lawyerName: this.state.lawyerName,
        lawyerSSN: this.state.lawyerSSN,
        lawyerId: this.state.lawyerId,
        date: this.state.date,
        companyName: this.state.companyName,
        companyId: this.state.companyId
      }
    })
      .then(response => {
        console.log(response);
        window.location = "/CreationSuccess";
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    let links = [{ label: "Home", link: "/LawyerHome" }];
    return (
      <Router>
        <body>
          <a href="/handleReviewer">Back</a>
        </body>
        <div className="container">
          <div className="container2">
            <Menu links={links} logo={logo} />
            <body>
              <Header name="Add new Reviewer" />
            </body>{" "}
          </div>{" "}
        </div>
        <div className="container center">
          <div>
            <div />
          </div>
        </div>
        <footer className="Footer">
          <Footer />
        </footer>

        <div style={{ fontSize: "25px", backgroundColor: "#047A80" }}>
          <center>
            <form onSubmit={this.handleSubmit}>
              <label>
                investorName:
                <input
                  type="text"
                  investorName="investorName"
                  onChange={this.handlefirstnameChange}
                />
              </label>
              <br />
              <label>
                investorId:
                <input
                  type="text"
                  investorId="investorId"
                  onChange={this.handleinvestorIdChange}
                />
              </label>
              <br />
              <label>
                investorSSN:
                <input
                  type="text"
                  investorSSN="investorSSN"
                  onChange={this.handleinvestorSSNChange}
                />
              </label>
              <br />
              <label>
                lawyerName:
                <input
                  type="text"
                  lawyerName="lawyerName"
                  onChange={this.handlelawyerNameChange}
                />
              </label>
              <br />
              <label>
                lawyerSSN:
                <input
                  type="text"
                  lawyerSSN="lawyerSSN"
                  onChange={this.handlelawyerSSNChange}
                />
              </label>
              <br />
              <label>
                lawyerId:
                <input
                  type="text"
                  lawyerId="lawyerId"
                  onChange={this.handlelawyerIdChange}
                />
              </label>
              <br />
              <label>
                date:
                <input
                  type="date"
                  date="date"
                  onChange={this.handledateChange}
                />
              </label>
              <br />
              <label>
                companyName:
                <input
                  type="text"
                  companyName="companyName"
                  onChange={this.handlecompanyNameChange}
                />
              </label>
              <br />
              <label>
                companyId:
                <input
                  type="text"
                  companyId="companyId"
                  onChange={this.handlecompanyIdChange}
                />
              </label>
              <br />
              <button
                style={{ height: "30px", fontSize: "25px" }}
                type="submit"
                onClick={this.handleSubmit}
              >
                submit{" "}
              </button>
            </form>
          </center>
        </div>
      </Router>
    );
  }
}
export default generateContract;
