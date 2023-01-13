const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/init.models')

//
const app = express()

//db connection
db.authenticate()
  .then(() => console.log('Authorized'))
  .catch((error) => console.log(error))

initModels()

db.sync()
  .then(() => console.log('db sync ok'))
  .catch((error) => console.log(error))

//server
const PORT = 8000

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
