
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
const models = require('./models')
const bcrypt = require('bcrypt')
const session = require('express-session')
const indexRoutes = require('./routes/index')

const PORT = 3001
const VIEWS_PATH = path.join(__dirname,'/views')

global.__basedir = __dirname
app.use(session({
  secret: 'somesecret',
  resave: true,
  saveUninitialized: false
}))


app.use ('/uploads',express.static('upload'))
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine','mustache')

app.use('/',indexRoutes)

app.listen(PORT,() => console.log('Server is running...'))