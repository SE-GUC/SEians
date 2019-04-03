const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const lawyer = mongoose.model('lawyers');
const keys = require('../config/keys');

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=keys.secretOrKey;

module.exports = passport =>{
    passport.use(
        new JwtStrategy(opts,(jwt_payload,done)=>{
        user.findById(jwt_payload.id)
        .then(user =>{
            if(user){
                return done(null,user)
            }
            return done(null,false);
        })
        .catch(err=>console.log(err));
}))
// the only way to use this is to specify it in a certain route 
//so lets go back to the user and create a protected route 
};