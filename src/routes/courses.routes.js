const { Router } = require('express')

const {
  getAllCourses,
  getCourseById,
  createCourse,
} = require('../controllers/Courses.controller')

const router = Router()

router.get('/courses', getAllCourses)
router.get('/courses/:id', getCourseById)
router.post('/courses/:id/users', createCourse)

module.exports = router
