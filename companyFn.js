
const axios = require('axios');

const funcs = {

    getCompanies: async () => {

        const Companies = await axios.get('http://localhost:3000/api/Companies/')

        return Companies 

        },


    deleteCompany: async()=>{

        const Companies = await axios.delete('http://localhost:3000/api/Companies/Keksooo')

        return Companies

    },



    createCompany: async()=>{

        



        const Companies = await   axios({

            url: 'http://localhost:3000/api/Companies/',

            method: 'post',

            data:{

                name: "Keksooo",

                companyStatus: "Finished",

                type: "SSC",

                owner: "Karim Farahat",


            }

          })



        return Companies

    },



    updateCompany: async(done)=>{

        const Companies = await axios({url:'http://localhost:3000/api/Companies/Keksooo',

        method:'put',
        params:{
            name:"Keksooo"},
        })


        return Companies;

    },


};

module.exports = funcs;






//////////////////////////////
