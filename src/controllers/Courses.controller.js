const { EmptyResultError } = require('sequelize')
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

const createCourse = async (req, res) => {
  const body = req.body
  try {
    const result = await CoursesService.createCourse(body)
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getWithCategoriesAndVideos = async (req, res) => {
  const { id } = req.params
  try {
    const result = await CoursesService.getWithCategoriesAndVideos(id)
    res.json(result)
  } catch (error) {
    res.satatus(400).json(error.message)
  }
}

const updateCourse = async (req, res) => {
  const { id } = req.params
  const description = {
    description: req.body.description,
  }
  try {
    const result = await CoursesService.updateCourse(id, description)
    res.json(result)
  } catch (error) {
    res.status(200).json(error.message)
  }
}

const getAllCourseRelations = async (req, res) => {
  try {
    const result = await CoursesService.getAllCourseRelations()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  getWithCategoriesAndVideos,
  updateCourse,
  getAllCourseRelations,
}
