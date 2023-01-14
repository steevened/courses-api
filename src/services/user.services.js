const users = require('../models/users.models')

class UserService {
  static async getAllUsers() {
    try {
      const result = users.findAll({
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getUserbyId(id) {
    try {
      const result = users.findOne({
        where: { id },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService
