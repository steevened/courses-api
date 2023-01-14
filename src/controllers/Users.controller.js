const UserService = require('../services/user.services')

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsers()
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllUsers,
}
