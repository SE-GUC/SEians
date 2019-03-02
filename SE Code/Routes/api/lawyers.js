const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const lawyer = require('../../models/lawyer')

// temporary data created as if it was pulled out of the database ...
const lawyers = [
    new lawyer( uuid.v4(),'Mahmoud1', 'Mahmoud Hossam Eldin', 'MahmoudHoss@gmail.com','123456'),
    new lawyer( uuid.v4(),'Mahmoud2', 'Mahmoud Hossam Eldin2', 'MahmoudHoss2@gmail.com','123456'),
    new lawyer(uuid.v4(), 'Mahmoud3', 'Mahmoud Hossam Eldin3', 'MahmoudHoss3@gmail.com','123456'),
    new lawyer(uuid.v4(), 'Mahmoud4', 'Mahmoud Hossam Eldin4', 'MahmoudHoss4@gmail.com','123456')
];

router.get('/', (req, res) => res.json({ data: lawyers }));
router.get('/:id', (req, res) => {
    const lawyerid = req.params.id
    const lawyer = lawyers.find(lawyer => lawyer.id === lawyerid)
    res.send(lawyer)
});
router.delete('/:id', (req, res) => {
    const lawyerid = req.params.id
    const lawyer = lawyers.find(lawyer => lawyer.id === lawyerid)
    const index = lawyers.indexOf(lawyer)
    lawyers.splice(index,1)
    res.send(lawyers)
});
router.put('/:id', (req, res) => {
    const lawyerid = req.params.id 
    const email = req.body.email
    const password = req.body.password
    const lawyer = lawyers.find(lawyer => lawyer.id === lawyerid)
    if(email)
        lawyer.email=email
    if(password)
        lawyer.password=password

    res.send(lawyers)
});

router.post('/joi', (req, res) => {
    const username = req.body.username
    const fullname = req.body.fullname
    const email = req.body.email
    const password = req.body.password

	const schema = {
        username: Joi.string().min(3).required(),
        fullname: Joi.string().min(5).required(),
        email: Joi.string().min(10).required(),
		password: Joi.string().min(6).required()
	}
   
	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newlawyer = {
		id:uuid.v4(),
		username,
        fullname,
        email,
        password
    };
    lawyers.push(newlawyer)
	return res.json({ data: lawyers });
});



module.exports = router