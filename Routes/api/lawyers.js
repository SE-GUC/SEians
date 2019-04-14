const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const keys = require('../../config/keys');
const lawyer = require('../../Models/lawyer')
const Case = require('../../Models/Case')
const bcrypt = require('bcryptjs');//to encrypt the password 
const jwt = require('jsonwebtoken');
const validateRegisterInput = require ('../../validations/register');
const validateLoginInput = require ('../../validations/login');
const passport = require('passport');
const lawyerpassport = require('passport');

// temporary data created as if it was pulled out of the database ...
// const lawyers = [
//     new lawyer( uuid.v4(),'Mahmoud1', 'Mahmoud Hossam Eldin', 'MahmoudHoss@gmail.com','123456'),
//     new lawyer( uuid.v4(),'Mahmoud2', 'Mahmoud Hossam Eldin2', 'MahmoudHoss2@gmail.com','123456'),
//     new lawyer(uuid.v4(), 'Mahmoud3', 'Mahmoud Hossam Eldin3', 'MahmoudHoss3@gmail.com','123456'),
//     new lawyer(uuid.v4(), 'Mahmoud4', 'Mahmoud Hossam Eldin4', 'MahmoudHoss4@gmail.com','123456')
// ];

////////////
//showing the lawyer cases
router.put('/cases/:caseDate',(req,res)=>{
  Case.findOne({caseDate:req.body.caseDate}).then(casedate =>{
    if(casedate){
      return res.json(Case)
    }else{
      return res.json({err:'no such a case'})
    }

  })
})



////////////////////////////////////////////
// router.get('/', (req, res) => res.json({ data: lawyers }));
// router.get('/:username', (req, res) => {
//     const lawyerid = req.params.username
//     const lawyer = lawyer.findOne(lawyer => lawyer.username === lawyerid)
//     res.send(lawyer)
// });   /// to be edited with mongoooo 




/////////////////////////////////////////
////////////////////////////////////////

router.post('/joi', (req, res) => {
    const username = req.body.username
    const fullname = req.body.fullname
    const email    = req.body.email
    const password = req.body.password

	const schema = {
        username: Joi.string().min(3) .required(),
        fullname: Joi.string().min(5) .required(),
        email   : Joi.string().min(10).required(),
		    password: Joi.string().min(6) .required()
      }

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

  const found = lawyers.some(lawyer => lawyer.username == username)

  if(found){
    res.send("review data")

  }else{

    const newlawyer = {
      id:uuid.v4(),

          username,
          fullname,
          email,
          password
       }
       lawyers.push(newlawyer)
       return res.json({ data: lawyers });
  }

function calculate(law,company,capital){
  var cal;
  if(company === "GAVI"){
    if(law === 159)cal = capital/1000;
    if(law === 72) cal = 0;
  }
  if(company === "Notary bublic"){
    if(law === 159) cal = capital/4;
    if(law === 72) cal = 0;
  }
  if(company === "Commercial Register"){
    if(law === 159)cal = 56;
    if(law === 72) cal = 106;
  }
  return cal;

}
function recalculate(law,company,capital){
  calculate(law,company,capital)
}











});

//register
router.post('/register',(req,res)=>{

  // const {errors,isValid} = validateRegisterInput(req.body);

  // if(!isValid){
  //     return res.status(400).json(errors);
  // }

  
  
  lawyer.findOne({email: req.body.email}).then(lawyerl =>{

      if(lawyerl){
          return res.status(400).json({email:'Email is already existed '});
      }else{
          // const avatar =gravatar.url(req.body.email,{
          //     s: '200',//size,
          //     r:'pg',//rating
          //     d:'mm'//Default
          // });
          const newlawyer = new lawyer ({
              name:req.body.name,
              email:req.body.email,
              // avatar,
              password:req.body.password
              
      });
      bcrypt.genSalt(10,(err,salt)=> {
          bcrypt.hash(newlawyer.password,salt,(err,hash)=>{
              if(err) throw err ;
              newlawyer.password=hash;
              newlawyer.save()
              .then(lawyer => res.json(lawyer)).catch(err =>console.log(err)) 
          })
      })
  
      }   
      
  })
  
})


//LOGINNNNNNNNNNNNNNNNNNNN

router.post('/login',(req,res)=>{

  // const {errors,isValid} = validateLoginInput(req.body);

  // if(!isValid){
  //     return res.status(400).json(errors);
  // }

   const email = req.body.email;
   const password = req.body.password;

   //find the user by email 
   lawyer.findOne({email}).then(lawyerl =>{
       // check if the user existed 
       if(!lawyerl){
           errors.email='lawyerl not found '
           return res.status(404).json(errors);
       }
       //check the password 
       bcrypt.compare(password,lawyerl.password).then(isMatch=>{
           if(isMatch){
               //user matched 

               // sign the token 
               //this token must include the data from the user that i need to send back sothat we need to create a paload for that data 
               // and it takes also an expiration means this token is expired after a certain ammount of time  
               const payload = {id:lawyerl.id,name:lawyerl.name,avatar:lawyerl.avatar}  //create jwt payload
               //the sign will get the payload and a secret key put in the keys file in config to bring that file in  
               //and bring that key up there 
               jwt.sign(payload,
                  keys.secretOrKey,
                  {expiresIn:3600/* an houre is enough to be secure*/},
                  (err,token)=>{
                      res.json({
                          sucess:true,
                          token:'Bearer '+token 
                      })//this token will do nothing unless we use the passport autherization to  verify that token or even to make any route private so we implement passport in the index.js 
                       
                  });
           }else{
               errors.password='Password incorrect'
               return res.status(400).json(errors);
           }
       })
   })
});

//@route  Get api/users/current
//@desc  return the current user a protecte route  
//@access private 
// we will treate it like any route except it is protected 







router.put('/:username',(req,res)=>{
    lawyers.filter((lawyer) => {
      if (req.params.username == lawyer.username){
        for(prop in req.body ){
          lawyer[prop] = req.body[prop];
        }
        res.send(lawyer);
       }
     }
     )
  });
/////////////////////////////////////


//////////////////////////////

router.delete('/:username', (req, res) => {
    const username = req.params.username
    const found = lawyers.some(lawyer => lawyer.username === username)
    if(found){
    const lawyer = lawyers.find(lawyer => lawyer.username === username)
    const index = lawyers.indexOf(lawyer)
    lawyers.splice(index,1)
    return res.json({lawyers});
}
    else{
        res.send('Not found');

    }
});

// getting the current user it is an important move actually 
router.get('/current',passport.authenticate('jwt',{session:false}),(req,res)=>{
  res.json({
    id:req.user.id,
    name:req.user.name,
    email:req.user.email
  })
});





module.exports = router
