const { Router } = require('express')

const {
  getAllCourses,
  getCourseById,
  createCourse,
  getWithCategoriesAndVideos,
} = require('../controllers/Courses.controller')

const router = Router()

router.get('/courses', getAllCourses)
router.get('/courses/:id', getCourseById)
router.get('/courses/:id/categories&videos', getWithCategoriesAndVideos)
router.post('/courses', createCourse)

module.exports = router
