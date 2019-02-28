

const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const Admin = require('../../Models/Admin')

 var admins = [
    new Admin(1,'ahmad','ahmad hassan','ahmad@gmail.com',23,1234),
    new Admin(2,'hassan','hassan hussein','hassan@gmail.com',19,2468),
    new Admin(3,'ziad','ziad maged','ziad@gmail.com',17,2222),
    new Admin(4,'ashraf','ashraf karim','ashraf@gmail.com',22,4444)


]



//res.json({ data: admins })
 router.get('/', (req, res) => res.send(' <h>Welcome to the admin page<br> you can view all current admins by adding /all to the url,<br>you can also view or delete aspecific admin by typing his/her id or username<br>Have anice day!</h>'));
 router.get('/all',(req, res) => res.json({ data: admins }));


 router.get('/:id',(req,res)=>{
    const name=req.params.id;
    if(isNaN(name)){
        const found= admins.some(adm=>adm.username===name);
        if(found){
            res.json({admins:admins.filter(admin => admin.username == name)})
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
        const found= admins.some(adm=>adm.username===admName);
    
        if(found){
            const ad = admins.find(ad => ad.username === admName)
            const index = admins.indexOf(ad)
            admins.splice(index,1)
            res.send(admins)
        }else{
            res.status(404).json({err :'username not found '});
        }
    }
  
});



module.exports = router

