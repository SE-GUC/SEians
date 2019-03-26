const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const mongoose = require('mongoose');

const Lawyer = require('../../models/lawyer');

router.get('/', (req, res) => {
  Lawyer.find({}, (err, lawyers) => {
    if(err)
      res.err({err});
    else
      res.json({lawyers});
  });
});

router.get('/:id', (req, res) => {
    const lawyerid = req.params.id
    Lawyer.findOne({id: lawyerid}, (err, lawyer) => {
      if(err)
        res.status(400).json({err});
      else
        res.json({lawyer});
    })
});

router.post('/', (req, res) => {
  const newLawyer = req.body;

	const schema = {
        username: Joi.string().min(3) .required(),
        fullname: Joi.string().min(5) .required(),
        email   : Joi.string().min(10).required(),
		    password: Joi.string().min(6) .required()
      }

	const result = Joi.validate(newLawyer, schema);
	if (result.error)
    return res.status(400).json({ error: result.error.details[0].message });

  Lawyer.findOne({username: req.body.username}, (err, lawyer) => {
    if(lawyer === null){
      Lawyer.create({
        id: uuid.v4(),
        username: newLawyer.username,
        fullname: newLawyer.fullName,
        email: newLawyer.email,
        fullname: newLawyer.fullname,
        password: newLawyer.password
      }, (err, lawyer) => {
        if(err)
          res.status(400).json({err});
        else {
          res.json({lawyer});
        }
      });
    } else
      res.send("review data")
  });
});



router.put('/:username', (req,res)=>{
    Lawyer.findOneAndUpdate({username: req.params.username}, {
      $set: req.body
    }, (err, lawyer) => {
      if(err)
        res.status(400).json({err});
      else {
        res.json({lawyer});
      }
    })
  });

router.delete('/:username', (req, res) => {
    Lawyer.findOneAndDelete({username: req.params.username}, (err, residue) => {
      if(err)
        res.status(400).json({err});
      else {
        res.json({residue});
      }
    })
});

module.exports = router
