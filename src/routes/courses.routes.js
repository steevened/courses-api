const { Router } = require('express')

const {
  getAllCourses,
  getUserById,
} = require('../controllers/Courses.controller')

const router = Router()

router.get('/courses', getAllCourses)
router.get('/courses/:id', getUserById)

module.exports = router
