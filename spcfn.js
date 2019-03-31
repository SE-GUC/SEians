const axios = require('axios');


const functions = {
add: (x,y) => x+y,
getSpcAll: async () => {
    const Spcs = await axios.get('http://localhost:3000/api/Spcs/')
    return Spcs
},



createSpc: async () => {
    const Spcs = await axios.post('http://localhost:3000/api/Spcs/', {
        companyName:"hamada2",
        companyNameInArabic:"حماده",
        governorate
        :"cairo",
        city
        :"el rehab",
        district
        :"el so2",
        telephone
        :"0111-111-1111",
        fax
        :1234,
        currency
        :"euro",
        name
        :"thwellah",
        investorId
        :1,
        gender
        :"male",
        nationality
        :"egyptian",
        idType
        :"ssn",
        idNumber
        :"12345678980654",
        birthdate
        :'1997-12-31T22:00:00.000+00:00',
        address
        :"el rehab",
        email
        :"hamada@gmail.com",
        capital:100000
    });
    return Spcs;
  },



  getSpc: async () => {
    const Spcs = await axios.get('http://localhost:3000/api/Spcs/1');
    return Spcs;
},
  deleteSpc: async () => {
    const Spcs = await axios.delete('http://localhost:3000/api/Spcs/1');
    return Spcs;
  },
  updateSpc: async () => {
    const Spcs = await axios.put('http://localhost:3000/api/Spcs/1', {
      companyName: 'mesh hamada'
    });
    return Spcs;
  },
};
module.exports = functions;