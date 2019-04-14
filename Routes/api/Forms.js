const express = require('express');
//const uuid = require('uuid');
const mongoose = require('mongoose')

const router = express.Router();

const Form = require('../../Models/Form');
const validator = require('../../validations/FormValidations')

//creation
router.post('/createSsc', (req,res)=>{

    const form = new Form({
        name : req.body.name,
        district :req.body.district,
        city:  req.body.city,
        governorate: req.body.governorate,
        companyName :req.body.companyName ,
        gender:req.body.gender ,
        companyNameInArabic: req.body.companyNameInArabic ,
        nationality:req.body.nationality ,
        idType:req.body.idType ,
        investorId:req.body.investorId,
        idNumber:req.body.idNumber,
        birthdate :req.body.birthdate,
        address:req.body.address,
        telephone :req.body.telephone ,
        fax :req.body.fax ,
        email:req.body.email,
        capital:req.body.capital,
        currency:req.body.currency,
        managers:req.body.managers,
        type:'Ssc'
       });
   
       try{const isValidated = validator.createSscValidation(req.body)
           if (isValidated.error)
            return res.status(400).send({ 
               error: isValidated.error.details[0].message })
           else
           Form.create(form).then(result=>{  res.json({msg:'SSC Submitted', data: form})}).
           catch(err=>res.json({msg:'Company Name not Unique'}))    
       
       }
       catch(error) {
           console.log(error)
       }  
   
       
   })
   
   router.post('/createSpc', (req,res)=>{

    const form = new Form({
        name : req.body.name,
        district :req.body.district,
        city:  req.body.city,
        governorate: req.body.governorate,
        companyName :req.body.companyName ,
        gender:req.body.gender ,
        companyNameInArabic: req.body.companyNameInArabic ,
        nationality:req.body.nationality ,
        idType:req.body.idType ,
        idNumber:req.body.idNumber,
        investorId:req.body.investorId,
        birthdate :req.body.birthdate,
        address:req.body.address,
        telephone :req.body.telephone ,
        fax :req.body.fax ,
        email:req.body.email,
        capital:req.body.capital,
        currency:req.body.currency,
        type:'Spc'
       });
   
       try{const isValidated = validator.createSpcValidation(req.body)
           if (isValidated.error)
            return res.status(400).send({ 
               error: isValidated.error.details[0].message })
           else
           Form.create(form).then(result=>{  res.json({msg:'SPC Submitted', data: form})}).
           catch(err=>res.json({msg:'Company Name not Unique'}))    
       
       }
       catch(error) {
           console.log(error)
       }  
   
       
   })
   



//showing all Spcs
router.get('/', async (req,res) => {
    const form = await Form.find()
    res.json({data: form})
})

//showing every Spcs
router.get('/:companyName', async (req,res) => {    
    try {
    const companyName = req.params.companyName
    const formNeeded = await Form.findOne({companyName})
    if(!formNeeded) return res.status(404).send({error: 'Form does not exist'})
    res.json({data: formNeeded})
    }
    catch(error) {
        console.log(error)
    } 
})

//deletion
router.delete('/:companyName', async (req,res) => {
    try {
     const companyName = req.params.companyName
     const form = await Form.findOneAndRemove({companyName})
     if(!form) return res.status(404).send({error: 'Form does not exist'})
     res.json({msg:'Form was deleted successfully', data: form})
    }
    catch(error) {
        console.log(error)
    }  
 })

//editing 
router.put('/:companyName', async (req,res) => {
    try {
     const companyName = req.params.companyName
     const form = await Form.findOneAndUpdate({companyName},req.body)
     res.json({msg: 'Form updated successfully', data: form})
    }
    catch(error) {
        console.log(error)
    }  
 })

module.exports = router;