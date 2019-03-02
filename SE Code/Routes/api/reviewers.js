// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


// Models
const User = require('../../models/Reviewer');

// temporary data created as if it was pulled out of the database ...
const reviewers = [
	new User('Mohamed','Saleh','khalil','thwellah@gmail.com','thwellah','1234',new Date(1996,7,27),'male','cairo',10,'2014',5000,[1,5,8],[2,3],07775000,01055,0)

];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get('/', (req, res) => res.json({ data: reviewers }));

// Create Member
router.post('/', (req, res) => {
    const newReviewer = {
      id:req.body.id,
    firstname: req.body.firstname,
    middlename: req.body.middlename,
    lastname: req.body.lastname,
    email:req.body.email,
    username:req.body.username,
    password:req.body.password,
    birthDate:req.body.birthDate,
    gender:req.body.gender,
    address:req.body.address,
    yearsOfExperience:req.body.yearsOfExperience,
    hiringDate:req.body.hiringDate,
    salary:req.body.salary,
    unfinished:req.body.unfinished,
    finsihed:req.body.finsihed,
    ssn:req.body.ssn,
    phone:req.body.phone

     
    };

    //joi schema
const schema ={
    firstname: Joi.string().min(2).required(),
    middlename: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    email:Joi.string().email().required(),
    username:Joi.string().required(),
    password:Joi.string().required(),
    birthDate:Joi.date().required(),
    gender:Joi.string().required(),
    address:Joi.string().required(),
    yearsOfExperience:Joi.number(),
    hiringDate:Joi.date().required(),
    salary:Joi.number().required(),
    unfinished:Joi.array(),
    finished:Joi.array(),
    ssn:Joi.number().required(),
    phone:Joi.number(),
    id:Joi.number()
}

const result= Joi.validate(req.body,schema);
if(result.error) return res.status(400).send({error:result.error.details[0].message})

    //Taken values restrictions
    const found = reviewers.some(reviewer => reviewer.email === (newReviewer.email));
    if(found){

        return res.status(400).json({ msg: 'Email Taken' });

    } 
     
    const found2 = reviewers.some(reviewer => reviewer.username === (newReviewer.username));
    if(found2){

        return res.status(400).json({ msg: 'Username Taken' });

    } 


    const found3 = reviewers.some(reviewer => reviewer.ssn === (newReviewer.ssn));
    if(found3){

        return res.status(400).json({ msg: 'SSN Taken' });

    } 




  
    if (!newReviewer.username || !newReviewer.email ||!newReviewer.ssn  ) {
      return res.status(400).json({ msg: 'Please include your data' });  }


    reviewers.push(newReviewer);
    res.json(reviewers);}
    // res.redirect('/');
    



    );
  
//

  

// Update Member
router.put('/:id', (req, res) => {
    const found = reviewers.some(reviewer => reviewer.id === parseInt(req.params.id));
  
    if (found) {
      const updReviewer = req.body;
      reviewers.forEach(reviewer => {
        if (reviewer.id === parseInt(req.params.id)) {
          
          reviewer.firstname = updReviewer.firstname ? updReviewer.firstname : reviewer.firstname;
          reviewer.middlename = updReviewer.middlename ? updReviewer.middlename : reviewer.middlename;
          reviewer.lastname = updReviewer.lastname ? updReviewer.lastname : reviewer.lastname;
          reviewer.email = updReviewer.email ? updReviewer.email : reviewer.email;
          reviewer.username = updReviewer.username ? updReviewer.username : reviewer.username;
          reviewer.password = updReviewer.password ? updReviewer.password : reviewer.password;  
          reviewer.birthDate = updReviewer.birthDate ? updReviewer.birthDate : reviewer.birthDate; 
          reviewer.gender = updReviewer.gender ? updReviewer.gender : reviewer.gender; 
          reviewer.address = updReviewer.address ? updReviewer.address : reviewer.address; 
          reviewer.yearsOfExperience = updReviewer.yearsOfExperience ? updReviewer.yearsOfExperience : reviewer.yearsOfExperience; 
          reviewer.hiringDate = updReviewer.hiringDate ? updReviewer.hiringDate : reviewer.hiringDate; 
          reviewer.salary = updReviewer.salary ? updReviewer.salary : reviewer.salary; 
          reviewer.unfinished = updReviewer.unfinished ? updReviewer.unfinished : reviewer.unfinished; 
          reviewer.finsihed = updReviewer.finsihed ? updReviewer.finsihed : reviewer.finsihed;
          reviewer.ssn = updReviewer.ssn ? updReviewer.ssn : reviewer.ssn;
          res.json({ msg: 'Reviewer updated', reviewer });
        }
      });
    } else {
      res.status(400).json({ msg: `No reviewer with the id of ${req.params.id}` });
    }
  });
  
  









// Get Single reviewer
router.get('/:id', (req, res) => {
    const found = reviewers.some(reviewer => reviewer.id === parseInt(req.params.id));
  
    if (found) {
      res.json(reviewers.filter(reviewer => reviewer.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No reviewer with the id of ${req.params.id}` });
    }
  });






  // Delete Member
router.delete('/:id', (req, res) => {
    const found = reviewers.some(reviewer => reviewer.id === parseInt(req.params.id));
    const index = reviewers.indexOf(found);

    if (found) {
      res.json({
        msg: 'reviewers deleted',
        reviewers: reviewers.splice(index,1)
      


      });
    } else {
      res.status(400).json({ msg: `No reviewer with the id of ${req.params.id}` });
    }
  });




module.exports = router;