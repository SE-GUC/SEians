const axios = require('axios');
const functions = {
        getAllAdmins: async () => {
          const Admins = await axios.get('http://localhost:5000/api/Admins/all/')
          return Admins
        },
        createAdmin: async (attributes) => {
         try{
            const Admin = await axios.post('http://localhost:5000/api/Admins',attributes ) ;
        
          return Admin;

        }catch(err){
            return "bayz"
        }
        },
        getAdmin: async (userName) => {
         try{
            const Admin = await axios.get('http://localhost:5000/api/Admins/'+userName);
          return Admin;
         }catch(err){
             console.log("admin not found")

         }
        },
        deleteAdmin: async (userName) => {
          try{
            const Admin = await axios.delete('http://localhost:5000/api/Admins/'+userName);
          
          return Admin;
          }
          catch(err){
          return "error admin not found";
          }
        },
        updateAdmin: async (userName,att) => {
         try{
            const Admin = await axios.put('http://localhost:5000/api/Admins/'+userName, att);
          return Admin;
         }catch(err){
             return "userName not found"
         }
        },

};
module.exports = functions;