const Courses = require('../models/courses.models')

class CoursesService {
  static async getAllCourses() {
    try {
      const result = await Courses.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getCourseById(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CoursesService
