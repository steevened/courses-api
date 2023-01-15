const Courses = require('../models/courses.models')
const userCorses = require('../models/userCourses.model')
const users = require('../models/users.models')

class UserService {
  static async getAllUsers() {
    try {
      const result = await users.findAll({
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
      const result = await users.findOne({
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

  static async getUserWithCourses(id) {
    try {
      const result = await users.findOne({
        where: { id },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt'],
        },
        include: {
          model: userCorses,
          as: 'course',
          attributes: {
            exclude: [
              'password',
              'createdAt',
              'updatedAt',
              'userId',
              'user_id',
              'course_id',
              'courseId',
            ],
          },
          include: {
            model: Courses,
            as: 'courses',
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt'],
            },
          },
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async createUser(body) {
    try {
      const result = await users.create(body)
      return result
    } catch (error) {
      throw error
    }
  }

  static async updateUser(id, body) {
    try {
      const result = await users.update(body, {
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = UserService
