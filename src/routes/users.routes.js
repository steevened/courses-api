const { Router } = require('express')

const {
  getAllUsers,
  getUserbyId,
  getUserWithCourses,
  createUser,
  updateUser,
} = require('../controllers/Users.controller')

const router = Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUserbyId)
router.get('/users/:id/courses', getUserWithCourses)
router.post('/users', createUser)
router.put('/users/:id', updateUser)

module.exports = router
