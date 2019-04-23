const express = require('express');
const mongoose = require('mongoose')

const router = express.Router();

const Lawyer = require('../../Models/Lawyer');
const validator = require('../../validations/LawyerValidations')

//Creating new Lawyer

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     
     const newLawyer = await Lawyer.create(req.body) 
     res.json({msg:'Lawyer was created successfully', data: newLawyer})
    }
    catch(error) {
        console.log(error)
    }  
 })
 


//View all lawyers
router.get('/', async (req,res) => {
     const lawyer = await Lawyer.find()
     res.json({data:lawyer})
})




// Searching for lawyer by Username
router.get('/:username', async (req,res) => {    
    try {
    const username = req.params.username
    const Lawyerneeded = await Lawyer.findOne({username})
    if(!Lawyerneeded) return res.status(404).send({error: 'Lawyer does not exist'})
    res.json({data: Lawyerneeded})
    }
    catch(error) {
        console.log(error)
    } 
})


// Deleteing Lawyer by Username
router.delete('/:username', async (req,res) => {
    try {
     const username = req.params.username
     const Lawyerneeded = await Lawyer.findOne({username})
     if(!Lawyerneeded) return res.status(404).send({error: 'Lawyer does not exist'})
     const deleted = await Lawyer.deleteOne(Lawyerneeded)
     res.json({msg:'Lawyer was deleted successfully', data: deleted})
    }
    
    catch(error) {
        console.log(error)
    }  
 })


 //Updating data by username

router.put('/:username', async (req,res) => {
    try {
     const username = req.params.username
     console.log(username)
     const Lawyerneeded = await Lawyer.findOne({username})
     if(!Lawyerneeded) return res.status(404).send({error: 'Lawyer does not exist'})
     console.log(Lawyerneeded.salary)
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updated = await Lawyer.findOneAndUpdate({username:username},req.body)
     res.json({msg: 'Lawyer updated successfully', data: updated})
    }
    catch(error) {
        console.log(error)
    }  
 });
 router.post('/login', async (req, res) => {
	try {
        const { username,password } = req.body;
        Lawyer = await lawyer.findOne({ username });
        if (!Lawyer) return res.status(404).json({ username: 'username does not exist' });
        
		const match = bcrypt.compareSync(password, Lawyer.password);
		if (match) {
            const payload = {
                id: Lawyer.id,
                username: Lawyer.userName,
                name: Lawyer.name,
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({ data: `Bearer ${token}`, data: 'successful login' })
        }
		else return res.status(400).send({ password: 'Wrong password' });
    } catch (e) {
        res.status(422).send({ error: 'Login failed' });
    }
});

module.exports = router;