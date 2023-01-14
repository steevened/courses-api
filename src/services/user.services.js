const users = require('../models/users.models')

class UserService {
  static async getAllUsers() {
    try {
      const result = users.findAll()
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService
