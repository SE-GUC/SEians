
const express = require('express')


const mongoose = require('mongoose')


// Require Router Handlers
const Admins = require('./routes/api/Admins')
const Companies = require('./routes/api/Companies')
const investors = require('./routes/api/investors')

const lawyers = require('./routes/api/lawyers')

const reviewers = require('./routes/api/reviewers')

const app = express()
app.use(express.json())

// DB Config

const db = require('./config/keys').mongoURI
mongoose.set('useNewUrlParser',true)
// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Entry point
app.get('/', (req,res) => res.send(`<h1>SEians</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

// Direct to Route Handlers
app.use('/api/Admins', Admins)
app.use('/api/Companies', Companies)
app.use('/api/investors',investors)
app.use('/api/lawyers', lawyers)
app.use('/api/reviewer', reviewers)

app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))