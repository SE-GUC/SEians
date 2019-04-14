import React from 'react';
import image from './img/sumerge.png'

function Footer() {
  return (
    <footer style={footerStyle}>
      <i>This Website is powered by SEians</i>
      <img src={image} alt="logo" style={footerimg}/>
     <h2></h2>
    </footer>
  )
}

const footerStyle = {
  background: '#505050',
  color: '#FFFFFF',
  textAlign: 'center',
  padding:'10px',
  bottom: '0',
  width: '100%',
}

const linkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none'
}
const footerimg = {
    position: 'absolute',
    bottom: '-5px',
    left: '10px',
    width: '100px',
    height: '15px',
    padding: '5px',
    background: 'transparent',
  }

export default Footer;