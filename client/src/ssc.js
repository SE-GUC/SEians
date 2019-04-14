import React, { Component } from 'react';
import axios from 'axios';

//To use add <Ssc /> tag

const ssc = [{
  name: 'Ahmed',
  district: '123',
  city: 'Cairo',
  governorate: 'Alexandria',
  companyName: '3ayz',
  gender: 'other',
  companyNameInArabic: 'اباعسيبينس',
  nationality: 'borkina faso',
  idType: 'ay7aga',
  idNumber: 123,
  birthDate: '31/3/823',
  address: 'ahaah',
  telephone: 12311313,
  fax: 12323123,
  email: 'abaab@abaa.com',
  capital: 'sadsad',
  currency: 'asass'
},{
  name: 'Ahmed',
  district: '123',
  city: 'Cairo',
  governorate: 'Alexandria',
  companyName: '3ayz',
  gender: 'other',
  companyNameInArabic: 'اباعسيبينس',
  nationality: 'borkina faso',
  idType: 'ay7aga',
  idNumber: 123,
  birthDate: '31/3/823',
  address: 'ahaah',
  telephone: 12311313,
  fax: 12323123,
  email: 'abaab@abaa.com',
  capital: 'sadsad',
  currency: 'asass'
}]
class ssc extends Component {
  state = {
      ssc: []
    }

    componentDidMount() {
      axios.get(`http://localhost:3000/api/SscFormController`)
        .then(res => {
          const ssc = res.data;
          this.setState({ ssc });
        })
    }

    render() {
      return (
        <ul>
          { this.state.ssc.map(ssc => <li>{ssc.name}</li>)}
        </ul>
      )

    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
  }
}

export default ssc;
