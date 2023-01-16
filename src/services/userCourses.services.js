const Courses = require('../models/courses.models')
const userCorses = require('../models/userCourses.model')
const Users = require('../models/users.models')

class userCorsesServices {
  static async getUserCourses(id) {
    try {
      const result = await userCorses.findAll({
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt',
            'userId',
            'courseId',
            'user_id',
            'course_id',
          ],
        },
        include: [
          {
            model: Users,
            as: 'user',
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'password'],
            },
          },
          {
            model: Courses,
            as: 'course',
            attributes: {
              exclude: ['createdAt', 'updatedAt'],
            },
          },
        ],
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = userCorsesServices
