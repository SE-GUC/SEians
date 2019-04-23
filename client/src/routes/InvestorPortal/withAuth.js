import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if(!token){
      return this.setState({
        loading: false,
        redirect:true});
    }
      fetch('api/investors/checkToken',{
        headers:{
          'x-access-token': token
        } 
      })
        .then(res => {
          if (res.status === 200) {
            this.setState({loading: false});
          } else {
            this.setState({redirect: true})
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return <div>I am loading</div>;
      }
      if (redirect) {
        return <Redirect to="/Login"/>
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  }
}