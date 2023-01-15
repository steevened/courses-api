const CategoriesServices = require('../services/categories.services')

const getAllCategories = async (req, res) => {
  try {
    const result = await CategoriesServices.getAllCategories()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { getAllCategories }
