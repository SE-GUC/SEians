const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const investor = require('../../models/investor');

const investors = [
    new investor('ahmed hassan', 'ahmoda','male', 'egyptian', new Date(1980,9,10) , 38, '12800910912345','el rehab',
    '011111111111','5678', 'mido@gmail.com', 2000000, 'dollar', ['MicroSoft', 'MMC'], true, 'password'),

    new investor('mohamed fawzy','moahmed21', 'male','egyptian', new Date(1998,2,11), 21, '99802112198765',
    'nasr city', '011111111111', '5678', 'm7md@gmail.com', 3000000, 'euro', ['google'], false, '12345678')
];

router.post('/', (req, res) => {
    const name = req.body.name
    const userName = req.body.userName
    const sex = req.body.sex
    const nationality = req.body.nationality
    const egID = req.body.egID
    const birthDate = req.body.birthDate
    const age = req.body.age
    const address = req.body.address
    const mobilePhone = req.body.mobilePhone
    const fax = req.body.fax
    const email = req.body.email
    const capital = req.body.capital
    const currency = req.body.currency
    const Companies = req.body.Companies
    const SSC = req.body.SSC
    const password = req.body.password


	const schema = {
        name: Joi.string().min(2).required(),
        userName: Joi.string().required(),
        sex: Joi.string().required(),
        nationality: Joi.string().required(),
        egID: Joi.number().required(),
        birthDate: Joi.date().required(),
        age: Joi.number().required(),
        address: Joi.string().required(),
        mobilePhone: Joi.string().required(),
        fax: Joi.number().required(),
        email: Joi.string().email().required(),
        capital: Joi.number().required(),
        currency: Joi.string().required(),
        Companies: Joi.array().required(),
        SSC: Joi.boolean().required(),
        password: Joi.required(),   
    }
    const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const found = investors.some(investor => investor.userName === userName)
    const found1 = investors.some(investor => investor.egID === egID)
    const found2 = investors.some(investor => investor.mobilePhone === mobilePhone)
    const found3 = investors.some(investor => investor.fax === fax)
    const found4 = investors.some(investor => investor.email === email)
    const found5 = investors.some(investor => investor.email === email)

    if(found || found1 || found2 || found3 || found4 || found5){
        res.send("review data")
    }
    else{
	
	 const newInvestor = {
        id: uuid.v4(),
        name,
        userName,
        sex,
        nationality,
        egID, 
        birthDate,
        age,
        address, 
        mobilePhone, 
        fax, 
        email, 
        capital, 
        currency, 
        Companies, 
        SSC, 
        password,
    };
    investors.push(newInvestor)
    return res.json({investors});}
});


//showing all investors
router.get('/', (request, response) => {
    let data = "";
    investors.forEach((value) => {
        const investor_name = value.name;
        const investor_userName = value.userName;
        data += `<a href="/api/investors/${investor_userName}">${investor_name}</a><br>`;
    });
    response.send(data);
}); 

//showing every investor
router.get('/:userName', (request, response) => {
    var data = "";
    investors.forEach((value) => {
        if(value.userName === request.params.userName) {
            data = `userName: ${value.userName}<br>Name: ${value.name}<br>sex: ${value.sex}<br>nationality: ${value.nationality}<br>egID: ${value.egID}
            <br>birthDate: ${value.birthDate}<br>age: ${value.age}<br>address: ${value.address}<br>mobilePhone: ${value.mobilePhone}
            <br>fax: ${value.fax}<br>email: ${value.email}<br>capital: ${value.capital}<br>currency: ${value.currency}
            <br>Companies: ${value.Companies}<br>SSC: ${value.SSC}<br>password: ${value.password}`;
            return;
        }
    });
    response.send(data || 'No investor matches the requested userName');
});

//deletion
router.delete('/:userName', (req, res) => {
    const userName = req.params.userName 
    const found = investors.some(investor => investor.userName === userName)
    if(found){
    const investor = investors.find(investor => investor.userName === userName)
    const index = investors.indexOf(investor)
    investors.splice(index,1)
    return res.json({investors});
}
    else{
        res.send('Not found');

    }
}); 

//editing yara
router.put('/:userName',(req,res)=>{
    investors.filter((investor) => {
      if (req.params.userName == investor.userName){
        for(prop in req.body ){
          investor[prop] = req.body[prop];
        }
        res.send(investor);
       }
     }
     )
  });

module.exports = router;
