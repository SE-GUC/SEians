// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


// Models
const Company = require('../../models/Company');

// temporary data created as if it was pulled out of the database ...
const companies = [
	new Company(11,'www','fff','gffgfg','fhhhfh'),


];

router.get('/',(req, res) => res.json({ data: companies }));

// Create Membec
router.post('/', (req, res) => {
    const newReviewer = {
    id:req.body.id,
    name: req.body.name,
    companyStatus: req.body.companyStatus,
    type: req.body.type,
    owner:req.body.owner,
    };

const schema ={
    id: Joi.number.required(),
    name: Joi.string().min(2).required(),
    companyStatus: Joi.string().min(2).required(),
    type: Joi.string().required(),
    owner:Joi.string().required(),
}

const result= Joi.validate(req.body,schema);
	if(result.error) return res.status(400).send({error:result.error.details[0].message})

    //Taken values restrictions
const found = companies.some(Company => Company.id === (newCompany.id));
	if(found) return res.status(400).json({ msg: 'id Taken' });

const found2 = companies.some(Company => Company.name === (newCompany.name));
	if(found2) return res.status(400).json({ msg: 'Username Taken' });

  if (!newCompany.username || !newCompany.email) {
      return res.status(400).json({ msg: 'Please include your data' });  }

    companies.push(newCompany);
    res.json(companies);}
    // res.redirect('/');
    );

  // Delete Member
router.delete('/:id', (req, res) => {
    const found = companies.some(company => company.id === parseInt(req.params.id));
    const index = companies.indexOf(found);

    if (found) {
      res.json({
        msg: 'company deleted',
        companies: companies.splice(index,1)
      });
    } else {
      res.status(400).json({ msg: `No company with the id of ${req.params.id}` });
    }
  });

// Update Member
router.put('/:id', (req, res) => {
    const found = companies.some(Company => company.id === parseInt(req.params.id));
		companies.filter((company) => {
	if (req.params.userName == company.name){
		for(prop in req.body ){
			investor[prop] = req.body[prop];
		}
		res.send(investor);
	 }
 }
)
  });

// Get Single company
router.get('/:id', (req, res) => {
    const found = companies.some(company => company.id === parseInt(req.params.id));
    if (found) {
      res.json(companies.filter(company => company.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No company with the id of ${req.params.id}` });
    }
  });

	//get all companies
	router.get('/all',(req, res) => res.json({ data: companies }));



module.exports = router;
