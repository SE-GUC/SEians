const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const passport = require('passport');
//load profile model 
const Profile = require('../../Models/Profile');
const lawyer = require('../../Models/lawyer');
//load profile validations 
const validateProfileInput = require('../../validations/profile')


router.get('/test',(req,res)=> res.json({msg:'profile works'}));

//@route  Get api/profile
//@desc  get current user profile  
//@access private 
router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const errors = {};
    Profile.findOne({user:req.user.id})
    .then(profile=>{
        if(!profile){
            errors.noprofile = 'there is no profile ';
            return res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err=> res.status(404).json(err));

});
//@route  Get api/profile/handle/:handle //this handle will not be written in the front end just the name of the user 

//@desc  get profile by the handle 
//@access public 

//":handle" this shape is called a placeholder 

router.get('/handle/:handle',(req,res)=>{
    const errors = {};
    Profile.findOne({handle:req.params.handle})
    .populate('user',['name','avatar'])
    .then(profile=>{
        if(!profile){
            errors.noProfile='There is no profile for this user ';
            res.status(400).json(errors);
        }
        res.json(profile);
    })
    .catch(err=>res.status(404).json(err))
});

//@route  Get api/profile/user/:user_id
//@desc  Get profile by the user id  
//@access public

router.get('/user/user_id',(req,res)=>{
    const errors = {};
    Profile.findOne({user:req.params.user_id})
    .populate('user',['name','avatar'])
    .then(profile=>{
        if(!profile){
            errors.noProfile='There is no profile for this user ';
            res.status(400).json(errors);
        }
        res.json(profile);
    })
    .catch(err=>res.status(404).json(err))
});


//@route  Get api/profile
//@desc  post create or update  user profile  
//@access private 
router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {errors,isValid} = validateProfileInput(req.body);

    //check validation 
    if(!isValid){
        return res.status(400).json(errors)
    }
    //Get Feilds
    const porfileFeilds = {};
    porfileFeilds.user = req.user.id;
    if(req.body.handle) porfileFeilds.handle = req.body.handle;
    if(req.body.bio) porfileFeilds.bio = req.body.bio;
    if(req.body.currentState) porfileFeilds.currentState = req.body.currentState;
    if(req.body.location) porfileFeilds.location = req.body.location;
    if(req.body.company) porfileFeilds.company = req.body.company;
    if(req.body.website) porfileFeilds.website = req.body.website;


    porfileFeilds.social={};
    if(req.body.youtube) porfileFeilds.porfileFeilds.social.youtube = req.body.youtube;
    if(req.body.facebook) porfileFeilds.porfileFeilds.social.facebook = req.body.facebook;
    if(req.body.twitter) porfileFeilds.porfileFeilds.social.twitter = req.body.twitter;

    Profile.findOne({user:req.user.id})
    .then(profile =>{
        if(profile){
            //update
            Profile.findByIdAndUpdate({user:req.user.id},{$set:porfileFeilds},{new:true})
            .then(profile=>res.json(profile));
        }else{
            //create 
            //check if the handle existed 
            Profile.findOne({handle:porfileFeilds.handle})
            .then(profile=>{
                if(profile){
                    errors.handle='that handle already existed ';
                     res.status(404).json(errors )

                }
                //save profilec 
                new Profile(porfileFeilds).save().then(profile => res.json(profile)); 


            })
        }
    })

    
});

//getting all profiles 
router.get('/all',(req,res)=>{
    Profile.find()
    .populate('user',['name','avatar'])
    .then(profiles=>{
        if(!profiles){
            res.status(404).json('no profiles ');
        }
        res.json(profiles);
    })
    .catch(err=>res.status(404).json({profile:'there are no profiles '}) )
});





module.exports = router; 