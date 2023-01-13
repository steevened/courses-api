const db = require('../utils/database')
const initModels = require('../models/init.models')
const Users = require('../models/users.models')
const Courses = require('../models/courses.models')

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

const courses = [
  {
    title: 'nodejs',
    description: 'last course',
    instructor: 'Rosas',
  },
  {
    title: 'react',
    description: 'front course',
    instructor: 'Andres',
  },
  {
    title: 'foundations',
    description: 'first course',
    instructor: 'Rosas',
  },
  {
    title: 'python',
    description: 'post course',
    instructor: 'unknown',
  },
]

db.sync({ force: true })
  .then(() => {
    console.log('seeding')
    users.forEach((user) => Users.create(user))
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course))
    }, 100)
  })
  .catch((error) => console.log(error))
