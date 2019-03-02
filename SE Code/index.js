
const express = require('express')


// Require Router Handlers
const Admins = require('./Routes/api/Admins')
const reviewers = require('./Routes/api/reviewers')
const lawyers = require('./Routes/api/lawyers')
const investors = require('./Routes/api/investors')
const Companies= require('./Routes/api/Companies')




const app = express()
app.use(express.json())



    app.get('/', (req, res) => {

   
    `
      
    

      res.send(' <a href="/api/Admins">Admins</a> <br> <a href="/api/reviewers">Reviewers</a> <br> <a href="/api/investors">investors</a> <br><a href="/api/lawyers">lawyers</a><br><a href="/api/Companies">Companies</a> ');

  })
  



// Direct routes to appropriate files 
app.use('/api/Admins', Admins)

app.use('/api/reviewers', reviewers)

app.use('/api/investors', investors)

app.use('/api/lawyers',lawyers)

app.use('/api/Companies',Companies)
// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })


const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
