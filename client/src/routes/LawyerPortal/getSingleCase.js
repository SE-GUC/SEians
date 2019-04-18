import React, { Component } from 'react'
import axios from 'axios';
import SingleCase from '../../components/SingleCase'
export class getSingleCase extends Component {
    state = {
        companyName:'' ,
        SScs:[]
    }

    
  componentDidMount() {
    axios.get('http://localhost:5000/api/SscFormController/')
      .then(response => { 
        console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      });
  }


  render() {
   

    return (
      <div>
       <ul>      
    
         <SingleCase />
            
       </ul>
     
      </div>
    )
  }
}
export default getSingleCase