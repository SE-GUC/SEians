const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const lawyer = require('../../Models/lawyer')

// temporary data created as if it was pulled out of the database ...
const lawyers = [
    new lawyer( uuid.v4(),'Mahmoud1', 'Mahmoud Hossam Eldin', 'MahmoudHoss@gmail.com','123456'),
    new lawyer( uuid.v4(),'Mahmoud2', 'Mahmoud Hossam Eldin2', 'MahmoudHoss2@gmail.com','123456'),
    new lawyer(uuid.v4(), 'Mahmoud3', 'Mahmoud Hossam Eldin3', 'MahmoudHoss3@gmail.com','123456'),
    new lawyer(uuid.v4(), 'Mahmoud4', 'Mahmoud Hossam Eldin4', 'MahmoudHoss4@gmail.com','123456')
];

////////////

router.get('/', (req, res) => res.json({ data: lawyers }));
router.get('/:username', (req, res) => {
    const lawyerid = req.params.username
    const lawyer = lawyers.find(lawyer => lawyer.username === lawyerid)
    res.send(lawyer)
});

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
//////////////////////////////////////////

// router.put('/:id', (req, res) => {
//     const lawyerid = req.params.id
//     const email = req.body.email
//     const password = req.body.password
//     const lawyer = lawyers.find(lawyer => lawyer.id === lawyerid)
//     if(email)
//         lawyer.email=email
//     if(password)
//         lawyer.password=password
//
//     res.send(lawyers)
// });

////////////////////////////////////////
//////////////////////////////////////


// router.delete('/:username', (req, res) => {
    // const lawyerid = req.params.id
    // const lawyer = lawyers.find(lawyer => lawyer.id === lawyerid)
    // const index = lawyers.indexOf(lawyer)
    // lawyers.splice(index,1)
    // res.send(lawyers)

//     const lawyerUsername = req.params.username
//     if(isNaN(lawyerUsername)){
//         const found= lawyers.some(law=>law.username==lawyerUsername);
//
//         if(found){
//             const law = lawyers.find(law => law.username == lawyerUsername)
//             const index = lawyers.indexOf(law)
//             lawyers.splice(index,1)
//             res.send(lawyers)
//         }else{
//             res.status(404).json({err :'id not found'});
//         }
//
//
//     }
// });

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





module.exports = router
