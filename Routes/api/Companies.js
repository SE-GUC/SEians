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


router.put('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const company = await Company.findOne({id})
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

router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedCompany = await Company.findByIdAndRemove(id)
   res.json({msg:'Company was deleted successfully', data: deletedCompany})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})

router.get('/', async (req,res) => {
  const companies = await Company.find()
  res.json({data: companies})
})




module.exports = router

// Create Membec
// router.post('/', (req, res) => {
//     const newReviewer = {
//     id:req.body.id,
//     name: req.body.name,
//     companyStatus: req.body.companyStatus,
//     type: req.body.type,
//     owner:req.body.owner,
//     };

// const schema ={
//     id: Joi.number.required(),
//     name: Joi.string().min(2).required(),
//     companyStatus: Joi.string().min(2).required(),
//     type: Joi.string().required(),
//     owner:Joi.string().required(),
// }

// const result= Joi.validate(req.body,schema);
// 	if(result.error) return res.status(400).send({error:result.error.details[0].message})

//     //Taken values restrictions
// const found = companies.some(Company => Company.id === (newCompany.id));
// 	if(found) return res.status(400).json({ msg: 'id Taken' });

// const found2 = companies.some(Company => Company.name === (newCompany.name));
// 	if(found2) return res.status(400).json({ msg: 'Username Taken' });

//   if (!newCompany.username || !newCompany.email) {
//       return res.status(400).json({ msg: 'Please include your data' });  }

//     companies.push(newCompany);
//     res.json(companies);}
//     // res.redirect('/');
//     );

//   // Delete Member
// router.delete('/:id', (req, res) => {
//     const found = companies.some(company => company.id === parseInt(req.params.id));
//     const index = companies.indexOf(found);

//     if (found) {
//       res.json({
//         msg: 'company deleted',
//         companies: companies.splice(index,1)
//       });
//     } else {
//       res.status(400).json({ msg: `No company with the id of ${req.params.id}` });
//     }
//   });

// // Update Member
// router.put('/:id', (req, res) => {
//     const found = companies.some(Company => company.id === parseInt(req.params.id));
// 		companies.filter((company) => {
// 	if (req.params.userName == company.name){
// 		for(prop in req.body ){
// 			investor[prop] = req.body[prop];
// 		}
// 		res.send(investor);
// 	 }
//  }
// )
//   });

// // Get Single company
// router.get('/:id', (req, res) => {
//     const found = companies.some(company => company.id === parseInt(req.params.id));
//     if (found) {
//       res.json(companies.filter(company => company.id === parseInt(req.params.id)));
//     } else {
//       res.status(400).json({ msg: `No company with the id of ${req.params.id}` });
//     }
//   });

// 	//get all companies
// 	router.get('/all',(req, res) => res.json({ data: companies }));



// module.exports = router;
