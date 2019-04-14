const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const passport = require('passport');

const Post = require('../../Models/Post');
// load validations 
const validatePostInput = require('../../validations/post');

router.get('/test',(req,res)=> res.json({msg:'profile works'}));

//@route  POST api/posts/
//@desc  create post 
//@access private

router.post('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    const {errors,isValid}=validatePostInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    const newPost = new Post({
        text:req.body.text,
        name:req.body.name,
        avatar:req.body.avatar,
        user:req.body.id
    })
    newPost.save().then(post=>res.json(post));
});