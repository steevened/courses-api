const { Router } = require('express')

const { getUserCourses } = require('../controllers/UserCourse.controller')

const router = Router()

router.get('/user-courses', getUserCourses)

module.exports = router
