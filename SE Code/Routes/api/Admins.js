

const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const Admin = require('../../Models/Admin')

var admins = [
    new Admin(1,'ahmad1','mohamed','sayed','sayed@gmail.com',
    43,12385656557098,'male',null,9784536,'october','home4',
    1468,454647684,12323,false),

    new Admin(2,'abdoh6','hamed','saleh','saleh@gmail.com',
    23,12345656557876,'male',null,1754383,'salam','home6',
    1737,487605654,12323,null),

    new Admin(3,'islam10','khaled','ashraf','ashraf@gmail.com',
    23,12345656557123,'male',null,2759034,'tagamo3','home7',
    2354,476645654,12323,null),

    new Admin(4,'usama4','badr','mahmoud','mahmoud@gmail.com',
    23,12345656557156,'male',null,5674536,'ma3ady','home5',
    7644,454643254,12323,null),

    new Admin(5,'ziad33','mahmoud','zakaria','zakaria@gmail.com',
    23,12345656557654,'male',null,3509323,'nasr','home3',
    9867,454648754,12323,null),

    new Admin(6,'wael44','ibrahem','kareem','kareem@gmail.com',
    23,12345656557293,'male',null,1546783,'helwan','home1',
    5647,454645124,12323,null),
    ]


//res.json({ data: admins })
 router.get('/', (req, res) => res.send(' <h>Welcome to the admin page<br> you can view all current admins by adding /all to the url,<br>you can also view or delete aspecific admin by typing his/her id or username<br>Have anice day!</h>'));
 
 //Get all admins
 router.get('/all',(req, res) => res.json({ data: admins }));

//Get Specific Admin

 router.get('/:id',(req,res)=>{
    const name=req.params.id;
    if(isNaN(name)){
        const found= admins.some(adm=>adm.userName===name);
        if(found){
            res.json({admins:admins.filter(admin => admin.userName == name)})
        }else{
            res.status(404).json({err :'username not found '});
        }
    }else{
        const id=req.params.id;
        const found= admins.some(adm=>adm.id==id);
        if(found){
            res.json({admins:admins.filter(admin => admin.id == id)})
        }else{
            res.status(404).json({err :'id not found'});
        }
    }

}
)



//Delete


router.delete('/:id', (req, res) => {
    const admID = req.params.id
    if(!isNaN(admID)){
        const found= admins.some(adm=>adm.id==admID);

        if(found){
            const ad = admins.find(ad => ad.id == admID)
            const index = admins.indexOf(ad)
            admins.splice(index,1)
            res.send(admins)
        }else{
            res.status(404).json({err :'id not found'});
        }


    }else{
        const admName = req.params.id
        console.log('hi')
        const found= admins.some(adm=>adm.userName===admName);

        if(found){
            const ad = admins.find(ad => ad.userName === admName)
            const index = admins.indexOf(ad)
            admins.splice(index,1)
            res.send(admins)
        }else{
            res.status(404).json({err :'username not found '});
        }
    }

});
///////////////////////////////////////////////////////////////////////////

//Create

function createAdmin(req,res){
    var userName= req.body.userName
    var password = req.body.password
    var firstName= req.body.firstName
    var lastName= req.body.lastName
    var gender = req.body.gender
    var salary = req.body.salary
    var phoneNumber = req.body.phoneNumber
    var age =req.body.age
    var email = req.body.email
    var ssn = req.body.ssn
    var fullAccess = req.body.fullAccess
    var fax = req.body.fax
    var workLocation = req.body.workLocation
    var address = req.body.address


    if(!req.body.userName || !req.body.firstName  || !req.body.lastName || !req.body.age || !req.body.email || !req.body.ssn
        || !req.body.password || !req.body.gender || !req.body.salary || !req.body.phoneNumber || !req.body.workLocation || !req.body.address || !req.body.fullAccess ) {
        return res.status(400).send({
            message: "Can't continue with an empty field."
        });
    }
    else{

        var userNameExists = false;
        for(var i =0;i<admins.length;i++){
            if(admins[i].userName==req.body.userName){
                userNameExists=true
                break;
            }
        }

        if((isNaN(age) || isNaN(ssn) || isNaN(salary) || isNaN(phoneNumber) || userName.length>10 || firstName.length>15 || lastName.length>15 ||
        email.length>30) || password.length>30  || userNameExists==true){
            return res.status(400).send({
                message: "Please Enter Valid Info About The Admin."
            });
        }
        else{
        var id = 1 + admins[admins.length-1].id
        var adminToBeAdded = new Admin(id,userName,firstName,lastName,email,age,ssn ,gender, password, workLocation, address, salary, phoneNumber, fax, fullAccess )
        admins.push(adminToBeAdded)
        return res.status(200).send({
            success: 'true',
            message: 'inserted at last.',
            UserName: req.body.userName,
            Age: req.body.age ,
            Mail: req.body.email,
            SSN: req.body.ssn,
            PASS: req.body.password,
            Fax: fax
          });
        }
    }

}


router.post('/create', (req, res) => {
    createAdmin(req,res);
})

//Update

router.put('/updated/:id',function (req,res) {
    const admId=req.params.id
     if(admId.isNaN || admId == null){
       res.status(404).json({err :'id not found'});
     }else{
           const found= admins.some(adm=>adm.id==admId);
           if(found){
             let admi = admins.find(admi => admi.id==admId)
             if(req.body.userName){
               let admUserName=req.body.userName
               admi.userName = admUserName
             }
             if(req.body.firstName ){
               let admFirstName=req.body.firstName
               admi.firstName = admFirstName
             }
             if(req.body.lastName){
               let admLastName=req.body.lastName
               admi.lastName = admLastName
             }
             if(req.body.email){
               let admEmail=req.body.email
               admi.email = admEmail
             }
             if(req.body.age){
               let admAge=req.body.age
               admi.age = admAge
             }
             if(req.body.ssn){
               let admssn=req.body.ssn
               admi.ssn = admssn
             }
             if(req.body.gender){
               let admGender=req.body.gender
               admi.gender = admGender
             }
             if((req.body.fullAccess)||!(req.body.fullAccess)){
               let admIsLogged=req.body.isLogged
               admi.isLogged = admIsLogged
             }
             if(req.body.password){
               let admPassword=req.body.password
               admi.password = admPassword
             }
             if(req.body.location){
               let admLocation=req.body.location
               admi.location = admLocation
             }
             if(req.body.address){
               let admAddress=req.body.address
               admi.address = admAddress
             }
             if(req.body.sallary){
               let admSallary=req.body.sallary
               admi.sallary = admSallary
             }
             if(req.body.phoneNumber){
               let admPhoneNumber=req.body.phoneNumber
               admi.phoneNumber = admPhoneNumber
             }
             if(req.body.fax){
               let admFax=req.body.fax
               admi.fax = admFax
             }
             if((req.body.fullAccess)||!(req.body.fullAccess)){
               let admFullAccess=req.body.fullAccess
               admi.fullAccess = admFullAccess
             }
             res.send(admins)
             }else{
                 res.status(404).json({err :'id not found'});
               }
           }
})



module.exports = router
