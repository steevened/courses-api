const { Router } = require('express')

const { getAllUsers, getUserbyId } = require('../controllers/Users.controller')

const router = Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUserbyId)

module.exports = router
