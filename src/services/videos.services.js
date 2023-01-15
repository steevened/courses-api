const Videos = require('../models/videos.models')

class VideosService {
  static async getAllVideos() {
    try {
      const result = await Videos.findAll({
        attributes: {
          exclude: [
            'password',
            'createdAt',
            'updatedAt',
            'courseId',
            'course_id',
          ],
        },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getVideoById(id) {
    try {
      const result = await Videos.findOne({
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async createVideo(body) {
    try {
      const result = await Videos.create(body)
      return result
    } catch (error) {
      throw error
    }
  }

  static async deleteVideo(id) {
    try {
      const result = await Videos.destroy({
        where: { id },
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = VideosService
