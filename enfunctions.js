const axios = require('axios');
const functions = {
  gettasks: async() =>{
    const cases  = await axios.get('http://localhost:3000/api/lawyers/l123')
    return cases
  }

  getunreviewed: async() =>{
    const unfinished = await axios.get('http://localhost:3000/api/reviewers/1123')
    return unfinished
  }

  getallcases: async() =>{
    const cases = await axios.post('http://localhost:3000/api/Admins/Ahmed')
    return cases
  }

  trackrequeststate: async() =>{
    const status = await axios.get('http://localhost:3000/api/investor/Ahmed/req')
    return status
  }

};
module.exports = functions;
