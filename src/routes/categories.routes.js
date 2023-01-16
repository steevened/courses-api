const { Router } = require('express')
const router = Router()

const {
  getAllCategories,
  getCategorieById,
  createCategorie,
} = require('../controllers/categories.controllers')

router.get('/categories', getAllCategories)
router.get('/categories/:id', getCategorieById)
router.post('/categories', createCategorie)

module.exports = router
