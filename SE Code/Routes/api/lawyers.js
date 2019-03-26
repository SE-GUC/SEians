const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const mongoose = require('mongoose');

const lawyer = require('../../models/lawyer');

router.get('/', (req, res) => {
  res.json({message: 'hey'})
});

router.get('/:username', (req, res) => {
    const lawyerid = req.params.username
    const lawyer = lawyers.find(lawyer => lawyer.username === lawyerid)
    res.send(lawyer)
});

router.post('/joi', (req, res) => {
    const username = req.body.username
    const fullname = req.body.fullname
    const email    = req.body.email
    const password = req.body.password

	const schema = {
        username: Joi.string().min(3) .required(),
        fullname: Joi.string().min(5) .required(),
        email   : Joi.string().min(10).required(),
		    password: Joi.string().min(6) .required()
      }

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

  const found = lawyers.some(lawyer => lawyer.username == username)

  if(found){
    res.send("review data")

  }else{

    const newlawyer = {
      id:uuid.v4(),

          username,
          fullname,
          email,
          password
       }
       lawyers.push(newlawyer)
       return res.json({ data: lawyers });
  }
});



router.put('/:username',(req,res)=>{
    lawyers.filter((lawyer) => {
      if (req.params.username == lawyer.username){
        for(prop in req.body ){
          lawyer[prop] = req.body[prop];
        }
        res.send(lawyer);
       }
     }
     )
  });

router.delete('/:username', (req, res) => {
    const username = req.params.username
    const found = lawyers.some(lawyer => lawyer.username === username)
    if(found){
    const lawyer = lawyers.find(lawyer => lawyer.username === username)
    const index = lawyers.indexOf(lawyer)
    lawyers.splice(index,1)
    return res.json({lawyers});
}
    else{
        res.send('Not found');
    }
});

module.exports = router
