
const express = require('express');
//const uuid = require('uuid');
const mongoose = require('mongoose')

const router = express.Router();

const investor = require('../../Models/investor');
const validator = require('../../validations/investorValidations')

//creation
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

     const userName = req.body.userName
     var check = await investor.findOne({userName})
     if(check) return res.status(400).send({msg: 'userName is used' })

     const egID = req.body.egID
     check = await investor.findOne({egID})
     if(check) return res.status(400).send({msg: 'egID is used' })

     const mobilePhone = req.body.mobilePhone
     check = await investor.findOne({mobilePhone})
     if(check) return res.status(400).send({msg: 'mobilePhone is used' })

     const fax = req.body.fax
     check = await investor.findOne({fax})
     if(check) return res.status(400).send({msg: 'fax is used' })

     const email = req.body.email
     check = await investor.findOne({email})
     if(check) return res.status(400).send({msg: 'email is used' })

     const newInvestor = await investor.create(req.body)
     res.json({msg:'Investor was created successfully', data: newInvestor})
    }
    catch(error) {
        console.log(error)
    }
 })

//showing all investors
router.get('/', async (req,res) => {
    const investors = await investor.find()
    res.json({data: investors})
})

//showing every investor
router.get('/:userName', async (req,res) => {
    try {
    const userName = req.params.userName
    const investorneeded = await investor.findOne({userName})
    if(!investorneeded) return res.status(404).send({error: 'investor does not exist'})
    res.json({data: investorneeded})
    }
    catch(error) {
        console.log(error)
    }
})

//deletion
router.delete('/:userName', async (req,res) => {
    try {
     const userName = req.params.userName
     const investorneeded = await investor.findOne({userName})
     if(!investorneeded) return res.status(404).send({error: 'investor does not exist'})
     const deleted = await investor.deleteOne(investorneeded)
     res.json({msg:'investor was deleted successfully', data: deleted})
    }

    catch(error) {
        console.log(error)
    }
 })

//editing
router.put('/:userName', async (req,res) => {
    try {
     const userName = req.params.userName
     const investorneeded = await investor.findOne({userName})
     if(!investorneeded) return res.status(404).send({error: 'investor does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updated = await investor.updateOne(investorneeded,req.body)
     res.json({msg: 'investor updated successfully', data: updated})
    }
    catch(error) {
        console.log(error)
    }
 })

 //track state of requests
 router.get('/:req', async (req, res) =>{
   const requests =  Spc.filter(x => x.idNumber === id)
   const status = requests.reviewerApproval
   //return requests
   res.json({data: status} )
 })

module.exports = router;

