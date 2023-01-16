const Categories = require('../models/categories.models')

class CategoriesServices {
  static async getAllCategories() {
    try {
      const result = Categories.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async getCategorieById(id) {
    try {
      const result = Categories.findOne({
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async createCategorie(body) {
    try {
      const result = Categories.create(body)
      return result
    } catch (error) {
      throw error
    }
  }

  static async deleteCategorie(id) {
    try {
      const result = await Categories.destroy({
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CategoriesServices
