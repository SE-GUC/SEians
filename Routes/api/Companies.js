// Dependencies
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


// Models
const Company = require('../../Models/Company');

//Validation
const validator = require('../../validations/companiesValidations')

router.get('/', async (req,res) => {
  const companies = await Company.find()
  res.json({data: companies})
})

router.post('/', async (req,res) => {
  try {
   const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const newCompany = await Company.create(req.body)
   res.json({msg:'Company was created successfully', data: newCompany })
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }
})


router.put('/:name', async (req,res) => {
  try {
   const name = req.params.name
   const company = await Company.findOne({name})
   if(!company) return res.status(404).send({error: 'Company does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedCompany = await Company.updateOne(req.body)
   res.json({msg: 'Company updated successfully'})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }
})

router.delete('/:name', async (req,res) => {
  try {
   const name = req.params.name
   const deletedCompany = await Company.deleteOne({name})
   res.json({msg:'Company was deleted successfully', data: deletedCompany})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }
})


router.get('/:name', async (req,res) => {
    try {
    const name = req.params.name
    const CompanyNeeded = await Company.findOne({name})
    if(!CompanyNeeded) return res.status(404).send({error: 'Company does not exist'})
    res.json({data: CompanyNeeded})
    }
    catch(error) {
        console.log(error)
    }
})


module.exports = router
