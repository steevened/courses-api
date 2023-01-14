const CoursesService = require('../services/courses.services')

const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesService.getAllCourses()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await CoursesService.getUserById(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllCourses,
  getUserById,
}
