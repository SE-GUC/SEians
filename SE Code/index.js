

const express = require('express')


// Require Router Handlers
const Admins = require('./Routes/api/Admins')
const investors = require('./Routes/api/investors')



const app = express()
app.use(express.json())



    app.get('/', (req, res) => {
      res.send(`<a href="/api/Admins">Admins</a> <a href="/api/investors">investors</a>`);
  })
  

// Direct routes to appropriate files 
app.use('/api/Admins', Admins)
app.use('/api/investors', investors)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })


const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
