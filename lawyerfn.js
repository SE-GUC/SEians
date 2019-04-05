const axios = require('axios');
const functions = {
        getLawyers: async () => {
          const lawyers = await axios.get('http://localhost:3000/api/lawyers')
          return lawyers
        },
        createLawyer: async () => {
          const lawyer = await axios.post('http://localhost:3000/api/lawyers', {
            username : '7amada123',
            password : '7amo2a123',
            email : '7ambozo@yasalma.com',
            fullname : 'Mo7sen Mofty el Sombaty'
          });
          return lawyer;
        },
        getLawyer: async () => {
          const lawyer = await axios.get('http://localhost:3000/api/lawyers/7amada123');
          return lawyer;
        },
        deleteLawyer: async () => {
          const lawyer = await axios.delete('http://localhost:3000/api/lawyers/7amada123');
          return lawyer;
        },
        updateLawyer: async () => {
          const lawyer = await axios.put('http://localhost:3000/api/lawyers/7amada123', {
            email: 'abab@abab.com'
          });
          return lawyer;
        },

};
module.exports = functions;
