const Courses = require('../models/courses.models')
const userCorses = require('../models/userCourses.model')
const Users = require('../models/users.models')

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

  static async createCourse(body, id) {
    try {
      const course = await Courses.create(body)
      await userCorses.create({
        userId: id,
        courseId: course.id,
      })
      return course
    } catch (error) {
      throw error
    }
  }
}

module.exports = CoursesService
