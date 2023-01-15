const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/init.models')
const userRoutes = require('./routes/users.routes')
const coursesRoutes = require('./routes/courses.routes')

//
const app = express()
app.use(express.json())

//db connection
db.authenticate()
  .then(() => console.log('Authorized'))
  .catch((error) => console.log(error))

initModels()

db.sync({ force: false })
  .then(() => console.log('db sync ok'))
  .catch((error) => console.log(error))

//routes
app.use('/api/v1', userRoutes)
app.use('/api/v1', coursesRoutes)

//server
const PORT = 8000

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
