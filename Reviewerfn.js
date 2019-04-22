const axios = require('axios');
const funcs = {

    add: (x,y) => x+y,



    getReviewers: async () => {
        const reviewers = await axios.get('http://localhost:5000/api/reviewers/')
        return reviewers 
        },
    /*getReviewersbyUsername: async(username)=>{
        const reviewers = await axios.get('http://localhost:3000/api/reviewers/'+username)
        return reviewers
    },*/
    deleteReviewer: async()=>{
        const reviewers = await axios.delete('http://localhost:5000/api/reviewers/de3bs69')
        return reviewers
    },

    createReviewer: async()=>{
        

        const reviewers = await   axios({
            url: 'http://localhost:5000/api/reviewers/',
            method: 'post',
            data:{
                email: "test55@test.com",
                firstname: "Ahmed",
                middlename: "Ismail",
                lastname: "Eldin",
                ssn: 1241253214,
                salary: 100000,
                yearsOfExperience: 4,
                phone: 11125234532,
                address: "Madinet Nasr 15st",
                username: "de3bss",
                gender: "Male",
            }
          })

        return reviewers
    },

    updateReviewer: async(params)=>{
        const reviewers = await axios({url:'http://localhost:5000/api/reviewers/de3bss',
        method:'put',
        params:{
            username:"de3bss"}
        })
       
        
        return reviewers;
    },


};
module.exports = funcs;