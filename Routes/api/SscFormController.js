var express = require('express')
const SscForm = require('../../Models/SscForm');
const validator = require('../../validations/SscFormsValidations')
var router = express.Router();

//inserting a record into the database

router.post('/', (req,res)=>{

    const sscForm = new SscForm({
     name : req.body.name,
     district :req.body.district,
     city:  req.body.city,
     governorate: req.body.governorate,
     companyName :req.body.companyName ,
     gender:req.body.gender ,
     companyNameInArabic: req.body.companyNameInArabic ,
     nationality:req.body.nationality ,
     idType:req.body.idType ,
     idNumber:req.body.idNumber,
     birthDate :req.body.birthDate,
     address:req.body.address,
     telephone :req.body.telephone ,
     fax :req.body.fax ,
     email:req.body.email,
     capital:req.body.capital,
     currency:req.body.currency,
     managers:req.body.managers,
    });

    try{const isValidated = validator.createValidation(req.body)
        if (isValidated.error)
         return res.status(400).send({ 
            error: isValidated.error.details[0].message })
        else
        
        SscForm.create(sscForm).then(result=>{  res.json({msg:'SSC Submitted', data: sscForm})}).
        catch(err=>console.log(err));    
    
    }
    catch(error) {
        console.log(error)
    }  

    
})

//DELETE

router.delete('/:companyName',async (req,res) => {
    try {
     const companyName = req.params.companyName
     const sscFormNeeded = await SscForm.findOne({companyName:companyName})
     console.log(sscFormNeeded)
     if(!sscFormNeeded) return res.status(404).send({error: 'Ssc Form does not exist'})
     const deleted = await  SscForm.deleteOne(sscFormNeeded)
     res.json({msg:'investor was deleted successfully', data: deleted})
    }
    
    catch(error) {
        console.log(error)
    }  
 })

//UPDATE 
//For approval purposes

 router.put('/update', async (req,res) => {
    try {
     var companyName = req.body.companyName
     const sscFormNeeded = await SscForm.findOne({companyName:companyName})
     if(!sscFormNeeded) return res.status(404).send({error: 'SscForm does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updated = await SscForm.updateOne(sscFormNeeded,req.body)
     res.json({msg: 'SSC Form. Updated successfully'})
    }
    catch(error) {
        console.log(error)
    }  
 })



//READ Data based on approval

router.get('/:approval', async (req,res) => {    
    try {
    const approval = req.params.approval
    const sscNeeded = await SscForm.find({approval})
    if(!sscNeeded) return res.status(404).send({error: 'All approved'})
    res.json({data: sscNeeded})
    }
    catch(error) {
        console.log(error)
    } 
})



module.exports = router;
