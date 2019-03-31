

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Require Router Handlers
const Admins = require('./Routes/api/Admins')
const reviewers = require('./Routes/api/reviewers')
const lawyers = require('./Routes/api/lawyers')
const investors = require('./Routes/api/investors')
const Companies= require('./Routes/api/Companies')
const Spcs = require('./Routes/api/Spcs')


const app = express()

const {
  PORT = 7000,
  MONGO_DNS_SRV,
  MONGO_AUTH,
  MONGO_CLUSTER,
  MONGO_DB_NAME,
  MONGO_OPTIONS
} = process.env

  
    mongoose.connect(`${MONGO_DNS_SRV}${MONGO_AUTH}${MONGO_CLUSTER}${MONGO_DB_NAME}${MONGO_OPTIONS}`, {
      useNewUrlParser: true
    })
  
    app.use(express.json())


    app.use(express.urlencoded({extended: false}))
    app.use(cors())





app.get('/', (req, res) => {


      res.send(' <a href="/api/Spcs">Spcs</a> <br><a href="/api/Admins">Admins</a> <br> <a href="/api/reviewers">Reviewers</a> <br> <a href="/api/investors">investors</a> <br><a href="/api/lawyers">lawyers</a><br><a href="/api/Companies">Companies</a> ');

  })
  





app.use('/api/Spcs',Spcs)





app.use('/api/Admins', Admins)
app.use('/api/Companies', Companies)
app.use('/api/investors',investors)
app.use('/api/lawyers', lawyers)
app.use('/api/reviewer', reviewers)

app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
