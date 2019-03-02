var express = require('express')
const Managers = require('../../Models/Managers');
var router = express.Router();



const managers=[
    new Managers(1,'ahmad','ahmad@gmail.com','test','test','test','test','test','test'),
    new Managers(2,'ahmad','ahmad@gmail.com','test','test','test','test','test','test')
]

//CREATE 

router.post('/creman',(req,res)=>{
    var name= req.body.name
    var type =req.body.type
    var gender =req.body.gender
    var idType = req.body.idType
    var ssn = req.body.ssn
    var nationality = req.body.nationality
    var birthdate= req.body.birthdate
    var rank = req.body.rank
    var address = req.body.address
    
    if(!req.body.name || !req.body.type  || !req.body.ssn  || !req.body.idType || !req.body.birthdate || !req.body.rank 
        || !req.body.address || !req.body.gender  || !req.body.nationality) {
        return res.status(400).send({
            message: "Can't continue with an empty field."
        });
    }
    else{

        if((isNaN(ssn) || name.length>30 ) ){
            return res.status(400).send({
                message: "Please Enter Valid Info About The Admin."
            });
        }
        else{
        var id = managers[managers.length-1].id+1
        var managerToBeAdded = new Managers(id,name,type,gender,nationality,idType,ssn,birthdate,address,rank)
        managers.push(managerToBeAdded)
        return res.status(200).send({
            success: 'true',
            message: 'inserted at last.',
            Name: req.body.name,
            Age: req.body.type ,
            Mail: req.body.gender,
            SSN: req.body.ssn
          });
        }
    }

}
)


//READ
router.get('/getman', (req, res) => res.json({ data: managers}));

//DELETE

router.delete('/delman', (req, res) => {
    var id = req.body.id 
    console.log(id)
    if(!isNaN(id)){
        const found= managers.some(managerfound=>managerfound.id==id);

        if(found){
            const ad = managers.find(managerfound => managerfound.id == id)
            const index = managers.indexOf(ad)
            managers.splice(index,1)
            res.send(managers)
        }else{
            res.status(404).json({err :'id not foeund'});
        }
    
      
    }else{
        res.status(404).json({err :'id not found'});
    }
  
});





module.exports = router;
