const UserService = require('../services/user.services')

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsers()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getUserbyId = async (req, res) => {
  const { id } = req.params
  try {
    const result = await UserService.getUserbyId(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const getUserWithCourses = async (req, res) => {
  const { id } = req.params
  try {
    const result = await UserService.getUserWithCourses(id)
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const createUser = async (req, res) => {
  const body = req.body
  try {
    const result = await UserService.createUser(body)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllUsers,
  getUserbyId,
  getUserWithCourses,
  createUser,
}
