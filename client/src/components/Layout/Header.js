import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import image from './img/Gafi.png'


export class Header extends Component {


    render(){
        
const headerStyle = {
    background: '#1fc1a9',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '10px',
    width: '100%',
  }
  
  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none'
  }
  const headerimg = {
      position: 'absolute',
      top: '-5px',
      left: '10px',
      width: '200px',
      height: '200px',
      padding: '5px',
      background: 'transparent',
    }
    
  
    return (
        <header style={headerStyle}>
          <h1>{this.props.name}</h1>
           
          <img src={image} alt="logo" style={headerimg}/>
       
        </header>
      )
      


    }
}
export default Header;