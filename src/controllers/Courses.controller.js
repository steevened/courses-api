const CoursesService = require('../services/courses.services')

const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesService.getAllCourses()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getCourseById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await CoursesService.getCourseById(id)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllCourses,
  getCourseById,
}
