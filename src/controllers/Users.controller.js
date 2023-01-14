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

module.exports = {
  getAllUsers,
  getUserbyId,
}
