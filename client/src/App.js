import React, { Component } from 'react';
// import logo from './logo.svg';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer2 from './components/layout/Footer2';
import Landing from './components/layout/Landing';
import {BrowserRouter as Router,Route} from  
'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser, logoutUser} from './actions/authActions';
import Register from './components/Au/Register'
import lawyerRegister from './components/Au/lawyerRegister';
import Login from './components/Au/Login'
import { decode } from 'punycode';
// import { loadavg } from 'os';
// import Particles1 from './components/particles1';


//check for token 
if(localStorage.jwtToken){
  //set auth token header auth 
  setAuthToken(localStorage.jwtToken);
  //decode tokent and get user info and expiration
  const decoded  = jwt_decode(localStorage.jwtToken);
  //set user and is authenticated 
  store.dispatch(setCurrentUser(decoded));

  //check for expired token 
  const currentTime = Date.now()/1000;
  if(decode.exp<currentTime){
    //logout the user in this case 
    store.dispatch(logoutUser());
    //clear current profile : to be completed 
    //redirect to login 
    window.location.href='/login'
  }
}


class App extends Component {
  render() {
    return (
    <Provider store={ store }>
    
      <Router>
        <div className="App">
          <Navbar/>
            <Route exact  path='/' component={Landing}/>
            <div className='container'>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/lawyer/register" component={lawyerRegister}/>
            </div>
          
          <Footer2/>  
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
