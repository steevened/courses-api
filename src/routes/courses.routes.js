const { Router } = require('express')

const {
  getAllCourses,
  getCourseById,
} = require('../controllers/Courses.controller')

const router = Router()

router.get('/courses', getAllCourses)
router.get('/courses/:id', getCourseById)
// router.post('/courses/', createCourse)

module.exports = router
