import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import {BrowserRouter as Router,Route} from  'react-router-dom';
import Register from './components/Au/Register'
import lawyerRegister from './components/Au/lawyerRegister';
import Login from './components/Au/Login'

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Navbar/>
          <Route exact  path='/' component={Landing}/>
          <div className='container'>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/lawyer/register" component={lawyerRegister}/>
          </div>
        <Footer/>  
      </div>
    </Router>
    );
  }
}

export default App;
