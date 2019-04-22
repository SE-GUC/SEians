import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import axios from "axios";

import "../LawyerPortal/LawyerHome.css";

export class reviewerComment extends Component {
  state = {
    name: ""
  };
  handleInputChange1 = event => {
    this.setState({ name: event.target.value });
  };

  //handleSubmit(e){
  handleSubmit = event => {
    event.preventDefault();
    console.log("successful");
    window.alert("Success!");

    axios({
      method: "put",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      url: "http://localhost:5000/api/Forms/" + this.state.companyName,
      data: {
        comments: this.state.comments
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <Router>
        <div className="NavigationBar">
          <div className="container">
            <Header name="comment" />
          </div>
        </div>

        <div
          className="container"
          style={{ marginTop: "100px", marginLeft: "100px", width: "1525px" }}
        >
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="New Comment"
                className="form-control"
                name="name"
                onChange={this.handleInputChange1}
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ color: "#1fc1a9" }}
              >
                Update Comment
              </button>
            </div>
          </form>
        </div>
        <footer className="Footer">
          <Footer />
        </footer>
        <a
          style={{ fontSize: "30px" }}
          href="/CompanyViewer"
          class="btn btn-default"
        >
          Back
        </a>
      </Router>
    );
  }
}

export default reviewerComment;
