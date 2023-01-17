const { Router } = require('express')

const {
  getAllCourses,
  getCourseById,
  createCourse,
  getWithCategoriesAndVideos,
  updateCourse,
  getAllCourseRelations,
} = require('../controllers/Courses.controller')

const router = Router()

router.get('/courses', getAllCourses)
router.get('/courses/:id', getCourseById)
router.get('/courses/:id/categories&videos', getWithCategoriesAndVideos)
router.get('/courses-all', getAllCourseRelations)
router.post('/courses', createCourse)
router.put('/courses/:id', updateCourse)

module.exports = router
