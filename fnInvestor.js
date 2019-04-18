const axios = require('axios');

const functions = {
get: async () => {
    const investors = await axios.get('http://localhost:5000/api/investors/')
    return investors
},
createinvestor: async () => {
    const investors = await axios.post('http://localhost:5000/api/investors/', {
            name : 'saleh',
            userName: 'saleh',
            gender  : 'male',
            nationality : 'egyptian',
            birthDate  : '1-12-1988',
            age  : 38,
            egID : '12800934912343',
            address : 'london 2nd floor',
            mobilePhone  : '0131-111-1111',
            fax : 3678,
            email : 'saleh@gmail.com',
            capital : '2000000',
            currency  : 'dollar',
            Companies : ['google'],
            SSC : 'true',
            password  : '75653283'
    });
    return investors;
  },
  getinvestor: async () => {
    const investors = await axios.get('http://localhost:5000/api/investors/saleh');
    return investors;
},
  deleteinvestor: async () => {
    const investors = await axios.delete('http://localhost:5000/api/investors/saleh');
    return investors;
  },
  updateinvestor: async () => {
    const investors = await axios.put('http://localhost:5000/api/investors/saleh', {
      name: 'mohamed'
    });
    return investors;
  },
};
module.exports = functions;