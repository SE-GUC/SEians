const axios = require('axios');


const functions = {
add: (x,y) => x+y,
getSpcAll: async () => {
    const Forms = await axios.get('http://localhost:5000/api/Forms/')
    return Forms
},



createSpc: async () => {
    const Forms = await axios.post('http://localhost:5000/api/Forms/createSpc/', {
        name:"thwellah",
        district:"el so2",
        city:"el rehab",
        governorate:"cairo",
        companyName:"hamada2", 
        gender:"male",       
        companyNameInArabic:"حماده",
        nationality:"egyptian",
        idType:"ssn",
        idNumber:"12345678980654",
        investorId:1,
        birthdate:'1997-12-31T22:00:00.000+00:00',
        address:"el rehab",
        telephone:"0111-111-1111",
        fax:1234,
        email:"hamada@gmail.com",
        capital:100000,
        currency:"euro",

    });
    return Forms;
  },



  getSpc: async () => {
    const Forms = await axios.get('http://localhost:5000/api/Forms/hamada2');
    return Forms;
},
  deleteSpc: async () => {
    const Forms = await axios.delete('http://localhost:5000/api/Forms/hamada2');
    return Forms;
  },
  updateSpc: async () => {
    const Forms = await axios.put('http://localhost:5000/api/Forms/hamada2', {
        district: "el rehab"
    });
    return Forms;
  },
};
module.exports = functions;