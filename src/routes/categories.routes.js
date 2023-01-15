const { Router } = require('express')
const router = Router()

const { getAllCategories } = require('../controllers/categories.controllers')

router.get('/categories', getAllCategories)

module.exports = router
