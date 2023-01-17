const { Router } = require('express')

const {
  getUserCourses,
  postUserCourses,
} = require('../controllers/UserCourse.controller')

const router = Router()

router.get('/usercourses', getUserCourses)
router.post('/usercourses', postUserCourses)

module.exports = router
