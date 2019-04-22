import React, { Component } from 'react'

export default class AdminLogout extends Component {
    componentDidMount(){
      //  event.preventDefalut();
        localStorage.clear();
        window.location.href = "http://localhost:3000/AdminLogin";


    }
  render() {
    return (
      <div>
       
      </div>
    )
  }
}
