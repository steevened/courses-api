const { Router } = require('express')
const router = Router()

const {
  getAllCategories,
  getCategorieById,
  createCategorie,
  deleteCategorie,
} = require('../controllers/categories.controllers')

router.get('/categories', getAllCategories)
router.get('/categories/:id', getCategorieById)
router.post('/categories', createCategorie)
router.delete('/categories/:id', deleteCategorie)

module.exports = router
