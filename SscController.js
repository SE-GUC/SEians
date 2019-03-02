var express = require('express')
const Ssc = require('../../Models/Ssc');
var router = express.Router();
///CREATE




const ssc=[
    new Ssc(1,'ahmad','ahmad@gmail.com','test','test','test','test','test','test','test','test',4554,'test','test','test',5454,'test','test','test','test',false),
    new Ssc(2,'ahmad','ahmad@gmail.com','test','test','test','test','test','test','test','test',4554,'test','test','test',5454,'test','test','test','test',false)
]




router.post('/cre', (req,res)=>{
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
    var managers = req.body.managers
    
    if(!req.body.id || !req.body.companyName || !req.body.companyNameInArabic || !req.body.governorate || !req.body.city || !req.body.district || !req.body.telephone || !req.body.fax
        || !req.body.currency || !req.body.investor || !req.body.investorId || !req.body.gender || !req.body.nationality || !req.body.idType || !req.body.idNumber || !req.body.birthdate
        || !req.body.address|| !req.body.email || !req.body.managers) {
        return res.status(400).send({
            message: "Can't continue with an empty field."
        });
    }
    else{

        if((isNaN(investorId) || isNaN(idNumber) || companyName.length>70 || companyNameInArabic.length>70) ){
            return res.status(400).send({
                message: "Please Enter Valid Info About The SSC Form."
            });
        }
        else{
        var id = 1+ ssc[ssc.length-1].id
        var sscToBeCreated = new Ssc(id,companyName, companyNameInArabic, governorate, city, district, telephone, fax, currency, investor, investorId, gender, nationality, idType, idNumber
            , birthdate, address, email, managers)
        ssc.push(sscToBeCreated)
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

//DELETE
router.delete('/del', (req, res) => {
    var id = req.body.id 
    console.log(id)
    if(!isNaN(id)){
        const found= ssc.some(sscfound=>sscfound.id==id);

        if(found){
            const ad = ssc.find(sscfound => sscfound.id == id)
            const index = ssc.indexOf(ad)
            ssc.splice(index,1)
            res.send(ssc)
        }else{
            res.status(404).json({err :'id not foeund'});
        }
    
      
    }else{
        res.status(404).json({err :'id not found'});
    }
  
});

//UPDATE



router.put('/upd',function (req,res) {
    const id = req.body.id
    console.log(id)
     if( id == null){
       res.status(404).json({err :'id not found'});
     }else{
           const found= ssc.some(sscfound=>sscfound.id==id);
           if(found){
            let admi = ssc.find(sscfound => sscfound.id==id)
            approval= req.body.approval
            admi.approval = approval
            res.send(ssc)
             }else{
                 res.status(404).json({err :'id not found'});
               }
           }
        }
)




//READ

router.get('/rea', (req, res) => res.json({ data: ssc }));








module.exports = router;
