import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import axios from 'axios';


class LogoutInv extends Component {

    

    componentDidMount() {
            localStorage.removeItem('token')
            localStorage.removeItem('user'); 
            this.props.history.push('/');
          }


    render() {
        return("error happening")
    }
}

export default LogoutInv;
