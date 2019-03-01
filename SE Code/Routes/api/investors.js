const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const investor = require('../../models/investor');

const investors = [
    //birth
    //age
    new investor('ahmed','male', 'egyptian', '10/9/1980', 38, '12800910912345','london 2nd floor',
    '011111111111','5678', 'mido@gmail.com', 2000000, 'dollar', ['MicroSoft', 'MMC'], true, 'password'),

    new investor('mohamed', 'male','egyptian', '11/2/1998', 21, '99802112198765',
    'london 2nd floor', '011111111111', '5678', 'm7md@gmail.com', 3000000, 'euro', ['google'], true, '12345678')
];

//creation
router.post('/', (req, res) => {
    const name = req.body.name;
    const sex = req.body.sex;
    const nationality = req.body.nationality;
    const birthDate = req.body.birthDate;
    const age = req.body.age;
    const egID = req.body.egID;
    const address = req.body.address;
    const mobilePhone = req.body.mobilePhone;
    const fax = req.body.fax;
    const email = req.body.email;
    const capital = req.body.capital;
    const currency = req.body.currency;
    const Companies = req.body.Companies;
    const SSC = req.body.SSC;
    const password = req.body.password;

    if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    
    if (!sex) return res.status(400).send({ err: 'Sex field is required' });
    if (typeof sex !== 'string' && (sex != 'male' || sex != 'female')) return res.status(400).send({ err: 'Invalid value for Sex'});
    
    if (!nationality) return res.status(400).send({ err: 'nationality field is required' });
    if (typeof nationality !== 'string') return res.status(400).send({ err: 'Invalid value for nationality'});

    if (!birthDate) return res.status(400).send({ err: 'birthDate field is required' });
    if (typeof birthDate !== 'string') return res.status(400).send({ err: 'Invalid value for birthDate'});

    if (!age) return res.status(400).send({ err: 'age field is required' });
    if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age'});

    if (!egID) return res.status(400).send({ err: 'egID field is required' });
    if (typeof egID !== 'number' && egID.toString() != 14) return res.status(400).send({ err: 'Invalid value for egID'});
    
    if (!address) return res.status(400).send({ err: 'address field is required' });
    if (typeof address !== 'string') return res.status(400).send({ err: 'Invalid value for address' });
    
    if (!mobilePhone) return res.status(400).send({ err: 'mobilePhone field is required' });
    if (typeof mobilePhone !== 'string') return res.status(400).send({ err: 'Invalid value for mobilePhone' });

    if (!fax) return res.status(400).send({ err: 'fax field is required' });
    if (typeof fax !== 'number') return res.status(400).send({ err: 'Invalid value for fax' });
    
    if (!email) return res.status(400).send({ err: 'email field is required' });
    if (typeof email !== 'string') return res.status(400).send({ err: 'Invalid value for email' });
    
    if (!capital) return res.status(400).send({ err: 'capital field is required' });
    if (typeof capital !== 'number') return res.status(400).send({ err: 'Invalid value for capital' });
    if (typeof capital < 50000) return res.status(400).send({ err: 'your capital is not enough' });
    
    if (!currency) return res.status(400).send({ err: 'currency field is required' });
    if (typeof currency !== 'string') return res.status(400).send({ err: 'Invalid value for currency' });
    
    if (!SSC) return res.status(400).send({ err: 'SSC field is required' });
    if (typeof SSC !== 'boolean') return res.status(400).send({ err: 'Invalid value for SSC' });

    //password
    if (!password) return res.status(400).send({ err: 'password field is required' });
    
    const newInvestor = {
        name,
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
		id: uuid.v4(),
	};
    investors.push(newInvestor)
    //return res.json({ data: newInvestor });
    return res.json({investors});
});  


//showing all investors
router.get('/', (request, response) => {
    let data = "";
    investors.forEach((value) => {
        const investor_name = value.name;
        const investor_egID = value.egID;
        data += `<a href="/api/investors/${investor_egID}">${investor_name}</a><br>`;
    });
    response.send(data);
}); 

//showing every investor
router.get('/:egID', (request, response) => {
    var data = "";
    investors.forEach((value) => {
        if(value.egID === request.params.egID) {
            data = `id: ${value.id}<br>Name: ${value.name}<br>sex: ${value.sex}<br>nationality: ${value.nationality}<br>egID: ${value.egID}
            <br>birthDate: ${value.birthDate}<br>age: ${value.age}<br>address: ${value.address}<br>mobilePhone: ${value.mobilePhone}
            <br>fax: ${value.fax}<br>email: ${value.email}<br>capital: ${value.capital}<br>currency: ${value.currency}
            <br>Companies: ${value.Companies}<br>SSC: ${value.SSC}<br>password: ${value.password}`;
            return;
        }
    });
    response.send(data || 'No investor matches the requested egID');
});

//deletion
router.delete('/:egID', (req, res) => {
    const deleted = req.params.egID 
    const investor = investors.find(investor => investor.egID === deleted)
    const index = investors.indexOf(investor)
    users.splice(index,1)
    return res.json({investors});

}); 

module.exports = router;
