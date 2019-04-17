const express = require('express');
const mongoose = require('mongoose')

const router = express.Router();

const Reviewer = require('../../Models/Reviewer');
const validator = require('../../validations/ReviewerValidations')


// INSERTING A RECORD INTO THE Reviewer Collection

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     
     const newReviewer = await Reviewer.create(req.body) 
     res.json({msg:'Reviewer was created successfully', data: newReviewer})
    }
    catch(error) {
        console.log(error)
    }  
 })
 


 //Showing Reviewer Collection Entries
router.get('/', async (req,res) => {
     const rev = await Reviewer.find()
     res.json({data:rev})
   // console.log("test")
})




// Searching by UserName
router.get('/:username', async (req,res) => {    
    try {
    const username = req.params.username
    const Reviewerneeded = await Reviewer.findOne({username})
    if(!Reviewerneeded) return res.status(404).send({error: 'Reviewer does not exist'})
    res.json({data: Reviewerneeded})
    }
    catch(error) {
        console.log(error)
    } 
})


// Deleteing by UserName
router.delete('/:username', async (req,res) => {
    try {
     const username = req.params.username
     const Reviewerneeded = await Reviewer.findOne({username})
     if(!Reviewerneeded) return res.status(404).send({error: 'Reviewer does not exist'})
     const deleted = await Reviewer.deleteOne(Reviewerneeded)
     res.json({msg:'Reviewer was deleted successfully', data: deleted})
    }
    
    catch(error) {
        console.log(error)
    }  
 })


 //Updating by UserName According to the validations.

router.put('/:username', async (req,res) => {
    try {
     const username = req.params.username
     console.log(username)
     const Reviewerneeded = await Reviewer.findOne({username})
     if(!Reviewerneeded) return res.status(404).send({error: 'Reviewer does not exist'})
     console.log(Reviewerneeded.salary)
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updated = await Reviewer.findOneAndUpdate({username:username},req.body)
     res.json({msg: 'Reviewer updated successfully', data: updated})
    }
    catch(error) {
        console.log(error)
    }  
 });
 router.post('/login', async (req, res) => {
	try {
        const { username,password } = req.body;
        Reviewer = await reviewer.findOne({ username });
        if (!Reviewer) return res.status(404).json({ username: 'username does not exist' });
        
		const match = bcrypt.compareSync(password, Reviewer.password);
		if (match) {
            const payload = {
                id: Reviewer.id,
                username: Reviewer.userName,
                name: Reviewer.name,
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