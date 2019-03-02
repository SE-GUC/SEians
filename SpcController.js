//CREATE
var express = require('express')
const Spc = require('../../Models/Spc');
var router = express.Router();
const spc=[
    new Spc(1,'ahmad','ahmad@gmail.com','test','test','test','test','test','test','test','test',4554,'test','test','test',5454,'test','test','test'),
    new Spc(2,'ahmad','ahmad@gmail.com','test','test','test','test','test','test','test','test',4554,'test','test','test',5454,'test','test','test')
]



router.post('/crespc', (req,res)=>{
    var id = req.body.id
    var companyName =req.body.companyName 
    var companyNameInArabic= req.body.companyNameInArabic 
    var governorate= req.body.governorate
    var city=  req.body.city
    var district =req.body.district
    var telephone =req.body.telephone 
    var fax =req.body.fax 
    var currency=req.body.currency
    var investor=req.body.investor 
    var investorId=req.body.investorId 
    var gender=req.body.gender 
    var nationality=req.body.nationality 
    var idType=req.body.idType 
    var idNumber=req.body.idNumber
    var birthdate =req.body.birthdate
    var address=req.body.address
    var email=req.body.email
    
    if(!req.body.id || !req.body.companyName || !req.body.companyNameInArabic || !req.body.governorate || !req.body.city || !req.body.district || !req.body.telephone || !req.body.fax
        || !req.body.currency || !req.body.investor || !req.body.investorId || !req.body.gender || !req.body.nationality || !req.body.idType || !req.body.idNumber || !req.body.birthdate
        || !req.body.address|| !req.body.email) {
        return res.status(400).send({
            message: "Can't continue with an empty field."
        });
    }
    else{

        if((isNaN(investorId) || isNaN(idNumber) || companyName.length>70 || companyNameInArabic.length>70) ){
            return res.status(400).send({
                message: "Please Enter Valid Info About The SpC Form."
            });
        }
        else{
        var id = 1+ spc[spc.length-1].id
        var spcToBeCreated = new Spc(id,companyName, companyNameInArabic, governorate, city, district, telephone, fax, currency, investor, investorId, gender, nationality, idType, idNumber
            , birthdate, address, email)
        spc.push(spcToBeCreated )
        return res.status(200).send({
            success: 'true',
            message: 'inserted at last.',
            Name: req.body.idNumber,
            Age: req.body.city ,
            Mail: req.body.currency,
            SSN: req.body.email
          });
        }
    }

}
)
//READ


router.get('/getspc', (req, res) => res.json({ data: spc }));






//DELETE

router.delete('/delspc', (req, res) => {
    var id = req.body.id 
    console.log(id)
    if(!isNaN(id)){
        const found= spc.some(spcfound=>spcfound.id==id);

        if(found){
            const ad = spc.find(spcfound => spcfound.id == id)
            const index = spc.indexOf(ad)
            spc.splice(index,1)
            res.send(spc)
        }else{
            res.status(404).json({err :'id not foeund'});
        }
    
      
    }else{
        res.status(404).json({err :'id not found'});
    }
  
});

//UPDATE

router.put('/updspc',function (req,res) {
    const id = req.body.id
    console.log(id)
     if( id == null){
       res.status(404).json({err :'id not found'});
     }else{
           const found= spc.some(spcfound=>spcfound.id==id);
           if(found){
            let admi = spc.find(spcfound => spcfound.id==id)
            approval= req.body.approval
            admi.approval = approval
            res.send(spc)
             }else{
                 res.status(404).json({err :'id not found'});
               }
           }
        }
)





module.exports = router;
