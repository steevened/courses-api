const db = require('../utils/database')
const initModels = require('../models/init.models')
const Users = require('../models/users.models')
const Courses = require('../models/courses.models')
const UserCourses = require('../models/userCourses.model')
const Categories = require('../models/categories.models')
const Videos = require('../models/videos.models')

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

const userCourses = [
  { userId: 1, courseId: 2 },
  { userId: 1, courseId: 1 },
  { userId: 1, courseId: 4 },
  { userId: 2, courseId: 1 },
  { userId: 2, courseId: 4 },
  { userId: 3, courseId: 3 },
  { userId: 3, courseId: 1 },
  { userId: 3, courseId: 4 },
  { userId: 4, courseId: 1 },
  { userId: 4, courseId: 3 },
]

const categories = [
  {
    name: 'frontend',
    courseId: 2,
  },
  {
    name: 'backend',
    courseId: 1,
  },
  {
    name: 'basics',
    courseId: 3,
  },
  {
    name: 'data',
    courseId: 4,
  },
]

const videos = [
  {
    title: 'react from scratch',
    url: 'https://www.youtube.com/watch?v=Iq-sIMjzaWs',
    courseId: 2,
  },
  {
    title: 'api with node and firebase',
    url: 'https://www.youtube.com/watch?v=kh5jSQ8m2tQ&list=RDGMEMJQXQAmqrnmK1SEjY_rKBGAVMkh5jSQ8m2tQ&start_radio=1',
    courseId: 1,
  },
  {
    title: 'javascript basics',
    url: 'https://www.youtube.com/watch?v=k3YsT7IZb6w',
    courseId: 3,
  },
  {
    title: 'data analisys with python',
    url: 'https://www.youtube.com/watch?v=ksbrW7bVEg8&list=RDGMEMJQXQAmqrnmK1SEjY_rKBGAVMkh5jSQ8m2tQ&index=3',
    courseId: 4,
  },
]

db.sync({ force: true })
  .then(() => {
    console.log('seeding')
    users.forEach((user) => Users.create(user))
    setTimeout(() => {
      courses.forEach((course) => Courses.create(course))
    }, 100)
    setTimeout(() => {
      userCourses.forEach((userCourse) => UserCourses.create(userCourse))
    }, 200)
    setTimeout(() => {
      categories.forEach((categorie) => Categories.create(categorie))
    }, 300)
    setTimeout(() => {
      videos.forEach((video) => Videos.create(video))
    }, 400)
  })
  .catch((error) => console.log(error))
