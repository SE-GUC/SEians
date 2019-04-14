import React from 'react';

import axios from 'axios';

export default class allAdmins extends React.Component {
  state = {
    admins: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/Admins/all/`)
      .then(res => {
        const admins = res.data.data;
        this.setState({ admins });
      })
  }

  render() {
    return (
      <ul>
        { this.state.admins.map(Admin => <li>{Admin.userName}</li>)}
      </ul>
    )
  }
}