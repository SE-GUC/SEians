const axios = require('axios');
const functions = {

        
    deleteSsc: async()=>{
        const ssc = await axios.delete('http://localhost:3000/api/SscFormController/Facebook')
        return ssc
    },
        
	getUnapprovedSSC: async () => {
        const ssc = await axios.get('http://localhost:3000/api/SscFormController/false')
        return ssc
        },

         
	getUnapprovedSSC: async () => {
                const ssc = await axios.get('http://localhost:3000/api/SscFormController/true')
                return ssc
                },

        
        
     createSsc: async()=>{

        const ssc = await axios({
            url:'http://localhost:3000/api/SscFormController/',
            method:'post',
            data:{
                name:" Farwa",
                companyName:"YaRab" ,
                companyNameInArabic:"Test",
                governorate:"Hogwarts",
                city:"MonofyaVille",
                district:"Duhaaa",
                telephone:"0123456677",
                fax:"888888888888",
                currency:"shekal",
                gender:"male",
                nationality:"Wakanda",
                idType:"Passport" ,
                idNumber:"15454548",
                capital:"100000 usd",
                birthDate :"1948-5-14",
                address:"3 monoofya st.",
                email:"monnofyaForever@yahoo.com",
                managers:[["Ahmed","3uui232","Egypt"]]
             }
          })

        return ssc
    },

    updateSsc:async()=>{

        const ssc = await axios({
            url: 'http://localhost:3000/api/SscFormController/Facebook',
            method: 'put',
            params:  {
                companyName:"Monaco" 
             }
          })

        return ssc
    }
        
};
module.exports = functions;