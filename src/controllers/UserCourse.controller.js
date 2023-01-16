const userCorsesServices = require('../services/userCourses.services')

const getUserCourses = async (req, res) => {
  try {
    const result = await userCorsesServices.getUserCourses()
    res.json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = { getUserCourses }
