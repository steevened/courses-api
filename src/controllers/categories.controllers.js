const CategoriesServices = require('../services/categories.services')

const getAllCategories = async (req, res) => {
  try {
    const result = await CategoriesServices.getAllCategories()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getCategorieById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await CategoriesServices.getCategorieById(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const createCategorie = async (req, res) => {
  const { body } = req
  try {
    const result = await CategoriesServices.createCategorie(body)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { getAllCategories, getCategorieById, createCategorie }
