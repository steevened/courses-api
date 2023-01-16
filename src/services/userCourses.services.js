const userCorses = require('../models/userCourses.model')

class userCorsesServices {
  static async getUserCourses(id) {
    try {
      const result = await userCorses.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'userId', 'courseId'],
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = userCorsesServices
