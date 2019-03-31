
const express = require('express');
const uuid = require('uuid');
//const bcrypt = require('bcryptjs')
const router = express.Router();

const Admin = require('../../Models/Admin')
const validator = require('../../validations/AdminValidations')


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
    const adminNeeded = await Admin.findOne({userName})
    if(!adminNeeded) return res.status(404).send({error: 'Admin does not exist'})
    const deleted = await Admin.deleteOne(adminNeeded)
    res.json({msg: 'Admin deleted successfully', data: deleted})
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
   const updated = await Admin.updateOne(adminNeeded,req.body)
   adminNeeded = await Admin.findOne({userName})
   res.json({msg: 'Admin updated successfully', data: adminNeeded})
  }
  catch(error) {
      console.log(error)
  }  
})











module.exports = router