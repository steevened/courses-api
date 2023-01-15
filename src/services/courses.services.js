const Courses = require('../models/courses.models')
const userCorses = require('../models/userCourses.model')
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')
const Videos = require('../models/videos.models')

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

  static async createCourse(body) {
    try {
      const course = await Courses.create(body)
      return course
    } catch (error) {
      throw error
    }
  }

  static async getWithCategoriesAndVideos(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        include: [
          {
            model: Categories,
            as: 'category',
          },
          {
            model: Videos,
            as: 'video',
          },
        ],
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CoursesService
