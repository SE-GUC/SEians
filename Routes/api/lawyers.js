
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const mongoose = require('mongoose');

const Lawyer = require('../../Models/lawyer');

router.get('/', (req, res) => {
  Lawyer.find({}, (err, lawyers) => {
    if(!lawyers) lawyers = {};
    if(err)
      res.err({err});
    else
      res.json({data: lawyers});
  });
//  res.send('<h>hi</h>')
});

router.get('/all', async (req,res) => {
 const lawyers = await Lawyer.find()
 res.json({data: lawyers})
})

router.get('/:username', (req, res) => {
    const lawyerid = req.params.username
    Lawyer.findOne({username: lawyerid}, (err, lawyer) => {
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


//view your cases
router.get('/:cases', (req, res) =>{
  const id = req.params.lawyerId
  const cases =  Spc.findOne({id})
  //return lawyer.cases
  res.json({data: cases} )
})

//view case comments
/*router.get('/comments', (req, res) =>{
  const forum = await Spc.findOne({idNumber})
  res.json(data: forum.commsents)
})*/

module.exports = router

