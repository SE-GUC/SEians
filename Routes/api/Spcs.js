const express = require('express');
//const uuid = require('uuid');
const mongoose = require('mongoose')

const router = express.Router();

const Spcs = require('../../Models/Spc');
const validator = require('../../validations/SpcValidations')

//creation
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

     const companyName = req.body.companyName
     var check = await Spcs.findOne({companyName})
     if(check) return res.status(400).send({msg: 'companyName is used' })

     const companyNameInArabic = req.body.companyNameInArabic
     check = await Spcs.findOne({companyNameInArabic})
     if(check) return res.status(400).send({msg: 'companyNameInArabic is used' })

     const telephone = req.body.telephone
     check = await Spcs.findOne({telephone})
     if(check) return res.status(400).send({msg: 'telephone is used' })

     const fax = req.body.fax
     check = await Spcs.findOne({fax})
     if(check) return res.status(400).send({msg: 'fax is used' })

     const email = req.body.email
     check = await Spcs.findOne({email})
     if(check) return res.status(400).send({msg: 'email is used' })

     const idNumber = req.body.idNumber
     check = await Spcs.findOne({idNumber})
     if(check) return res.status(400).send({msg: 'idNumber is used' })
     const newSpc = await Spcs.create(req.body)
     res.json({msg:'Spc was created successfully', data: newSpc})
    }
    catch(error) {
        console.log(error)
    }
 })

//showing all Spcs
router.get('/', async (req,res) => {
    const Spcget = await Spcs.find()
    res.json({data: Spcget})
})

//showing every Spcs
router.get('/:investorId', async (req,res) => {
    try {
    const investorId = req.params.investorId
    const Spcsneeded = await Spcs.findOne({investorId})
    if(!Spcsneeded) return res.status(404).send({error: 'Spc does not exist'})
    res.json({data: Spcsneeded})
    }
    catch(error) {
        console.log(error)
    }
})

//deletion
router.delete('/:investorId', async (req,res) => {
    try {
     const investorId = req.params.investorId
     const Spcsneeded = await Spcs.findOne({investorId})
     if(!Spcsneeded) return res.status(404).send({error: 'Spcs does not exist'})
     const deleted = await Spcs.deleteOne(Spcsneeded)
     res.json({msg:'Spc was deleted successfully', data: deleted})
     const Spcget = await Spcs.find()
     res.json({msg:'Spc was deleted successfully', data: Spcget})
    }

    catch(error) {
        console.log(error)
    }
 })

//editing
router.put('/:investorId', async (req,res) => {
    try {
     const investorId = req.params.investorId
     const Spcsneeded = await Spcs.findOne({investorId})
     if(!Spcsneeded) return res.status(404).send({error: 'Spc does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updated = await Spcs.updateOne(Spcsneeded,req.body)
     res.json({msg: 'Spc updated successfully', data: updated})
     const Spcsneeded1 = await Spcs.findOne({investorId})

     res.json({msg: 'Spc updated successfully', data: Spcsneeded1})
    }
    catch(error) {
        console.log(error)
    }
 })

module.exports = router;
