
const express = require('express');
const uuid = require('uuid');
//const bcrypt = require('bcryptjs')
const router = express.Router();

const Admin = require('../../Models/Admin')
const validator = require('../../validations/AdminValidations')
const jwt = require('jsonwebtoken');
const validateLoginInput = require ('../../validations/login');
const keys = require('../../config/keys');



 router.get('/', (req, res) => res.send(' <h>Welcome to the admin page<br> you can view all current admins by adding /all to the url,<br>you can also view or delete aspecific admin by typing his/her username<br>Have anice day!</h>'));
 
//Get all admins
 router.get('/all', async (req,res) => {
  const admins = await Admin.find()
  res.json({data: admins})
})

 


//Get Specific Admin
router.get('/:userName', async (req,res) => {
  const userName=req.params.userName
  const admin = await Admin.findOne({userName})
  if(!admin) return res.status(404).send({error: 'Admin does not exist'})
  res.json({data: admin})
})

//delete Admin
router.delete('/:userName', async (req,res) => {
  try {
    const userName = req.params.userName
    const adminNeeded = await Admin.findOne({userName:userName})
    if(!adminNeeded) return res.status(404).send({error: 'Admin does not exist'})
  //  const index = Admin.indexOf(adminNeeded)
  //  Admin.splice(index,1)
    const deleted = await Admin.deleteOne({userName:adminNeeded.userName})
    res.json({msg: 'Admin deleted successfully', data: adminNeeded})
   }
   catch(error) {
       console.log(error)
   }  
  })
 


//create Admin
router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
  const email = req.body.email
   var admin = await Admin.findOne({email})
  if(admin) return res.status(400).json({error: 'Email already exists'})
 
  const userName = req.body.userName
    admin = await Admin.findOne({userName})
  if(admin) return res.status(400).json({error: 'userName already exists'})
 
  const ssn = req.body.ssn
    admin = await Admin.findOne({ssn})
  if(admin) return res.status(400).json({error: 'ssn already exists'})
  
   const newAdm = await Admin.create(req.body)
   res.json({msg:'Admin was created successfully', data: newAdm})
  }
  catch(error) {
      console.log(error)
  }  
})




//update Admin


router.put('/:userName', async (req,res) => {
  try {
   const userName = req.params.userName
   var adminNeeded = await Admin.findOne({userName})
   if(!adminNeeded) return res.status(404).send({error: 'Admin does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updated = await Admin.updateOne({userName:adminNeeded,userName},req.body)
   adminNeeded = await Admin.findOne({userName})
   res.json({msg: 'Admin updated successfully', data: adminNeeded})
  }
  catch(error) {
      console.log(error)
  }  
})



//Edit my profile
/*
router.put('/updateME/:userName',verifyToken, async (req,res) => {
  
  
  jwt.verify(req.token,'secret',(err,authdata)=>{
    if(!err){
   
      try {

        const userName = req.params.userName
        var adminNeeded =  Admin.findOne({userName})
        if(!adminNeeded) return res.status(404).send({error: 'Admin does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updated =  Admin.updateOne({userName:adminNeeded,userName},req.body)
        adminNeeded =  Admin.findOne({userName})
        res.json({msg: 'Admin updated successfully', data: adminNeeded})
     //   res.sendStatus(200)
        console.log(adminNeeded)
       // authdata
       }
       catch(error) {
           console.log(error)
       }  

   
    }else{
      res.sendStatus(403);

    }
  })
  
})

*/




//LOGINNNNNNNNNNNNNNNNNNNN

router.post('/login',(req,res)=>{

  const {errors,isValid} = validateLoginInput(req.body);

  if(!isValid){
      return res.status(400).json(errors);
  }

   const email = req.body.email;
   const password = req.body.password;

   //find the user by email 
   Admin.findOne({email}).then(Adminl =>{
       // check if the user existed 
       if(!Adminl){
           errors.email='Adminl not found '
           return res.status(404).json(errors);
       }

       //check the password 
  //     bcrypt.compare(password,Adminl.password).then(isMatch=>{
  if(password===Adminl.password) { 
 // if(isMatch){
               //user matched 
               // sign the token 
               //this token must include the data from the user that i need to send back sothat we need to create a paload for that data 
               // and it takes also an expiration means this token is expired after a certain ammount of time  
               const payload = {id:Adminl.id,userName:Adminl.userName,fullAccess:Adminl.fullAccess} 
               //create jwt payload
               //the sign will get the payload and a secret key put in the keys file in config to bring that file in  
               //and bring that key up there 
               
               jwt.sign(payload,
                  keys.secretOrKey,
                  {expiresIn:3600/* an houre is enough to be secure*/},
                  (err,token)=>{
                      res.json({
                          sucess:true,
                          token:token 
                      })//this token will do nothing unless we use the passport autherization to  verify that token or even to make any route private so we implement passport in the index.js 
                       
                  });
           }else{
               errors.password='Password incorrect'
               return res.status(400).json(errors);
           }
      
   })
});




function verifyToken(req,res,next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ');
    const bearerToken =bearer[1];
    req.token=bearerToken;
    next();

  }else{
     res.status(403).send({error: 'Forbidden Access'})  }
}




module.exports = router