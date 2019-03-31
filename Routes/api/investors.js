const express = require('express');
//const uuid = require('uuid');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey


const router = express.Router();

const investor = require('../../Models/investor');
const validator = require('../../validations/investorValidations')

//creation
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     
     const userName = req.body.userName
     var check = await investor.findOne({userName})
     if(check) return res.status(400).send({msg: 'userName is used' })

     const egID = req.body.egID
     check = await investor.findOne({egID})
     if(check) return res.status(400).send({msg: 'egID is used' })

     const mobilePhone = req.body.mobilePhone
     check = await investor.findOne({mobilePhone})
     if(check) return res.status(400).send({msg: 'mobilePhone is used' })

     const fax = req.body.fax
     check = await investor.findOne({fax})
     if(check) return res.status(400).send({msg: 'fax is used' })

     const email = req.body.email
     check = await investor.findOne({email})
     if(check) return res.status(400).send({msg: 'email is used' })

     const newInvestor = await investor.create(req.body) 
     res.json({msg:'Investor was created successfully', data: newInvestor})
    }
    catch(error) {
        console.log(error)
    }  
 })
 
//showing all investors
router.get('/', async (req,res) => {
    const investors = await investor.find()
    res.json({data: investors})
})

//showing every investor
router.get('/:userName', async (req,res) => {    
    try {
    const userName = req.params.userName
    const investorneeded = await investor.findOne({userName})
    if(!investorneeded) return res.status(404).send({error: 'investor does not exist'})
    res.json({data: investorneeded})
    }
    catch(error) {
        console.log(error)
    } 
})

//deletion
router.delete('/:userName', async (req,res) => {
    try {
     const userName = req.params.userName
     const investorneeded = await investor.findOne({userName})
     if(!investorneeded) return res.status(404).send({error: 'investor does not exist'})
     const deleted = await investor.deleteOne(investorneeded)
     const investors = await investor.find()
     res.json({msg:'investor was deleted successfully', data: investors})
    }
    catch(error) {
        console.log(error)
    }  
 })

//editing 
router.put('/:userName', async (req,res) => {
    try {
     const userName = req.params.userName
     const investorneeded = await investor.findOne({userName})
     if(!investorneeded) return res.status(404).send({error: 'investor does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updated = await investor.updateOne(investorneeded,req.body)
     const investorneeded1 = await investor.findOne({userName})
     res.json({msg: 'investor updated successfully', data: investorneeded1})
    }
    catch(error) {
        console.log(error)
    }  
    


 })

 //register investor

 router.post('/register', async (req, res) => {
	try {
		const isValidated = validator.createValidation(req.body);
		if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
        const { name , userName, gender , nationality ,birthDate ,age , egID ,
             address, mobilePhone,fax, email,capital, currency, Companies, SSC, password } = req.body;
        //unique attributes
        var check = await investor.findOne({userName})
        if(check) return res.status(400).send({msg: 'userName is used' })

        check = await investor.findOne({egID})
        if(check) return res.status(400).send({msg: 'egID is used' })

        check = await investor.findOne({mobilePhone})
        if(check) return res.status(400).send({msg: 'mobilePhone is used' })

        check = await investor.findOne({fax})
        if(check) return res.status(400).send({msg: 'fax is used' })

        check = await investor.findOne({email})
        if(check) return res.status(400).send({msg: 'email is used' })

		const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
		const newInvestor = new investor({
			name ,
            userName,
            gender ,
            nationality ,
            birthDate ,
            age ,
            egID ,
            address,
            mobilePhone ,
            fax,
            email,
            capital,
            currency,
            Companies,
            SSC,
            password : hashedPassword 
        });
		await investor.create(newInvestor);
		res.json({ msg: 'Investor registered successfully', data: newInvestor });
	} catch (error) {
		res.status(422).send({ error: 'Can not register Investor' });
	}
});

// login investor 
router.post('/login', async (req, res) => {
	try {
        const { userName, email, password } = req.body;
        //finding investor
		var Investor = await investor.findOne({ email });
        if (!Investor) return res.status(404).json({ email: 'Email does not exist' });
        Investor = await investor.findOne({ userName });
        if (!Investor) return res.status(404).json({ userName: 'userName does not exist' });
        
		const match = bcrypt.compareSync(password, Investor.password);
		if (match) {
            const payload = {
                id: Investor.id,
                userName: Investor.userName,
                name: Investor.name,
                email: Investor.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            //res.json({data: `Bearer ${token}`})
            return res.json({ data: 'successful login' })
        }
		else return res.status(400).send({ password: 'Wrong password' });
    } catch (e) {
        res.status(422).send({ error: 'Login failed' });
    }
});
module.exports = router;
