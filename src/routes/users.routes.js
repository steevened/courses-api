const { Router } = require('express')

const { getAllUsers } = require('../controllers/Users.controller')

const router = Router()

router.get('/users', getAllUsers)

module.exports = router
