const db = require('../utils/database')
const initModels = require('../models/init.models')
const Users = require('../models/users.models')

initModels()

const users = [
  {
    firstName: 'Kelvin',
    lastName: 'Meneses',
    password: '1234',
    email: 'kelvin@m.com',
  },
  {
    firstName: 'Paul',
    lastName: 'Ruiz',
    password: '1234',
    email: 'paul@m.com',
  },
  {
    firstName: 'Robert',
    lastName: 'Centeno',
    password: '1234',
    email: 'robert@c.com',
  },
  {
    firstName: 'Diego',
    lastName: 'Garay',
    password: '1234',
    email: 'diego@g.com',
  },
]
db.sync({ force: true })
  .then(() => {
    console.log('seeding')
    users.forEach((user) => Users.create(user))
  })
  .catch((error) => console.log(error))
