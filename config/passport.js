// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const mongoose = require('mongoose');
// const lawyer = mongoose.model('lawyers');
// const keys = require('../config/keys');

// const opts = {}

// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey=keys.secretOrKey;

// module.exports = passport =>{
//     passport.use(
//         new JwtStrategy(opts,(jwt_payload,done)=>{
//             lawyer.findById(jwt_payload.id)
//         .then(lawyerl =>{
//             if(lawyerl){
//                 return done(null,lawyerl)
//             }
//             return done(null,false);
//         })
//         .catch(err=>console.log(err));
// }))
// // the only way to use this is to specify it in a certain route 
// //so lets go back to the user and create a protected route 
// };
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Admin = mongoose.model('Admins');
const keys = require('../config/keys');
const lawyer = mongoose.model('lawyers');
const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=keys.secretOrKey;

module.exports = passport =>{
    
    passport.use(
        new JwtStrategy(opts,(jwt_payload,done)=>{
        Admin.findById(jwt_payload.id)
        .then(admin =>{
            if(admin){
                return done(null,admin)
            }
            
            return done(null,false);
        })
        .catch(err=>console.log(err));
}))
passport.use(
    new JwtStrategy(opts,(jwt_payload,done)=>{
    lawyer.findById(jwt_payload.id)
    .then(lawyerl =>{
        if(lawyerl){
            return done(null,lawyerl)
        }
        
        return done(null,false);
    })
    .catch(err=>console.log(err));
}))
// the only way to use this is to specify it in a certain route 
//so lets go back to the user and create a protected route 
};