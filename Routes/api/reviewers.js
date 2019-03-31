const express = require('express');
const mongoose = require('mongoose')

const router = express.Router();

const Reviewer = require('../../Models/Reviewer');
const validator = require('../../validations/ReviewerValidations')


router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

     const userName = req.body.userName
     var check = await Reviewer.findOne({userName})
     if(check) return res.status(400).send({msg: 'userName is used' })

     const egID = req.body.egID
     check = await Reviewer.findOne({egID})
     if(check) return res.status(400).send({msg: 'egID is used' })

     const mobilePhone = req.body.mobilePhone
     check = await Reviewer.findOne({mobilePhone})
     if(check) return res.status(400).send({msg: 'mobilePhone is used' })

     const fax = req.body.fax
     check = await Reviewer.findOne({fax})
     if(check) return res.status(400).send({msg: 'fax is used' })

     const email = req.body.email
     check = await Reviewer.findOne({email})
     if(check) return res.status(400).send({msg: 'email is used' })

     const newReviewer = await Reviewer.create(req.body)
     res.json({msg:'Reviewer was created successfully', data: newReviewer})
    }
    catch(error) {
        console.log(error)
    }
 })


router.get('/', async (req,res) => {
    const Reviewer = await Reviewer.find()
    res.json({data: Reviewer})
})


router.get('/:userName', async (req,res) => {
    try {
    const userName = req.params.userName
    const Reviewerneeded = await Reviewer.findOne({userName})
    if(!Reviewerneeded) return res.status(404).send({error: 'Reviewer does not exist'})
    res.json({data: Reviewerneeded})
    }
    catch(error) {
        console.log(error)
    }
})


router.delete('/:userName', async (req,res) => {
    try {
     const userName = req.params.userName
     const Reviewerneeded = await Reviewer.findOne({userName})
     if(!Reviewerneeded) return res.status(404).send({error: 'Reviewer does not exist'})
     const deleted = await Reviewer.deleteOne(Reviewerneeded)
     res.json({msg:'Reviewer was deleted successfully', data: deleted})
    }

    catch(error) {
        console.log(error)
    }
 })


router.put('/:userName', async (req,res) => {
    try {
     const userName = req.params.userName
     const Reviewerneeded = await Reviewer.findOne({userName})
     if(!Reviewerneeded) return res.status(404).send({error: 'Reviewer does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updated = await Reviewer.updateOne(Reviewerneeded,req.body)
     res.json({msg: 'Reviewer updated successfully', data: updated})
    }
    catch(error) {
        console.log(error)
    }
 })

 //view unapproved reviws
 router.get('/reviews', (req, res) =>{
   const id = req.params.id
   const reviewer = Spc.findOne({id})
   //return reviewer.unfinisheds
   res.json({data: reviewer.unfinished} )
 })

module.exports = router;
